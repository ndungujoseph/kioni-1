const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { requestLyricsFor, requestAuthorFor, requestTitleFor, requestIconFor } = require("solenolyrics");
const solenolyrics= require("solenolyrics"); 
const google = require("googlethis");
const playstore = require("playstore-scraper");
const Sea = require('search-engine-client');
const ffmpeg = require('fluent-ffmpeg');
const TinyURL = require('tinyurl');
const fs = require('fs');
const Language = require('../language');
const Lang = Language.getString('instagram')
const { errorMessage, infoMessage } = require('../helpers')

const De = "Uzun linkleri kısaltır."
const numms = "Yanıtladığınız mesajı girdiğiniz numaraya gönderir."
const npmsa = ".numsend 90551..."
const pmmm = "Yanıt verdiğiniz kişiye grup üzerinden mesaj gönderir."
const usag = ".pmsend Selam"
Asena.addCommand({pattern: 'pmsend?(.*)', fromMe: true, desc: pmmm, usage: usag}, (async (message, match) => {
    if (!message.reply_message) return await message.client.sendMessage(message.jid,'*Lütfen Herhangi Bi Kullancıya Yanıt Ver!*', MessageType.text);
    if (message.reply_message && match[1] == '') return await message.client.sendMessage(message.jid, '*Lütfen Gönderilecek Mesajı Gir!*', MessageType.text);
    const uspm = message.reply_message.jid
    return await message.client.sendMessage(uspm, `${match[1]}`, MessageType.text);
}));
Asena.addCommand({pattern: 'numsend?(.*)', fromMe: true, desc: numms, usage: usag}, (async (message, match) => {
    if (!message.reply_message) return await message.client.sendMessage(message.jid,'*Lütfen Herhangi Bir Mesaja Yanıt Verin!*', MessageType.text);
    if (message.reply_message && match[1] == '') return await message.client.sendMessage(message.jid, '*Lütfen Mesaj Gönderilecek Numarayı Gir!*', MessageType.text);
    if (message.reply_message && match[1].length > 16) return await message.client.sendMessage(message.jid, '*Lütfen numarayı girip gönderileceğiniz mesajı yanıtlayın!*', MessageType.text);
    var exists = await message.client.isOnWhatsApp(match[1])
    const user = match[1] + '@s.whatsapp.net'
    if (exists) {
        if (message.reply_message.text) {
            return await message.client.sendMessage(user,message.reply_message.text, MessageType.text);
        }
        else if(message.reply_message.video) {
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });
            ffmpeg(location)
            .save('new.mp4')
            .on('end', async () => {
                return await message.client.sendMessage(user,fs.readFileSync('new.mp4'), MessageType.video);
            })
        }
        else if (message.reply_message.image) {
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });
            ffmpeg(location)
            .save('new.jpg')
            .on('end', async () => {
                return await message.client.sendMessage(user,fs.readFileSync('new.jpg'), MessageType.image);
            })
        }
        else if (message.reply_message.audio) {
            var location = await message.client.downloadAndSaveMediaMessage({
                key: {
                    remoteJid: message.reply_message.jid,
                    id: message.reply_message.id
                },
                message: message.reply_message.data.quotedMessage
            });
            ffmpeg(location)
            .save('new.mp3')
            .on('end', async () => {
                return await message.client.sendMessage(user,fs.readFileSync('new.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});
            })
        }
    } else { return await message.client.sendMessage(message.jid,match[1] + ' *Numaralı Kişi WhatApp Kullanmıyor!*', MessageType.text);
    }
}));

Asena.addCommand({pattern: 'short ?(.*)', fromMe: true, desc: De}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,'```Link Girmelisin!```', MessageType.text);

    TinyURL.shorten(`${match[1]}`, async(res, err) => {
      if (err)
        await message.client.sendMessage(message.jid, '*#### Hata! ####*\n' + err, MessageType.text);

        await message.client.sendMessage(message.jid, `*Orjinal Link:* ${match[1]}\n*Kısa Link:* ` + res, MessageType.text)
    });
}));
const sjsj = "Playstore'den uygulama bilgisini gösterir."
const tzx = "*Arama yapmak için herhangi bir uygulama adı gir!*"
Asena.addCommand({pattern: 'playstore ?(.*)', fromMe: true, desc: sjsj}, (async (message, match) => {
    if (match[1] == '') return await message.sendMessage(tzx)
    await message.sendMessage(match[1] + ' ```İçin arama yapılıyor..```')
    await playstore.search(`${match[1]}`).then(async(res) => {
        await playstore.getExtendedInfo(res.results[0].link).then(async(res) => {
            let vers = res.version.includes('with') ? 'Cihazlar arası farklılık gösterebilir.' : res.version
            let boy = res.additional_info.size.includes('with') ? 'Cihazlar arası farklılık gösterebilir.' : res.additional_info.size
            return await message.client.sendMessage(message.jid,'*Oyun İsmi:* ' + res.title + '\n*Kısa Açıklama:* ' + res.snippet + '\n*Sürüm:* ' + vers + '\n*Kategori:* ' + res.genre + '\n*Fiyat:* ' + res.price + '\n*Oyalama:* ' + res.rating + '/5.0 ⭐\n*Oylama Sayısı:* ' + res.ratings + '\n*Yaş Sınırı:* ' + res.additional_info.content_rating + '\n*Geliştirici:* ' + res.additional_info.developer + '\n*İndirme Sayısı:* ' + res.additional_info.installs + '\n*Son Güncelleme Tarihi:* ' + res.additional_info.updated + '\n*Boyut:* ' + boy + '\n*Açıklama:* ' + res.description + '\n\n*Yenilikler:* ' + res.whatsnew, MessageType.text);
        }).catch(async(err) => { return await message.sendMessage(err) });
    }).catch(async(err) => { return await message.sendMessage(err) });
}));
const def = "```Şarkı İsmi Gir!```"
const del = "Şarkı sözlerini bulur."

Asena.addCommand({pattern: 'lyric ?(.*)', fromMe: true, desc: del}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,def, MessageType.text);

    var aut = await solenolyrics.requestLyricsFor(`${match[1]}`); 
    var son = await solenolyrics.requestAuthorFor(`${match[1]}`);
    var cov = await solenolyrics.requestIconFor(`${match[1]}`);
    var tit = await solenolyrics.requestTitleFor(`${match[1]}`);

    var buffer = await axios.get(cov, {responseType: 'arraybuffer'});

    await message.client.sendMessage(message.jid, Buffer.from(buffer.data),  MessageType.image, {caption: '*Aratılan Şarkı:* ' + '```' + `${match[1]}` + '```\n*Bulunan Şarkı:* ```' + tit + '```\n*Şarkı Sahibi:* ```' + son + '```\n*Şarkı Sözleri:*\n\n' + aut });

}));
const Sr = "Googlede arama yapar."
Asena.addCommand({pattern: 'search ?(.*)', fromMe: true, desc: Sr}, (async (message, match) => {
    if (match[1] === '') return await message.client.sendMessage(message.jid,'```Aranacak Kelime Girmelisin!```', MessageType.text);
    await google.search(`${match[1]}`).then(async(res) => {
        var msg = '*Başlık:* ' + res.results[0].title + '\n*Açıklama:* ' + res.results[0].description + '\n*Link:* ' + res.results[0].url + '\n\n'
        var msg2 = '*Başlık:* ' + res.results[1].title + '\n*Açıklama:* ' + res.results[1].description + '\n*Link:* ' + res.results[1].url + '\n\n'
        var msg3 = '*Başlık:* ' + res.results[2].title + '\n*Açıklama:* ' + res.results[2].description + '\n*Link:* ' + res.results[2].url + '\n\n'
        var msg4 = '*Başlık:* ' + res.results[3].title + '\n*Açıklama:* ' + res.results[3].description + '\n*Link:* ' + res.results[3].url + '\n\n'
        var msg5 = '*Başlık:* ' + res.results[4].title + '\n*Açıklama:* ' + res.results[4].description + '\n*Link:* ' + res.results[4].url + '\n\n'
        var binpayload = msg + msg2 + msg3 +msg4 + msg5
        await message.client.sendMessage(message.jid,binpayload,MessageType.text)
    });
}));

const cn = require('../config');
const vf = "Onaylanmış Hesap"
const novf = "Onaylanmamış Hesap"
const bs = "Evet"
const nobs = "Hayır"

if (cn.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'insta ?(.*)', fromMe: true, desc: Lang.DESC }, async (message, match) => {

        const userName = match[1]

        if (userName === '') return await message.sendMessage(errorMessage(Lang.NEED_WORD))

        await message.sendMessage(infoMessage(Lang.LOADING))

        await axios.get(`https://docs-jojo.herokuapp.com/api/stalk?username=${userName}`).then(async (response) => {

            const {biography, username, edge_follow, edge_followed_by, category_name, is_verified, is_private, edge_owner_to_timeline_media, profile_pic_url_hd, full_name, is_business_account } = response.data.graphql.user

            const profileBuffer = await axios.get(profile_pic_url_hd, { responseType: 'arraybuffer' })

            const msg = `*${Lang.NAME}*: ${full_name} \n*${Lang.USERNAME}*: ${username} \n*${Lang.BIO}*: ${biography} \n*${Lang.FOLLOWERS}*: ${edge_followed_by.count} \n*${Lang.FOLLOWS}*: ${edge_follow.count} \n*${Lang.ACCOUNT}*: ${is_private ? Lang.HIDDEN : Lang.PUBLIC} \n*Hesap Türü:* ${is_verified ? vf : novf} \n*İşletme Hesabı mı?:* ${is_business_account ? bs : nobs} \n*Kategori:* ${category_name} \n*Post Sayısı:* ${edge_owner_to_timeline_media.count}`

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, { caption: msg })

        }).catch(async (err) => {
            await message.sendMessage(errorMessage(Lang.NOT_FOUND + userName))
        })
    });
}
