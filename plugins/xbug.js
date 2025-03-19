

const config = require('../config');
const { cmd } = require('../command');

// Send Bug Report Or Request To Developer 

// Define the report command
cmd({
    pattern: "xbug", // Command Name 
    alias: ["report", "request", "dev", "developer"], // Multi Commands 
    desc: "Send a bug or request report to the developer",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, body, sender, senderNumber, pushname, reply }) => {
    try {
        const reportedMessages = {}; // Cache to track reported messages
        const devlopernumber = '94760091093'; // Developer's number with country code 
        const prefix = config.PREFIX; // Prefix from config
        const cmd = body.startsWith(prefix) ? body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
        const text = body.slice(prefix.length + cmd.length).trim();

        // Validate input
        if (!text) {
            return reply(`Example: ${prefix}${cmd} Hi dev, the play command is not working.`);
        }

        const messageId = m.key.id;

        // Check for duplicate reports
        if (reportedMessages[messageId]) {
            return reply("This report has already been forwarded to the owner. Please wait for a response.");
        }

        reportedMessages[messageId] = true;

        // Format the messages
        const ownerMessage = `*| REQUEST/BUG |*\n\n*User*: @${sender.split("@")[0]}\n*Request/Bug*: ${text}`;
        const userMessage = `*Hi ${pushname}, your request has been forwarded to my Owners.*\n*Please wait for a response...*`;

        // Send the report to the developer
        await conn.sendMessage(devlopernumber + "@s.whatsapp.net", {
            text: ownerMessage,
            mentions: [sender]
        }, { quoted: mek });

        // Notify the user
        reply("Thank you for your report. It has been forwarded to the owner. Please wait for a response.");
    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});
