require("dotenv").config();

let gg = process.env.MODS;
if (!gg) {
  gg = "918602306506";   // You can replace this number with yours //
}


global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb://uqhnhui6tgdcfavo1yse:BVovjPynONqouGgwBaI@baazz5vz3uceagiicvm1-mongodb.services.clever-cloud.com:2455/baazz5vz3uceagiicvm1";
global.sessionId = process.env.SESSION_ID || "madeinohio992";
global.prefa = process.env.PREFIX || "-";
global.tenorApiKey = process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `Ayush Bot`;
global.author = process.env.AUTHOR || "Ayush MD";
global.port = process.env.PORT || "10000";
global.openAiAPI = process.env.OPENAI_API || "Put your openai API key here";
global.ayush = process.env.AYUSH || "is a Human";
global.ayushnum = process.env.AYUSHNUM || "Never Gonna Give You Up";
global.group1 = process.env.GROUP1 || "Unavailable";
global.group2 = process.env.GROUP2 || "Unavailable";
global.insta = process.env.INSTA || "Unavailable";
global.owner = gg.split(",");

module.exports = {
  mongodb: global.mongodb,
};
