//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349133843583";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUNNQllJeWVndll4Vzc5eVZ2N3c3ZTNrVnJlNHJrTW4vdGZ2NE1QZVdGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnladkFIdUU0eCtEWmhnTzI1U0FQK1doK1d1T0VJL3hMMS9McnNqcjVCZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhS0FRdU9QYVQwWlJNbmRWc2VuV1c4LzhGUFhyU09CV1YwMmF3akU5YkVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3blZhSzZ2SFREQlNsT3ZsTnc1YW9LK0JQWE9pNHVmU2swMjYvRTRVbWxJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVFQklpZWtXS1dvcDlmMHVIcDBMSSs3WEQ3VnhhWEVWdzVwQk9ZOXg2RnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdlVkxwNG41SHFhQVMxc2ErWUVXdXkrNHJEdUlYSHdkL1A1R2lieWRaSFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUlzOGNDWVlSanNPaWYrcDhiRFQxM1pwU21adXo2OVZNYjNCR1NCL2oyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0hsVXlKa0lMeEtKd2RKclFBMXNBVFExQ3BtblJNZHU1eDk5b09FazJ3WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitlZHdINlp1cXJtT3YvamlGZGYzVHozQ1lDOU5Oc2VVNlN6OUh0Z0Joa3l6eHJoWFZMOXNnNmJwZkJFY01ENVRXM0RTZ2pUWnV4dGlWZkxrMVRpbmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTUsImFkdlNlY3JldEtleSI6IjJZNEhPTmtuNlVJSTlWR0RZZEkyVnJuRDRFSmxTd3FBM1FGQnlQMkh4RlU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkhaZFhyTmNOVGNtVk5xWlFLQTFJWmciLCJwaG9uZUlkIjoiZWFmN2YyNTUtYmRiYi00ZDJjLTk4MTgtZDQ5YmU3NzVhYzVjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxNMnZPRkNZODZRa01rbkJxYWVEWUkxOEhjMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwNEUxL21DNmpueUlFUDRiVDJkZFB6OThHWEU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTUtSSFJMVDIiLCJtZSI6eyJpZCI6IjIzNDkxMzM4NDM1ODM6NzlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ2h1a3d1dGVtIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNamt0UEVGRU9qTGpyMEdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJmaDYxZ0JpUnh2eG5EVlpueFlYcVd6bi9oamEySnFrU1BPZDkvb2IweHo0PSIsImFjY291bnRTaWduYXR1cmUiOiJVZlVlajhNeWNDSUpMd3VXK0dhK093dC9rZEs1UFB1ZFR0TjQ2bFRVbFNmQVhtTCtoK00vdnREb20vTWlHMTNJTHhSU1ZTcVN6eXN5K3NnYXd5RGxEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicEw1YVJJRTBrV0o2TENxS3ZabVc2dDI3ZFlZbGFoVWlNYVpZeEtTem1MSFh1a2wyekFCMWN5RUFlcFY5R2dPNWRkZTJ4WE10MTdjQURiMVQ5Y0lkaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTMzODQzNTgzOjc5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlg0ZXRZQVlrY2I4WncxV1o4V0Y2bHM1LzRZMnRpYXBFanpuZmY2RzlNYysifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mzg3NzgxMDN9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
