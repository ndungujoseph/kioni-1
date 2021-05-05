const Asena = require ('../ events');
const {MessageType} = require ('@ adiwajshing / baileys');
const got = require("got")

Asena.addCommand ({pattern: 'waifu ?(.*)', fromMe: true, onlygroup: false}, (async (message, match) => {
    if (match[1] === "") {
        try{
            //const resp = await fetch("https://mywaifulist.moe-api.herokuapp.com/all").then(r => r.json());
            const respo = await got("https://mywaifulist.moe-api.herokuapp.com/all").then(async ok => {
                const resp = JSON.parse(ok.body);
                await message.reply(`🌍 *World-Wide Results:*\n🌐 *Total Cases:* ${resp.cases}\n☠️ *Total Deaths:* ${resp.deaths}\n⚕️ *Total Recovered:* ${resp.recovered}`);

            });

        } catch (err) {     

    await message.sendMessage ('Search ho rha be tharkiyon, Ruko jara Sabar karo');
    await new Promise (r => setTimeout (r, 1000));
    

    await message.sendMessage ('Search ho gya h! Ache se dekho Aur ache se Hilana');


})));



Asena.addCommand({pattern: "infocovid", fromMe: true}, (async (message,match) => {
    
    await message.sendMessage("Get your waifu Fucktards");

    
    
}));
