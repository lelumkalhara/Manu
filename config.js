/*════════════════════════════════════════════════════════════════════════════
                                                                            
   ⚡️ 𝗠𝗔𝗡𝗨-𝗠𝗗 𝐁𝐎𝐓 - 𝙑𝙀𝙍𝙎𝙄𝙊𝙉 8.0 ⚡️                                     
                                                                            
     🤖 Multi-functional WhatsApp User Bot by Manul Official               
     🔗 GitHub   : https://github.com/manulofficial7                        
     ▶️ YouTube  : https://youtube.com/@ManulOfficialTech                   
     📱 WhatsApp : +94 72 910 1856                                            
                                                                            
   ╭────────────────────────────────────────────────────────────────────╮
//███╗░░░███╗░█████╗░███╗░░██╗██╗░░░██╗
//████╗░████║██╔══██╗████╗░██║██║░░░██║
//██╔████╔██║███████║██╔██╗██║██║░░░██║
//██║╚██╔╝██║██╔══██║██║╚████║██║░░░██║
//██║░╚═╝░██║██║░░██║██║░╚███║╚██████╔╝
//╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░

//███╗░░░███╗██████╗░
//████╗░████║██╔══██╗
//██╔████╔██║██║░░██║
//██║╚██╔╝██║██║░░██║
//██║░╚═╝░██║██████╔╝
//╚═╝░░░░░╚═╝╚═════╝░
╰────────────────────────────────────────────────────────────────────╯  
                                                                          
════════════════════════════════════════════════════════════════════════════
*/
/**
 * 🧠 Author        : Manul Official
 * 🌐 Project Name  : MANU-MD
 * 🛠 Base Script   : By Manul Official
 * 📝 Description   : MANU-MD is a powerful and customizable WhatsApp bot 
 *                    built for fun, automation, and productivity!
 * 🔒 License       : © 2025 MANU-MD v8.0 - All Rights Reserved
 */
 
 const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || 'Put_Your_Session_ID', // Put your session id here ( Manu-MD&mZ9kVToC#AK-QU3Mng_3xodZ6uLOI2E8ct0WKDuQlRlfBBjxVt9g ) 🤍
PORT: process.env.PORT || '3000'
};
