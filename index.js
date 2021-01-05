const Discord = require("discord.js");
const client = new Discord.Client();

const { token, emoji } = require("./config.json");

client.on("ready", () => {
    console.log("sip activated");
});

client.on("message", message => {

    let opt = Math.floor((Math.random() * 10) + 1);
    console.log(opt);
    if(opt == 1) {
        message.react(emoji);
    } else {
        if(opt == 3) {
            message.channel.send(emoji);
        } else {
            
        }
    };
});

client.login(token);
