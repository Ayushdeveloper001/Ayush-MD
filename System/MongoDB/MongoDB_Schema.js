const mongoose = require("mongoose");
const config = require("../../Configurations.js");
const options = {
  socketTimeoutMS: 30000, 
};

const db1 = mongoose.createConnection(config.mongodb, options);
const db2 = mongoose.createConnection(config.mongodb, options);

const GroupSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  antilink: { type: Boolean, default: false },
  chatBot: { type: Boolean, default: true },
  botSwitch: { type: Boolean, default: true },
  switchWelcome: { type: Boolean, default: false },
});

const UserSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  name: { type: String },
});

const CoreSchema = new mongoose.Schema({
  id: { type: String, unique: false, required: true, default: "1" },
  seletedCharacter: { type: String, default: "0" },
  PMchatBot: { type: Boolean, default: true },
  botMode: { type: String, default: "public" },
});

const userData = db1.model("UserData", UserSchema);
const groupData = db1.model("GroupData", GroupSchema);
const systemData = db2.model("SystemData", CoreSchema);

module.exports = { userData, groupData, systemData, pluginData };
