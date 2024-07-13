const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254705223128";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_16_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDcwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjExLFxuICAgICAgICA5MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NixcbiAgICAgICAgMjQwLFxuICAgICAgICA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyLFxuICAgICAgICAzLFxuICAgICAgICA3NixcbiAgICAgICAgMTQwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTksXG4gICAgICAgIDM1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODcsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDksXG4gICAgICAgIDIxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg4LFxuICAgICAgICAyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDY5LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzksXG4gICAgICAgIDkwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzLFxuICAgICAgICA0MixcbiAgICAgICAgMTgxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDk3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODksXG4gICAgICAgIDc1LFxuICAgICAgICA2NixcbiAgICAgICAgMTQwLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTksXG4gICAgICAgIDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDkwLFxuICAgICAgICA5MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA1LFxuICAgICAgICAzMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInhqMG5xYTI4cW15RHpmWVBsRlFPbHp0bDhpOHdyNU9YRTNqaEhlamJSb2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhxY0hpWUh5UTNTblR0NHBZVGNJS3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjc3MmE0OWItOWRmNi00ODhhLWFhNjEtOTQ5NTU1MDViMjJhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NCxcbiAgICAgIDI1MixcbiAgICAgIDM0LFxuICAgICAgMjUxLFxuICAgICAgMjYsXG4gICAgICAxNjYsXG4gICAgICAwLFxuICAgICAgMTM1LFxuICAgICAgMTEyLFxuICAgICAgMTU0LFxuICAgICAgMTQ0LFxuICAgICAgMTk0LFxuICAgICAgNDcsXG4gICAgICAyMjYsXG4gICAgICA2LFxuICAgICAgNzIsXG4gICAgICAxMzYsXG4gICAgICA5OSxcbiAgICAgIDE3OSxcbiAgICAgIDEwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDgsXG4gICAgICAxMjYsXG4gICAgICAxOTUsXG4gICAgICAyMjMsXG4gICAgICA2NCxcbiAgICAgIDc3LFxuICAgICAgMjEzLFxuICAgICAgMjE0LFxuICAgICAgMTQsXG4gICAgICAxMSxcbiAgICAgIDIzLFxuICAgICAgMTI4LFxuICAgICAgOSxcbiAgICAgIDMyLFxuICAgICAgMTg4LFxuICAgICAgMjQyLFxuICAgICAgNzEsXG4gICAgICAzNyxcbiAgICAgIDg1LFxuICAgICAgMjQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlE1M0RLNzJWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MDUyMjMxMjg6NTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCIuTWF4cmluZWl4aWEgQXNqZW1wemlnIPOxoo9cIixcbiAgICBcImxpZFwiOiBcIjYyOTU1OTgyOTgzMjI3OjU2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01lZXNjMENFSXFieUxRR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidFNLZmgrTkhzMi9iNkgvaVpkd3NNUG1PWWcrOGl1b3RpWlZpaWVYZFdDRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJQTEJyNDRkY3lramxMSHNlRWxmL25SSzlCem9ycGY0ejNXUmd3bFNGbzhCQlgzK0JNVEoxNDNNNzdpZEdNNHphUmxSK2daVVN0Z3pMVEpuK1dTeExCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwME1tUWhyWjdxVlNXb1lZaWhzZ3MrdDVHK0RuYWlRM3c3MUFrNFAxeVN4WDhIQk5lRklXeFMzQ1NNeDNQaXg5eHBWeTY2bGlSM3dmdXhJOC9yV3VCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDUyMjMxMjg6NTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDg0Nzc1OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUV5MFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRXkwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNS9WSFVtMDNhcm1qVEFGSUErR0NtOFdpSEh5aDFwV0hvNGlDMi80bjNvWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTkxNTgzNDMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "maxrineixia",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "maxrineixia-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It's Maxrineixia",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
