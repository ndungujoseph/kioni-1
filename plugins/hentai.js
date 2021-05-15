/* Copyright (C) 2021.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Sam Pandey

const Asena = require('../events');
const axios = require('axios');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const ffmpeg = require('fluent-ffmpeg');
const Config = require('../config');
const fs = require('fs');

if (Config.WORKTYPE == 'private') {

	Asena.addCommand({pattern: 'infohentai', fromMe: true}, (async (message, match) => {
		await message.sendMessage('🔞 *TODO HENTAI* 🔞\n\n➡️ !hentai\n➡️ !panties\n➡️ !masturb\n➡️ !pussy');
	}));

	Asena.addCommand({ pattern: 'henta', fromMe: true }, (async (message, match) => {
		var drkhent = await axios.get(`https://api.xteam.xyz/randomimage/hentai?APIKEY=E67bd1bafe81b611`, { responseType: 'arraybuffer' })
		await message.sendMessage(Buffer.from(drkhent.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by Jarvis & Suraj' })
	}));

	Asena.addCommand({ pattern: 'panties', fromMe: true }, (async (message, match) => {
		var drkhent = await axios.get(`https://api.xteam.xyz/randomimage/panties?APIKEY=E67bd1bafe81b611`, { responseType: 'arraybuffer' })
		await message.sendMessage(Buffer.from(drkhent.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by Jarvis' })
	}));

	Asena.addCommand({ pattern: 'masturb', fromMe: true }, (async (message, match) => {
		var drkhent = await axios.get(`https://api.xteam.xyz/randomimage/mstrb?APIKEY=E67bd1bafe81b611`, { responseType: 'arraybuffer' })
		await message.sendMessage(Buffer.from(drkhent.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by Jarvis' })
	}));

	Asena.addCommand({ pattern: 'pussy', fromMe: true }, (async (message, match) => {
		var drkhent = await axios.get(`https://api.xteam.xyz/randomimage/pussy?APIKEY=E67bd1bafe81b611`, { responseType: 'arraybuffer' })
		await message.sendMessage(Buffer.from(drkhent.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by Jarvis' })
	}));
}

else if (Config.WORKTYPE == 'public') {

	Asena.addCommand({pattern: 'infohentai', fromMe: false}, (async (message, match) => {
		await message.sendMessage('🔞 *TODO HENTAI* 🔞\n\n➡️ !hentai\n➡️ !panties\n➡️ !masturb\n➡️ !pussy');
	}));

	Asena.addCommand({ pattern: 'hentai', fromMe: true }, (async (message, match) => {
		var drkhent = await axios.get(`https://api.xteam.xyz/randomimage/hentai?APIKEY=E67bd1bafe81b611`, { responseType: 'arraybuffer' })
		await message.sendMessage(Buffer.from(drkhent.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by Jarvis' })
	}));

	Asena.addCommand({ pattern: 'panties', fromMe: true }, (async (message, match) => {
		var drkhent = await axios.get(`https://api.xteam.xyz/randomimage/panties?APIKEY=E67bd1bafe81b611`, { responseType: 'arraybuffer' })
		await message.sendMessage(Buffer.from(drkhent.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by Jarvis' })
	}));

	Asena.addCommand({ pattern: 'masturb', fromMe: true }, (async (message, match) => {
		var drkhent = await axios.get(`https://api.xteam.xyz/randomimage/mstrb?APIKEY=E67bd1bafe81b611`, { responseType: 'arraybuffer' })
		await message.sendMessage(Buffer.from(drkhent.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by Jarvis' })
	}));

	Asena.addCommand({ pattern: 'pussy', fromMe: true }, (async (message, match) => {
		var drkhent = await axios.get(`https://api.xteam.xyz/randomimage/pussy?APIKEY=E67bd1bafe81b611`, { responseType: 'arraybuffer' })
		await message.sendMessage(Buffer.from(drkhent.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by Jarvis' })
	}));
}

*/
