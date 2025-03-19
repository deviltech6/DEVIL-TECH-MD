const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    alias: ["status","bitinfo"],
    desc: "Check up time , ram usage and more",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `*◆DEVIL-TECH-MD 𝗪𝗔 𝗕𝗢𝗧👨‍💻 *
     *${pushname}*, am alive
*╭─────────────···▸*
*│▸⏰𝚄𝙿𝚃𝙸𝙼𝙴* : ${runtime(process.uptime())}
*│▸⚙️𝙿𝙻𝙰𝚃𝙵𝚁𝙾𝙼* : *[${os.hostname()}]*
*│▸📟 *Ram usage* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*│▸👨‍💻𝚂𝚄𝙿𝙾𝚁𝚃.𝙱𝚈 : ᴄʏʙᴇʀ ʟᴏᴋᴜ ᴀꜱʜᴜᴜ ᴏꜰᴄ*

*╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷*
`
return reply(`${status}`)
}catch(e){
console.log(e)
reply(`${e}`)

}
})
