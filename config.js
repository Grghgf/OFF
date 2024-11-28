//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "denzouchiwa@gmail.com";
global.location = "lakota, asia";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Angola";
global.github = process.env.GITHUB || "https://github.com/DENZO-UCHIWA/BLAST-MD";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/ZdD3v42/5ef70435f18d5fb1.jpg";
global.devs = "https://t.me/DENZO_UCHIWA";
global.sudo = process.env.SUDO || "244956100349";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://d.uguu.se/ArwETvsj.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUh3OFB0Z21NcW5uSW5aN2hkQmdacHlOeWVHbm90RWFlTnJuMGQ5dFJrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkE3ZGFHWFdwMGtmWkl0R2VVcDhMdWowYXhFdENkWHNpcXByU0dOdW5WST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQ1JuTzBMdTByOTdHUTZueU9VbXBSMHpoV1A2K1J6bFJrQUY5WU1ZNTJnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4MS84SGZvSUNVb3F0THRKMTY2N21QaTBXSmppMVVJd0YrVnVkWFpiRHk4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlGR3pQZmZueWM4aFcvS0grK1ZVN0M0TTNmdXRrMEwwYklBUlBvMGFQRnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxkcjlXY2xqWGhkZ0pmeUJ0T0VTRkV1RXlqQ2c4VlRCZ0ZHcHhnVjYyU289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUNWdzJNZ2lBSmtsZ0xENHpacDlobVRHVEN1c1U4azFrMDVVTHVPR29sVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFZIV0J1WkJFYmRtSU40Mkl5QzNMN3Q3Y0NzOTV5eEY5U2JoNDc1YldVOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRSY3BHeDI5WXVHemp2dGxvbnl4K3VuejJ1dUtyWGhuSzQzV2REa0hyQXNrU25EdGNZTVN3aC9aNWtveEtjK2lBckZFa2V5eHhnZEhGM0FHdU1Gb0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzYsImFkdlNlY3JldEtleSI6InBnQ1ZQNm1JODNsQnQxcmx4SXRTTnVIRmJlRytVQkp0SkRmQzk0cTNnbUE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjJxcHhfTlF6U0RHRG51aHE0T09MSmciLCJwaG9uZUlkIjoiOGNkZGU3NjQtZmNjMC00MWE1LTlhMWUtM2QxNWIyYTBkMzU1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikp5VTdRUHNZOWcxZmNGNGpRNURERkUrdVZpRT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVy9SeTcwVE5QOFZWT3B6RjVxSU9QVWxsYlpjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT3JleGJrQkVOei94N2tHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibkdxemJ6QnRtM0o1cUk2Wk1JSXRZa3RCVUhtMmE1UVFGK0NjRXVndFNRWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoib29pS1BMT2lwUVNSZGZLMTJXT0Z2eUV2N0QrL0ZpZzVvWDVKNFMwWFNxRjRXL2w1V1MvS29jT1pXRXBUdm94aTZ5dncxYW52K0VLOUFqTTdFYmpqQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IlNFcURoY0JDUXNNRk5KUW1TRkdLdVExWm8wOGxPaHM4S2hiSFZMTHpKc1hWdy91YlVBNEZmaVg0UUJNZHZaRnVGRWhGVjZLQysrT3hYMlNlMUQ4MkNRPT0ifSwibWUiOnsiaWQiOiIyNDQ5NDY3MDI4MTQ6MTBAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMTgxMDc4MDkwMjYwODQ6MTBAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0NDk0NjcwMjgxNDoxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaeHFzMjh3Ylp0eWVhaU9tVENDTFdKTFFWQjV0bXVVRUJmZ25CTG9MVWtHIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzEzMzAwMjYsImxhc3RQcm9wSGFzaCI6IjI4WlJsYSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRzJsIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`> 𝑩𝑳𝑨𝑺𝑻-𝑴𝑫 𝑩𝒀 𝑫𝑬𝑵𝒁𝑶-𝑼𝑪𝑯𝑰𝑾𝑨`",
  author: process.env.PACK_AUTHER || "BLAST-MD",
  packname: process.env.PACK_NAME || "DENZO-UCHIWA",
  botname: process.env.BOT_NAME || "BLAST-MD",
  ownername: process.env.OWNER_NAME || "DENZO-UCHIWA",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "229",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BLAST-MD").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
