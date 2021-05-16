const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('ttp');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'pubg ?(.*)', fromMe: true, deleteCommand: true, desc: Lang.PUBG_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/pubgmlogo/?text1=Mr_Sam&text2=${match[1].replace(/Ã–/g, "%C3%96").replace(/Ã¶/g, "%C3%B6").replace(/Ã¼/g, "%C3%BC").replace(/Ãœ/g, "%C3%9C").replace(/Äž/g, "%C4%9E").replace(/ÄŸ/g, "%C4%9F").replace(/ÅŸ/g, "%C5%9F").replace(/Åž/g, "%C5%9E").replace(/Ã§/g, "%C3%A7").replace(/Ã‡/g, "%C3%87").replace(/Ä±/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/Ä°/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made for Founder' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'pubg ?(.*)', fromMe: false, deleteCommand: true, desc: Lang.PUBG_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://videfikri.com/api/textmaker/pubgmlogo/?text1=Mr_Sam&text2=${match[1].replace(/Ã–/g, "%C3%96").replace(/Ã¶/g, "%C3%B6").replace(/Ã¼/g, "%C3%BC").replace(/Ãœ/g, "%C3%9C").replace(/Äž/g, "%C4%9E").replace(/ÄŸ/g, "%C4%9F").replace(/ÅŸ/g, "%C5%9F").replace(/Åž/g, "%C5%9E").replace(/Ã§/g, "%C3%A7").replace(/Ã‡/g, "%C3%87").replace(/Ä±/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/Ä°/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made for Founder' })

    }));
    
}
