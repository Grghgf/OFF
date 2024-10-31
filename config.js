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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/08f0eaf22ae3a2808b3a9.jpg";
global.devs = "https://t.me/alex";
global.sudo = process.env.SUDO || "244956100349";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/08f0eaf22ae3a2808b3a9.jpg";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEVOckZKSm9WRUkrTURBNFdhVGxQalpmUnZCNjdpdXhMVERteUFkSDUxcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUQvVFB4Y1RnVU85L3E5cDhCMzV6NUVvbHhnekt0QzZLaWIzemdZWVdFOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTmJyWVZpeUtDckJQOWhBQmZaVXNtNnNzV1dBNnBKV01HK0U5WTl5dUVJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDMDF6SGlpbXhLRlBhRmxTUUd5UTFBMDRtSktKQnRVdFdzZVhkbW1IK1JVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVNTjVyTHJYSDlhNjZRdGRtTi9PcFpmU2lnTm00aG1RcnBrWUFlQnB6MDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImprZXRYemtETSs2YUx1NmxWWE51WjRGbUxwMnR5UDVDSi9TSTJ5QUwxR0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0VXdHNnaW5HNW1ydG1iUHFlcnJtN2l3cHlOTFB3WWxyOVE0VjBRK0VtVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFpmdE9ndFVTMlJIcENoeHVPTC9OM3Fpbk14TS8zVmg4T0ZPY29RVVZ6QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBXYnJvZUM2TkRpc0Y4TDBHcyt2U1pBaDEvVmdyYUs4Zm4zckxnOFJlZGlkbWVobFJsSldmUnlPbXJjMzJUVUZQaWNncU9lNmIrcWhtcmVJSldwVkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjIsImFkdlNlY3JldEtleSI6IjVUWnRaMERicDhpYkRWMGphWnZJWkRIcExqWENiRFdlRzdNVmVFOWEwUkU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjQ0OTQ2NzAyODE0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjhGQzgxQkU4OUZGMDcxMDRGQzYyOUJFRDA4N0QzQjkxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzA0MDIyNTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI0NDk0NjcwMjgxNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwRjIzN0RGMTgwQUM1MjkxNURDREZDMzM1RjZENTQ5MSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwNDAyMjU3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJoV0U4a19XSlJQbUlUNDNRTy04THRnIiwicGhvbmVJZCI6IjQ4ZjQ5Mzc3LTY0ZWQtNDg5OC1iMDJhLTIyM2MyOGVkNWVjYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0NE9MTHJCdG5EQUxwQWJLVUF2Y0V2TGZFQUk9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNuWVdqbnR6bjJzODE0QVJGZWxNVHhOMUdnYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09yZXhia0JFTCt2ajdrR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im5HcXpiekJ0bTNKNXFJNlpNSUl0WWt0QlVIbTJhNVFRRitDY0V1Z3RTUVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ilc1VXpZZm04ZUxBaEg0NjJyOERhSkZoSlRsM1NCekhQZ1FJSnFHSjRxTUFUR1ROL285NUFEbG9WQWtXUGJrY21ySVlkNjg5eFkyQXg4N0FIMDI5VURRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJuQUJHR1Nuc0gxdnlsZjF6dEhwRVpnSjhMQnVuMU96STI1NFN1ZnBoeFYrYit5c1VGVU40K3c2VG55bzEzdEJmNEJnWi85cVZxRmdoalZoZ1ZPTnZDQT09In0sIm1lIjp7ImlkIjoiMjQ0OTQ2NzAyODE0OjlAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMTgxMDc4MDkwMjYwODQ6OUBsaWQiLCJuYW1lIjoi6qeB8J+lgPCdkazwnZGr8J2Rs/CdkazwnZKAIPCdkarwnZGo8J2RufCdkbvwnZGs8J2RueKBluKEmOC8kiJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDQ5NDY3MDI4MTQ6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaeHFzMjh3Ylp0eWVhaU9tVENDTFdKTFFWQjV0bXVVRUJmZ25CTG9MVWtHIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzA0MDIyNTMsImxhc3RQcm9wSGFzaCI6IjI4WlJsYSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRzJrIn0="
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
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "229",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BLADE").toUpperCase(),
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
