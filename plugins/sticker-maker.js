const { cmd } = require('../command');
const { downloadMediaMessage } = require('@whiskeysockets/baileys');
const fs = require('fs');
const path = require('path');
const webp = require('node-webpmux');
const sharp = require('sharp');

// 📌 Function: Convert Image/GIF to Sticker
async function createSticker(buffer, isAnimated = false) {
    const tmpPath = path.join(__dirname, `../temp/sticker_${Date.now()}.webp`);
    if (isAnimated) {
        fs.writeFileSync(tmpPath, buffer);
    } else {
        await sharp(buffer)
            .resize(512, 512, { fit: 'contain' })
            .toFormat('webp')
            .toFile(tmpPath);
    }
    return tmpPath;
}

// 📌 Sticker Command
cmd({
    pattern: "sticker",
    desc: "Convert Image/GIF to Sticker",
    react: "✨",
    filename: __filename
}, async (conn, mek, m, { from, quoted }) => {
    try {
        if (!quoted || !(quoted.mtype === 'imageMessage' || quoted.mtype === 'videoMessage')) {
            return await conn.sendMessage(from, { text: "📌 Please reply to an *Image* or *GIF* to create a sticker." });
        }

        let buffer = await downloadMediaMessage(quoted);
        let isAnimated = quoted.mtype === 'videoMessage';

        let stickerPath = await createSticker(buffer, isAnimated);
        let stickerBuffer = fs.readFileSync(stickerPath);

        await conn.sendMessage(from, { 
            sticker: stickerBuffer 
        });

        fs.unlinkSync(stickerPath); // Remove temp file
    } catch (error) {
        console.error(`Error in Sticker Command: ${error.message}`);
        await conn.sendMessage(from, { text: "🚫 Failed to create a sticker. Please try again." });
    }
});
