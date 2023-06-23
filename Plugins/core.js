const fs = require("fs");
const axios = require("axios");
const path = require("path");
let mergedCommands = [
  "help",
  "h",
  "menu",
];

module.exports = {
  name: "others",
  alias: [...mergedCommands],
  uniquecommands: ["sc", "support"],
  description: "All miscleaneous commands",
  start: async (Atlas, m, { pushName, prefix, inputCMD, doReact }) => {
    let pic = fs.readFileSync("./Assets/Atlas.jpg");
    switch (inputCMD) {   
        Atlas.sendMessage(m.from, { image: pic, caption: txt2 }, { quoted: m });
        break;

      case "help":
      case "h":
      case "menu":
        await doReact("☃️");
        await Atlas.sendPresenceUpdate("composing", m.from);
        function readUniqueCommands(dirPath) {
          const allCommands = [];

          const files = fs.readdirSync(dirPath);

          for (const file of files) {
            const filePath = path.join(dirPath, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
              const subCommands = readUniqueCommands(filePath);
              allCommands.push(...subCommands);
            } else if (stat.isFile() && file.endsWith(".js")) {
              const command = require(filePath);

              if (Array.isArray(command.uniquecommands)) {
                const subArray = [file, ...command.uniquecommands];
                allCommands.push(subArray);
              }
            }
          }

          return allCommands;
        }

        function formatCommands(allCommands) {
          let formatted = "";

          for (const [file, ...commands] of allCommands) {
            const capitalizedFile =
              file.replace(".js", "").charAt(0).toUpperCase() +
              file.replace(".js", "").slice(1);

            formatted += `╟   🏮 *${capitalizedFile}* 🏮   ╢\n\n`;
            //formatted += `\`\`\`${commands.join("\n")}\`\`\`\n\n\n`;
            // Adding a - before each command
            formatted += `\`\`\`${commands
              .map((cmd) => `⥼   ${prefix + cmd}`)
              .join("\n")}\`\`\`\n\n\n`;
          }

          return formatted.trim();
        }

        const pluginsDir = path.join(process.cwd(), "Plugins");

        const allCommands = readUniqueCommands(pluginsDir);
        const formattedCommands = formatCommands(allCommands);
        var helpText = `\nKonnichiwa *${pushName}* Senpai,\n\nI am *${botName}*, a WhatsApp bot built to take your boring WhatsApp experience into next level.\n\n*🔖 My Prefix is:*  ${prefix}\n\n${formattedCommands}\n\n\n*©️ Ayush MD- 2023*`;
        await Atlas.sendMessage(
          m.from,
          { video: { url: botVideo }, gifPlayback: true, caption: helpText },
          { quoted: m }
        );

        break;
      default:
        break;
    }
  },
};
