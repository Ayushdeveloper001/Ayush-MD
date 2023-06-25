const fs = require("fs");
const axios = require("axios");
const path = require("path");
let mergedCommands = [
  "help",
  "h",
  "menu",
  "sc",
  "repo",
  "git",
  "script",
];

module.exports = {
  name: "others",
  alias: [...mergedCommands],
  uniquecommands: ["sc", "support"],
  description: "All miscleaneous commands",
  start: async (Atlas, m, { pushName, prefix, inputCMD, doReact }) => {
    let pic = fs.readFileSync("./Assets/Ayush.jpg");
    switch (inputCMD) {

      case "owner":
        case "ayush":
          await doReact("🔰");
          let txt = `               🧣 *${botName}* is a Bot owned by ${ayushnum}*`;
          Atlas.sendMessage(m.from, { image: pic, caption: txt2 }, { quoted: m });
          break;

          case "support":
            case "supportgc":
              await doReact("🔰");
              let txt2 = `              🧣 *Hi, Here some groups of my owner*\n\n*Group 1* = {group1}\n\n*Group 2* = {group2}\n\n*Instagram* = {insta}`;
              Atlas.sendMessage(m.from, { image: pic, caption: txt2 }, { quoted: m });
              break;

        case "menu":
          case "help":
            await doReact("🔰");
            let txt = `              Konichiwa *${pushname}* Senpai,

            I am *${botName}*

            🔰 My owner is:   ${ayush}
            
            🔰 My prefix is:  ${prefix}
            
            Here's the list of my Commands.
            
            
             
             *━━━〈  🎆 Core 🎆  〉━━━*
            
            speak, help, damn, profile, help, delete, deleteall, listgc, listpc, welcome, admin\n\n
             
             *━━━〈  🎀 Owner 🎀  〉━━━*
            
            self, public, ban, bangroup, bye, join, bye, block, unblock, broadcast\n\n
            
             *━━━〈  ⭕ Group ⭕  〉━━━*
             
            promote, demote, revoke, add, remove, tagall, hidetag, groupsetting, grouplink, setgcpp, setname, setdesc, group\n\n
            
             *━━━〈  ➰ Anti Link ➰  〉━━━*
             
            antilinkgc, antilinktg, antilinktt, antilinkytch, antilinkytvid, antilinkig, antilinkfb, antilinktwit, antilinkall, antiwame\n\n
            
             *━━━〈  🔍 Search 🔍  〉━━━*
            
            play, ytmp3, ytmp4, yts, lyrics, google, gimage, pinterest, image, weather, movie, wallpaper, searchgc, happymod, wikimedia, ringtone, anime, animestory, manga, ringtone\n\n
            
             *━━━〈  🔰 Convert 🔰  〉━━━*
            
            sticker, toimg, tovideo, togif , steal, stickermeme, emojimix, tourl, tomp3, toaudio\n\n
            
             *━━━〈  🔉 Audio 🔉  〉━━━*
            
            bass, tempo, blown, deep, earrape, fast, fat, nightcore, reverse, robot, slow, squirrel\n\n
            
             *━━━〈  📍 Reactions 📍  〉━━━*
            
            bonk, cry, bully, cuddle, hug, kiss, lick, pat, smug, yeet, blush, smile, wave, highfive, handhold, nom, glomp, bite, slap, kill, happy, wink, poke, dance, cringe\n\n
            
             *━━━〈  🌌 Downloader 🌌  〉━━━*
            
            play, ytmp3, ytmp4, ytvideo, mediafire, instagram, igtv, facebook, fbmp3, twitter, twittermp3, tiktok, tiktokaudio, tiktoknowm, mediafire\n\n 
            
             *━━━〈  🈴 Weeb 🈴  〉━━━*
            
            crosplay, waifu, loli, neko, ppcouple, feed, foxgirl, feed, meow, tickle, wallpaper, coffee, animenom, waifu3, neko2, feed, meow, tickle, migumin, awoo, animewallpaper2, anime, manga\n\n
            
             *━━━〈  ♨️ Informative ♨️  〉━━━*
            
            animequote, quote, covid, earthquake, wiki\n\n
            
             *━━━〈  🎗 Others 🎗  〉━━━*
            
            stickermeme, quotes, darkjoke\n\n
            

             『  *${ayush}*  』
             Powered by: *${botName}*
            
             🔰 To use any of these commands type 
             " *${prefix}<Command name>* ".
             
             🔰 To get owner's number link type " *${prefix}owner*`;
            Atlas.sendMessage(m.from, { image: pic, caption: txt2 }, { quoted: m });
            break;
      default:
        break;
    }
  },
};