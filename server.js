require('dotenv').config({ path: __dirname + '/vars.env' });

const fs = require('fs');
const Discord = require("discord.js");
const client = new Discord.Client();

function getImage() {
    let files = fs.readdirSync(process.env.IMAGES_DIR);
    let number = Math.floor(require('math-random')() * files.length) + 1;
    return files[number];
}

client.on('message', message => {
    if (message.content.startsWith('!image')) {
        try {
            message.channel.send({ files: [process.env.IMAGES_DIR + getImage()] });
        } catch (e) {
            console.log('Image error!');
        }
    };
});

client.login(process.env.DISCORD_TOKEN);