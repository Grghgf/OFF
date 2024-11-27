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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUlHblh0clQ2K2ZYQnIxOGFtc2lpTE5PNERQbGJiMkxER0pwTU5UNWVuYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicE5vVGt5Wnl5c29ySlFnc3FwQ2RLR1J0eVFJUG9SLzFxaFg0SnVieVMxaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTys1ckNkcW1jUkpzd1FKZ2RqVk9kVW84ei81QnMyV2RsS0FZVi9YL25ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBVTU1WU14Q1AyWUs2eXlaL1ZXUGhZODZoalB4dWxFMzZyYlBscURtN0dRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklBTTNNVk9lcTJ2ZTNHbGhJTEJ5QW9iWjdjaVBieTRReXpITlp2bTcya3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik55SGNLaWx2L2ZNM2FXTVRmZjJCZzZuQ3J2R2VmVW92V0JzQkNpdTJyR0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0gzY21RVTlvT1pRQXFsZjRxTmtQSWgyempKb1ZrUzNMUkJJUzloYUludz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXA3WHVDMGdsKzVEQk1lNWF6MEZ3NUNUNVMzY3ZTd0wvYWZKTksyajdYOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlrZEdxbkVmcmRTYlNSWWlVbDJkMmtPVkswQ2N6akpJK3NUenIvRFMydU9EZE9vVmltSTE5Z1dqUU45TUtNTVR5Qy9jb0lrL3NFdFNldDkvWUxUV2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM3LCJhZHZTZWNyZXRLZXkiOiJiNDk1SFlrS1d6SW91R1FUWlRaOHJZalNIbjNpY2RJUjhrMThDUytIcitvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJocTlZOVF1dVR0U2xRNDc4RWhsQ3V3IiwicGhvbmVJZCI6IjQwNTdhODQ5LWJiZTEtNDAyNy04NmViLWI5MmIzZDZjYmQ4YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYV0EwZTZVU2NXS1ZMYU9jRlI1SEplMVMxY2c9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdZRHFvRU5NeW5XYWZRZkhqWlZEQUFia212QT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pLM2h2NEVFTys2M2JrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImpjcmQ3Z1kvYWVNNjd4Y1diVytMek1HWHFrbjFhaVBpNWJhcVBYU0Y5RXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkVsbGNBN0p1cStLd1AvNEY1b0s2bUMxa3hROGszaC9jdXlHMkRsZzJtQTB3Tm5rdit3dHlLTEZ4V1p0UkdmOXJCSWxCdkpkSzJISnJsam9yOVhJUkNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0dUdUbUtTNStFSkNJZk5BbWRyWHYvdjMvYkhJaDY3bGNaMWRacDB5WHdsYlZhbHhTYXgyMUJ6SlpHQjlXNzJKY1BYKy9oNW5ZZWpKVVY1VllDVlJqZz09In0sIm1lIjp7ImlkIjoiMjQ0OTMxMzEzNjc1OjJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI1Mzc2NDkwMzkzNjAzNDoyQGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDQ5MzEzMTM2NzU6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZM0szZTRHUDJuak91OFhGbTF2aTh6Qmw2cEo5V29qNHVXMnFqMTBoZlJNIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzE2ODE2NjAsImxhc3RQcm9wSGFzaCI6IjI4WlJsYSJ9"
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
