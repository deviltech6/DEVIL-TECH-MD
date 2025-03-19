const fs = require('fs');
const path = require('path');
const { CURRENT_STATUS, ALWAYS_ONLINE, FAKE_TYPING } = require('../config'); 
const { cmd, commands } = require('../command');

// Commande body
cmd({
    pattern: 'body',
    react: '📝',
    desc: 'Sends typing status.',
    category: 'status',
    filename: __filename
}, async (_conn, _mek, _m, { body, reply }) => {
    if (CURRENT_STATUS === true) {
        _conn.sendPresenceUpdate('composing', _mek.key.remoteJid);
    } else {
        _conn.sendPresenceUpdate('available', _mek.key.remoteJid);
    }
});

// Commande available
cmd({
    pattern: 'available',
    react: '🟢',
    desc: 'Sets bot status as available or unavailable.',
    category: 'status',
    filename: __filename
}, async (_conn, _mek, _m, { isOwner, reply }) => {
    if (ALWAYS_ONLINE === true) {
        _conn.sendPresenceUpdate('available', _mek.key.remoteJid);
    } else {
        _conn.sendPresenceUpdate('unavailable', _mek.key.remoteJid);
    }
});

// Commande composing (fake typing)
cmd({
    pattern: 'composing',
    react: '✍️',
    desc: 'Simulates typing.',
    category: 'status',
    filename: __filename
}, async (_conn, _mek, _m, { body, reply }) => {
    if (FAKE_TYPING === true) {
        _conn.sendPresenceUpdate('composing', _mek.key.remoteJid);
    }
});

// Commande pour afficher l'état du bot
cmd({
    pattern: "status",
    desc: "Check bot status",
    category: "main",
    react: "✅",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Construct the bot status message
        const botStatus = `*𝐃𝐄𝐕𝐈𝐋-𝐓𝐄𝐂𝐇-𝐌𝐃*
        
*╭───────────────◈◈►*
*│ 👾 ʙᴏᴛ ꜱᴛᴀᴛᴜꜱ: Online*
*│ 📆 ᴅᴀᴛᴇ: ${new Date().toLocaleDateString()}*
*│ ⏰ ᴛɪᴍᴇ: ${new Date().toLocaleTimeString()}*
*╰───────────────◈◈►*
`;

        await conn.sendMessage(from, {
            text: botStatus,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: '𝐃𝐄𝐕𝐈𝐋-𝐓𝐄𝐂𝐇-𝐌𝐃-Ｉ𝗗</>🇱🇰',
                    newsletterJid: "120363395467876104@newsletterr",
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});
