const Asena = require('../events');

const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');

const fs = require('fs');

const axios = require('axios');

const Config = require('../config');

const Language = require('../language');

const Lang = Language.getString('ttp');

    Asena.addCommand({ pattern: 'paperonglass ?(.*)', fromMe: true, desc: Lang.GLOW_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/paperonglass/?text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by Kioni Ndungu For You' })

}));
