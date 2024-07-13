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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_43_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzLFxuICAgICAgICA3NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDksXG4gICAgICAgIDczLFxuICAgICAgICAxNzMsXG4gICAgICAgIDUxLFxuICAgICAgICA0NixcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA4LFxuICAgICAgICA3MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOCxcbiAgICAgICAgODcsXG4gICAgICAgIDU4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDkzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU1LFxuICAgICAgICA1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMixcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk3LFxuICAgICAgICA5MSxcbiAgICAgICAgMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE2LFxuICAgICAgICA3NyxcbiAgICAgICAgMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzksXG4gICAgICAgIDMyLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzksXG4gICAgICAgIDM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDkyLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk5LFxuICAgICAgICA1NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTksXG4gICAgICAgIDcwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEsXG4gICAgICAgIDM0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDczLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDksXG4gICAgICAgIDk0LFxuICAgICAgICA5NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDUzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDc1LFxuICAgICAgICA0MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDc0LFxuICAgICAgICAzMixcbiAgICAgICAgNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDM4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMFl6b1NLbjdZYUx2RytsSk9KeGhMU3p1bHRSbTFCa3p2eXJtTklqZG9ucz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiU2tBZUdBcVBSREN3a1Z2WGRSa0FkZ1wiLFxuICBcInBob25lSWRcIjogXCIyZTYyMWU4OS02NjBkLTQ5N2UtOGJkYS02NWM1Mzk0OTlmNDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYsXG4gICAgICA0MSxcbiAgICAgIDE2LFxuICAgICAgMjM2LFxuICAgICAgMjAzLFxuICAgICAgNzEsXG4gICAgICA3NCxcbiAgICAgIDEyMCxcbiAgICAgIDEyMyxcbiAgICAgIDI0NSxcbiAgICAgIDI0NSxcbiAgICAgIDEwOCxcbiAgICAgIDEzNixcbiAgICAgIDYzLFxuICAgICAgMzgsXG4gICAgICA2MCxcbiAgICAgIDc1LFxuICAgICAgMTM0LFxuICAgICAgMTc1LFxuICAgICAgMTQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NyxcbiAgICAgIDIxMSxcbiAgICAgIDI0MyxcbiAgICAgIDE5OCxcbiAgICAgIDEzNSxcbiAgICAgIDIxMixcbiAgICAgIDEwMixcbiAgICAgIDE2NCxcbiAgICAgIDI4LFxuICAgICAgMTkwLFxuICAgICAgMjE4LFxuICAgICAgMjEwLFxuICAgICAgMjA0LFxuICAgICAgMTY1LFxuICAgICAgNDYsXG4gICAgICA2OCxcbiAgICAgIDc3LFxuICAgICAgNTQsXG4gICAgICAxNyxcbiAgICAgIDIzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTTDQzVkM2WFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzI5NjYzNzI0OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1NjM3NTQ5Nzg4Mzg5NDo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B2b3VwMEdFSW5neUxRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM0JWczlHeWNGVW8vNU8rZXJITmZhLzJ5aVVHR3hDTXRsTkhBUTNreDBsND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5QVJQOWhVQURBd00zSmlLK3RETk5UZlh4WGdOZWhNbEVkZlgzc05uVjdMMVF6aHIrdmR5TW1PZHFIamNVQVl3T2V3bWRPa3B5eVhFYWZva2dRb3NCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSS1ZsdEtSZlVYWmRPanVSeFZrT3J4TW11U2Zick1RZ2dGU3VNUlBDaVFvZnhaRExMVTkwTGdxOU1OakdVeW9nVWlLWlMxTEFvQXNEUTZHdFd0SHdqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3Mjk2NjM3MjQ6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA4NTY1ODksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNZmpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1mai5qc29uIjogIntcImtleURhdGFcIjpcImFPSFV2YUpJUWhEbHVwM3hVbEtPN1RLNXl3VC9lcElVYWZuNlRNdFZzYU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY3MjM5Mzg1MSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwODU2NTQwOTgyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
