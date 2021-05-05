const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'ram', fromMe: true}, (async (message, match) => {

    await message.sendMessage('*Jay*');
    await message.sendMessage('*Shree*');
    await message.sendMessage('*Ram*');
    await message.sendMessage('🙏 *Jay Shree Ram Bhai* 🙏');
    
    await new Promise(r => setTimeout(r, 1000));

   
}));

Asena.addCommand({pattern: 'infoask', fromMe: true}, (async (message, match) => {

    await message.sendMessage("*Codded by @Unique_hunter*\n*Seni seviyorum demenin güzel bir hali.*\n💻Usage: *.ask*")

}));
   
Asena.addCommand({pattern: 'suca', fromMe: true}, (async (message, match) => {

    await message.sendMessage('*S*');
    await message.sendMessage('*Su*');
    await message.sendMessage('*Suc*');
    await message.sendMessage('*Succ*');
    await message.sendMessage('*Succh*');
    await message.sendMessage('*Succhi*');
    await message.sendMessage('*Succhia*');
    await 
message.sendMessage('*Succhiam*'); 
await message.sendMessage('*Succhiame*');
await message.sendMessage('*Succhiamel*');
await message.sendMessage('*Succhiamelo* 🍄');

    await new Promise(r => setTimeout(r, 1000));

    await message.sendMessage('*T*');
    await message.sendMessage('*Tu*');
    await message.sendMessage('*Tut*');
    await message.sendMessage('*Tutt*');
    await message.sendMessage('💕 *Tutto* 💞');

    await new Promise(r => setTimeout(r, 1000));

    await message.sendMessage('Succhiamelo tutto😳');

}));

Asena.addCommand({pattern: 'infosuca', fromMe: true}, (async (message, match) => {

    await message.sendMessage("*Fatto da Jo*\n💻Comando: *.suca*")

}));
