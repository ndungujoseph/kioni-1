const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg'); // For Creating File
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const axios = require('axios'); // Resp Checker
const Config = require('../config'); // GAN STYLE Support

const got = require("got"); // Responses Catcher
const deepai = require('deepai'); // Localde ise deepmain.js oluşturarak özelleştirilebilir şekilde kullanabilirsiniz. Web Sunucularında Çalışmaz!!
deepai.setApiKey('https://videfikri.com/api/textmaker/'); // Quickstart API Key

const Language = require('../language'); 
const Lang = Language.getString('deepai'); // Language Support

Asena.addCommand({pattern: 'pencil', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    

        if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

        var downloading = await message.client.sendMessage(message.jid,'Penciling.. 🌟',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai {
                    image: fs.createReadStream("./output.jpg"),

                });

                var respoimage = await axios.get(`https://videfikri.com/api/textmaker/pencil`, { responseType: 'arraybuffer' })

                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg})

            });

            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

    }));
