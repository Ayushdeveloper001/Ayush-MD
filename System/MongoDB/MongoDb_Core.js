const {
  userData,
  groupData,
  systemData,
  pluginData,
} = require("../MongoDB/MongoDB_Schema.js");
const mongoose = require("mongoose");

// SET CHAR ID
async function setChar(charId) {
  const character = await systemData.findOne({ id: "1" });
  if (!character) {
    await systemData.create({ id: "1", seletedCharacter: charId });
    return;
  }
  await systemData.findOneAndUpdate({ id: "1" }, { $set: { seletedCharacter: charId } });
}

// GET CHAR ID
async function getChar() {
  const character = await systemData.findOne({ id: "1" });
  if (!character) {
    return "0";
  }
  return character.seletedCharacter;
}

// ACTIVATE PM CHATBOT
async function activateChatBot() {
  const chatbotpm = await systemData.findOne({ id: "1" });
  if (!chatbotpm) {
    await systemData.create({ id: "1", PMchatBot: true });
    return;
  }
  if (chatbotpm.PMchatBot) {
    return;
  }
  await systemData.findOneAndUpdate({ id: "1" }, { $set: { PMchatBot: true } });
}

// CHECK PM CHATBOT STATUS
async function checkPmChatbot() {
  const chatbotpm = await systemData.findOne({ id: "1" });
  if (!chatbotpm) {
    return false;
  }
  return chatbotpm.PMchatBot;
}

// DEACTIVATE PM CHATBOT
async function deactivateChatBot() {
  const chatbotpm = await systemData.findOne({ id: "1" });
  if (!chatbotpm) {
    await systemData.create({ id: "1", PMchatBot: false });
    return;
  }
  if (!chatbotpm.PMchatBot) {
    return;
  }
  await systemData.findOneAndUpdate({ id: "1" }, { $set: { PMchatBot: false } });
}

// SET WELCOME MESSAGE
async function setWelcome(groupID) {
  const group = await groupData.findOne({ id: groupID });
  if (!group) {
    await groupData.create({ id: groupID, switchWelcome: true });
    return;
  }
  if (group.switchWelcome) {
    return;
  }
  await groupData.findOneAndUpdate({ id: groupID }, { $set: { switchWelcome: true } });
}

// CHECK WELCOME MESSAGE STATUS
async function checkWelcome(groupID) {
  const group = await groupData.findOne({ id: groupID });
  if (!group) {
    return false;
  }
  return group.switchWelcome;
}

// DELETE WELCOME MESSAGE
async function delWelcome(groupID) {
  const group = await groupData.findOne({ id: groupID });
  if (!group) {
    await groupData.create({ id: groupID, switchWelcome: false });
    return;
  }
  if (!group.switchWelcome) {
    return;
  }
  await groupData.findOneAndUpdate({ id: groupID }, { $set: { switchWelcome: false } });
}

// SET ANTI-LINK
async function setAntilink(groupID) {
  const group = await groupData.findOne({ id: groupID });
  if (!group) {
    await groupData.create({ id: groupID, antilink: true });
    return;
  }
  if (group.antilink) {
    return;
  }
  await groupData.findOneAndUpdate({ id: groupID }, { $set: { antilink: true } });
}

// CHECK ANTI-LINK STATUS
async function checkAntilink(groupID) {
  const group = await groupData.findOne({ id: groupID });
  if (!group) {
    return false;
  }
  return group.antilink;
}

// DELETE ANTI-LINK
async function delAntilink(groupID) {
  const group = await groupData.findOne({ id: groupID });
  if (!group) {
    await groupData.create({ id: groupID, antilink: false });
    return;
  }
  if (!group.antilink) {
    return;
  }
  await groupData.findOneAndUpdate({ id: groupID }, { $set: { antilink: false } });
}

// SET GROUP CHATBOT
async function setGroupChatbot(groupID) {
  const group = await groupData.findOne({ id: groupID });
  if (!group) {
    await groupData.create({ id: groupID, chatBot: true });
    return;
  }
  if (group.chatBot) {
    return;
  }
  await groupData.findOneAndUpdate({ id: groupID }, { $set: { chatBot: true } });
}

// CHECK GROUP CHATBOT STATUS
async function checkGroupChatbot(groupID) {
  const group = await groupData.findOne({ id: groupID });
  if (!group) {
    return false;
  }
  return group.chatBot;
}

// DELETE GROUP CHATBOT
async function delGroupChatbot(groupID) {
  const group = await groupData.findOne({ id: groupID });
  if (!group) {
    await groupData.create({ id: groupID, chatBot: false });
    return;
  }
  if (!group.chatBot) {
    return;
  }
  await groupData.findOneAndUpdate({ id: groupID }, { $set: { chatBot: false } });
}


/*// PUSH NEW INSTALLED PLUGIN IN DATABASE
async function pushPlugin(newPlugin, url) {
  const pluginsCollection = db.collection("plugins");
  const plugin = {
    plugin: newPlugin,
    url: url,
  };
  await pluginsCollection.insertOne(plugin);
}

// Check if plugin is installed
async function isPluginPresent(pluginName) {
  const pluginsCollection = db.collection("plugins");
  const plugin = await pluginsCollection.findOne({ plugin: pluginName });
  return !!plugin;
}

// DELETE A PLUGIN FROM THE DATABASE
async function delPlugin(pluginName) {
  const pluginsCollection = db.collection("plugins");
  const plugin = await pluginsCollection.findOne({ plugin: pluginName });
  if (!plugin) {
    throw new Error("The plugin is not present in the database.");
  }
  await pluginsCollection.deleteOne({ plugin: pluginName });
}*/



// Exporting the functions
module.exports = {
  setChar, // ---------------------- SET CHAR ID
  getChar, // ---------------------- GET CHAR ID
  activateChatBot, // -------------- ACTIVATE PM CHATBOT
  checkPmChatbot, // --------------- CHECK PM CHATBOT STATUS
  deactivateChatBot, // ------------ DEACTIVATE PM CHATBOT
  setWelcome, // ------------------- SET WELCOME MESSAGE
  checkWelcome, // ----------------- CHECK WELCOME MESSAGE STATUS
  delWelcome, // ------------------- DELETE WELCOME MESSAGE
  setAntilink, // ------------------ SET ANTILINK
  checkAntilink, // ---------------- CHECK ANTILINK STATUS
  delAntilink, // ------------------ DELETE ANTILINK
  setGroupChatbot, // -------------- SET GROUP CHATBOT
  checkGroupChatbot, // ------------ CHECK GROUP CHATBOT STATUS
  delGroupChatbot, // -------------- DELETE GROUP CHATBOT
};
