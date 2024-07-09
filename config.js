const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "9034134622" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "9034134622";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_48_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNixcbiAgICAgICAgODMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNixcbiAgICAgICAgNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI3LFxuICAgICAgICA4NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA3NyxcbiAgICAgICAgMyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMjU1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDksXG4gICAgICAgIDE5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NixcbiAgICAgICAgMjE4LFxuICAgICAgICA0NixcbiAgICAgICAgMTczLFxuICAgICAgICAxNjAsXG4gICAgICAgIDU2LFxuICAgICAgICA3MixcbiAgICAgICAgODAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA1OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MixcbiAgICAgICAgODQsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDc0LFxuICAgICAgICA5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEsXG4gICAgICAgIDMyLFxuICAgICAgICA1NixcbiAgICAgICAgMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg1LFxuICAgICAgICA3LFxuICAgICAgICA1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA0NixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICA4NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQxLFxuICAgICAgICA1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExLFxuICAgICAgICAxMTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTQsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDU0LFxuICAgICAgICA1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDUyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExLFxuICAgICAgICAwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMmRrelJ3YnVxTnRqb3ZtUHZBUTZ5NGRBV0FSaTlpbXEzelFDS09oWXdQRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDM0MTM0NjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0RjM3RDQ4RkJGRjBCNjU3RDk2RjRCNDQwQTlDRjAwMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA1NTA4NzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDM0MTM0NjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2RTUwRDUxRDdFNEQzOURGODRFMkJDMUY5RjZCRDdBOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA1NTA4NzlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwic1F4eW1sT1BUaldTNlJ4RFJRVTRxQVwiLFxuICBcInBob25lSWRcIjogXCJmN2JiYmM1ZC1lMjk2LTRmNDYtYjJkYy02MGVmNGJhZTliZTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk1LFxuICAgICAgMTMwLFxuICAgICAgNDksXG4gICAgICAxMzQsXG4gICAgICAyMDksXG4gICAgICAyMDcsXG4gICAgICAyMjEsXG4gICAgICA4NSxcbiAgICAgIDEzLFxuICAgICAgMTg1LFxuICAgICAgMTY2LFxuICAgICAgMzgsXG4gICAgICAyNDUsXG4gICAgICAxNDUsXG4gICAgICAxNjUsXG4gICAgICAxMjgsXG4gICAgICA0OSxcbiAgICAgIDE5OCxcbiAgICAgIDIxNixcbiAgICAgIDE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkwLFxuICAgICAgMTY0LFxuICAgICAgMTk5LFxuICAgICAgMjE5LFxuICAgICAgNDYsXG4gICAgICAxOTYsXG4gICAgICA5MSxcbiAgICAgIDMwLFxuICAgICAgOSxcbiAgICAgIDEzMCxcbiAgICAgIDE5NCxcbiAgICAgIDEyLFxuICAgICAgMTAsXG4gICAgICAzNSxcbiAgICAgIDMyLFxuICAgICAgMzcsXG4gICAgICAzNSxcbiAgICAgIDE1MixcbiAgICAgIDEzNSxcbiAgICAgIDM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJFRzVHNkE4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDM0MTM0NjIyOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk1Mjk2ODM1MDU5ODc4OjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRGFteeKdpO+4j+KAjfCflKXwn6SfXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFBZcGZNREVOQ0x0clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3TXV0bVhySmR6VkRqY1R3SXVvNWNmM045bndtNWprZUR2ejExME9UODNZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIndaTzRlT1hrOUY3UXMrdVBmVXkvVXdOdjdxdWZHRmxybUVjVFU4ckdCMm1oRHQzeGlleGRVb0JiRjkyYUUxV1RVYVh4cE1KWHJBdjVUaUIvU1dVaUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImFNUWhpaXlMR0xlT2VGU3VRWkVMYW5WMzFBSFphWVppUEo2VjdDR3l1S1BhWCs0M1lyb21QYTRGWUNIRE13aDlCamlLaW4zU2s4SDIzaDZwN0pxRmp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzQxMzQ2MjI6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU1MDg3MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNkL1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ2QvLmpzb24iOiB7fQp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Damy (Psycho)",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























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
