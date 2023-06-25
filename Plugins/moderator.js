const fs = require("fs");
const Jimp = require("jimp");
const moment = require("moment-timezone");
const {
  setChar, // ---------------------- SET CHAR ID
  getChar, // ---------------------- GET CHAR ID
  activateChatBot, // -------------- ACTIVATE PM CHATBOT
  checkPmChatbot, // --------------- CHECK PM CHATBOT STATUS
  deactivateChatBot, // ------------ DEACTIVATE PM CHATBOT
} = require("../System/MongoDB/MongoDb_Core");

const {
  userData,
  groupData,
  systemData,
} = require("../System/MongoDB/MongoDB_Schema.js");

let mergedCommands = [,
  "setchar",
  "dmchatbot",
  "pmchatbot",
];

module.exports = {
  name: "moderators",
  alias: [...mergedCommands],
  uniquecommands: [
    "setchar",
    "dmchatbot",
    "pmchatbot",
  ],
  description: "All Moderator/Owner Commands",
  start: async (
    Atlas,
    m,
    {
      inputCMD,
      text,
      mods,
      isCreator,
      banData,
      prefix,
      db,
      isintegrated,
      doReact,
      args,
      itsMe,
      participants,
      metadata,
      mentionByTag,
      mime,
      isMedia,
      quoted,
      botNumber,
      isBotAdmin,
      groupAdmin,
      isAdmin,
      pushName,
      groupName,
    }
  ) => {
   isUsermod = await checkMod(m.sender);
        if (!isCreator && !isintegrated && !isUsermod) {
          await doReact("❌");
          return m.reply(
            "Sorry, only my *Mods* can use this command !"
          );
        }
    switch (inputCMD) {
      case "setchar":
        if (!text) {
          await doReact("❌");
          return Atlas.sendMessage(
            m.from,
            { text: `Please enter a character number between 0-19 to set !` },
            { quoted: m }
          );
        }
        chechSenderModStatus = await checkMod(m.sender);
        if (!chechSenderModStatus && !isCreator && !isintegrated) {
          await doReact("❌");
          return Atlas.sendMessage(m.from, {
            text: `Sorry, only *Owners* and *Mods* can use this command !`,
            quoted: m,
          });
        }

        const intinput = parseInt(text);
        if (intinput < 0 || intinput > 19) {
          await doReact("❌");
          return Atlas.sendMessage(
            m.from,
            { text: `Please enter a character number between 0-19 to set !` },
            { quoted: m }
          );
        }
        const botNames = [
          "Ayush MD",
          "Power",
          "Makima",
          "Denji",
          "Zero Two",
          "Chika",
          "Miku",
          "Marin",
          "Ayanokoji",
          "Ruka",
          "Mizuhara",
          "Rem",
          "Sumi",
          "Kaguya",
          "Yumeko",
          "Kurumi",
          "Mai",
          "Yor",
          "Shinbou",
          "Eiko",
        ];
        const botLogos = [
          "https://wallpapercave.com/wp/wp5924545.jpg",
          "https://wallpapercave.com/wp/wp11253614.jpg",
          "https://images5.alphacoders.com/126/1264439.jpg",
          "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/11/Chainsaw-Man-Denji-e-Power.webp?resize=1068%2C601&ssl=1",
          "https://images3.alphacoders.com/949/949253.jpg",
          "https://images4.alphacoders.com/100/1002134.png",
          "https://wallpapercave.com/wp/wp10524580.jpg",
          "https://images2.alphacoders.com/125/1257915.jpg",
          "https://wallpapers.com/images/file/kiyotaka-ayanokoji-in-pink-qs33qgqm79ccsq7n.jpg",
          "https://wallpapercave.com/wp/wp8228630.jpg",
          "https://images3.alphacoders.com/128/1288059.png",
          "https://images.alphacoders.com/711/711900.png",
          "https://moewalls.com/wp-content/uploads/2022/07/sumi-sakurasawa-hmph-rent-a-girlfriend-thumb.jpg",
          "https://wallpapercave.com/wp/wp6099650.png",
          "https://wallpapercave.com/wp/wp5017991.jpg",
          "https://wallpapercave.com/wp/wp2535489.jpg",
          "https://images4.alphacoders.com/972/972790.jpg",
          "https://images7.alphacoders.com/123/1236729.jpg",
          "https://wallpapercave.com/wp/wp4650481.jpg",
          "https://images8.alphacoders.com/122/1229829.jpg",
        ];

        checkChar = await getChar();
        if (checkChar === intinput) {
          await doReact("✅");
          return Atlas.sendMessage(
            m.from,
            {
              image: { url: botLogos[intinput] },
              caption: `Character number *${intinput}* - *${botNames[intinput]}* is already default !`,
            },
            { quoted: m }
          );
        }
        await doReact("✅");
        await setChar(intinput);
        await Atlas.sendMessage(
          m.from,
          {
            image: { url: botLogos[intinput] },
            caption: `Character number *${intinput}* - *${botNames[intinput]}* has been set Successfully by *${pushName}*`,
          },
          { quoted: m }
        );
        break;

      case "dmchatbot":
      case "pmchatbot":
        if (!text) {
          await doReact("❌");
          return m.reply(
            `Please provide On / Off action !\n\n*Example:*\n\n${prefix}pmchatbot on`
          );
        }
        chechSenderModStatus = await checkMod(m.sender);
        if (!chechSenderModStatus && !isCreator && !isintegrated) {
          await doReact("❌");
          return Atlas.sendMessage(m.from, {
            text: `Sorry, only *Owners* and *Mods* can use this command !`,
            quoted: m,
          });
        }
        pmChatBotStatus = await checkPmChatbot();
        await doReact("🧩");
        if (args[0] === "on") {
          if (pmChatBotStatus) {
            await doReact("❌");
            return Atlas.sendMessage(m.from, {
              text: `Private Chatbot is already *Enabled* !`,
              quoted: m,
            });
          } else {
            await activateChatBot();
            await m.reply(
              `*PM Chatbot* has been *Enabled* Successfully ! \n\nBot will reply to all chats in PM !`
            );
          }
        } else if (args[0] === "off") {
          if (!pmChatBotStatus) {
            await doReact("❌");
            return Atlas.sendMessage(m.from, {
              text: `Private Chatbot is already *Disabled* !`,
              quoted: m,
            });
          } else {
            await deactivateChatBot();
            await m.reply(`*PM Chatbot* has been *Disabled* Successfully !`);
          }
        } else {
          await doReact("❌");
          return m.reply(
            `Please provide On / Off action !\n\n*Example:*\n\n${prefix}pmchatbot on`
          );
        }

        break;

      default:
        break;
    }
  },
};
