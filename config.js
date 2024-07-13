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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254 794 424575";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_52_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ2LFxuICAgICAgICA1MixcbiAgICAgICAgMTk4LFxuICAgICAgICA0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDcsXG4gICAgICAgIDc3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMixcbiAgICAgICAgNjUsXG4gICAgICAgIDU0LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDExLFxuICAgICAgICAzNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUwLFxuICAgICAgICA2OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM1LFxuICAgICAgICA2NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTIsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDkyLFxuICAgICAgICA2MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA1OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDk5LFxuICAgICAgICA2MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNixcbiAgICAgICAgNTksXG4gICAgICAgIDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDM5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODgsXG4gICAgICAgIDM1LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgNDksXG4gICAgICAgIDI2LFxuICAgICAgICAwLFxuICAgICAgICA2NixcbiAgICAgICAgNTksXG4gICAgICAgIDM1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2LFxuICAgICAgICAwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5MixcbiAgICAgICAgMTgxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2MixcbiAgICAgICAgMTM2LFxuICAgICAgICA1NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxODksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQQUpWSUZKaEhJQnpxL0I4c294bnJGMWFpRTNCemlEa3h1b0hwMjgzYXIwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc5NDQyNDU3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzJFRUY0NEQwQThDRjY0M0Y3NUMxODc5RUQ0NDBFRDBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwODcxNTYyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0Nzk0NDI0NTc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5Qzk3NzE3QTZGMEI5RUYwODlCMTVENkI2MkMwRDk2NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA4NzE1NjNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTE83UC1HYWlTX2k5bGZiRnNiQi1VQVwiLFxuICBcInBob25lSWRcIjogXCJhMTNiNDFmYi1hZTY1LTQzZGEtYjVjZS1iNTNjMzQ4MjRhOWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM3LFxuICAgICAgMTYxLFxuICAgICAgOTEsXG4gICAgICAxNDQsXG4gICAgICA1OSxcbiAgICAgIDI0NSxcbiAgICAgIDIxMyxcbiAgICAgIDIxNyxcbiAgICAgIDE4MCxcbiAgICAgIDE3MixcbiAgICAgIDIxMixcbiAgICAgIDc1LFxuICAgICAgMTQ4LFxuICAgICAgMjIxLFxuICAgICAgMTM5LFxuICAgICAgMjI0LFxuICAgICAgMTg1LFxuICAgICAgMjI2LFxuICAgICAgMTc5LFxuICAgICAgNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE0LFxuICAgICAgMTExLFxuICAgICAgNjMsXG4gICAgICAyLFxuICAgICAgMTgyLFxuICAgICAgMjQ2LFxuICAgICAgMjA0LFxuICAgICAgMTY0LFxuICAgICAgMTA1LFxuICAgICAgNTgsXG4gICAgICAxNzEsXG4gICAgICAxMDEsXG4gICAgICAxMDUsXG4gICAgICAxODgsXG4gICAgICAyMTIsXG4gICAgICAxNDksXG4gICAgICAyMzIsXG4gICAgICAxNDUsXG4gICAgICAxMCxcbiAgICAgIDgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhTMVRXRUhBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3OTQ0MjQ1NzU6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI1ODIxMDkyNTA3Nzk0OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTWFtYXNpbWJhIPCfpbDwn6WwXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1Rrd3FzREVJWFZ5YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJtNklqYUMrWWN0Z3hxWGk0VndaU0tZNzh3TGxUTXN5WE1Gb0RpK0M0OW13PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk1DdXZibktkcUdhNW5XNkF0TUVaUWRkQlNUWXNieE9UZys2MEVtamRxRVp5QkR5Sm5CU3huMUFGdEFCQlRpYkozSTVnZWxCWlFTeDkzbTdaSzRxVENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImVQdFA2SHIzcVJoZmpVUGxZbmJFQXdsczFrSk1LVmswSWJPWjB0UnArbk5LeStnYnlxSXBlNkdTeVJzclEyUS9oa1M2aTMxY2w2c1JJcVhoUGkvVURRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc5NDQyNDU3NToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDg3MTU1OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURnSFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRGdILmpzb24iOiAie1wia2V5RGF0YVwiOlwiSXRiWGlRNFBRSWRvbnpDUDNObUM4WldpUUdsMTROU2RRYmtZbzdEWmtuOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4OTY1NzgwODQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDg3MTU2MjgzMVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "mamasimba-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "simba",


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
