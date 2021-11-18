// Require discord.js package
const Discord = require("discord.js");

// Create a new client using the new keyword
const client = new Discord.Client();

// Create array for clean code
const stringArray = ["ready", "reconnecting", "disconnect", "message", "!hello", "!help"]

// Add a safer way to store the token (password)
const {
    token
} = require("./token.json");

// Display a message when the bot comes online
client.on(stringArray[0], () => {
    console.log(`Logged in as ${client.user.tag}!`)
});

// reconnecting event
client.on(stringArray[1], () => {
    console.log(`This bot is reconnecting: ${client.user.tag}`)
})

// disconnect event
client.on(stringArray[2], () => {
    console.log(`This bot is now disconnected: ${client.user.tag}`)
})

// Check for new messages
client.on(stringArray[3], msg => {
    const toLower = msg.content.toLowerCase();

    switch (toLower) {
        // Send back a reply when the specific command has been written by a user
        case stringArray[4]:
            msg.reply("Hello World!");
            break;
        // !help command
        case stringArray[5]:
            msg.reply("The hello world bot has 2 commands. !hello, !help")
            break;
        default:
            break;
    }
})

// Log in the bot using your token (password)
client.login(token);
