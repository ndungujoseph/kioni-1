/*const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const Sr = "Search on Gogle."

if (Config.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'search ?(.*)', fromMe: true, desc: Sr}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,'```You must enter what you want to search for!```', MessageType.text);
 
    Sea.google(`${match[1]}`).then(async(result) => {
        
        await message.client.sendMessage(message.jid,result[0], MessageType.text);
      });
  }));
}

else if (Config.WORKTYPE == 'public') {

Asena.addCommand({pattern: 'search ?(.*)', fromMe: false, desc: Sr}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,'```¡Debes ingresar lo que quieres buscar!```', MessageType.text);
 
    Sea.google(`${match[1]}`).then(async(result) => {
        
        await message.client.sendMessage(message.jid,result[0], MessageType.text);
      });
  }));
}
*/
