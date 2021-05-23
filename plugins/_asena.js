const Asena = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('_asena');

Asena.addCommand({pattern: 'asena ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    var CMD_HELP = '';
    if (match[1] === '') {
        Asena.commands.map(
            async (command) =>  {
                if (command.dontAddCommandList || command.pattern === undefined) return;
                try {
                    var match = command.pattern.toString().match(/(\W*)([A-Za-züşıiğöç1234567890 ]*)/);
                } catch {
                    var match = [command.pattern];
                }
    
                var HANDLER = '';
    
                if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                    HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                } else {
                    HANDLER = '.';
                }
                
                if (command.desc == '' && !command.usage == '' && command.warn == '') {
                    CMD_HELP += '*🛠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + '```\n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                }
                if (!command.desc == '' && command.usage == '' && command.warn == '') {
                    CMD_HELP += '*🛠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + '```\n' + '*💬 ' + Lang.DESC + ':* ```' + command.desc + '``` \n\n';
                }
                if (command.desc == '' && command.usage == '' && !command.warn == '') {
                    CMD_HELP += '*🛠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                }
                if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                    CMD_HELP += '*🛠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + '```\n' + '*💬 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                }
                if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                    CMD_HELP += '*🛠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + '```\n' + '*💬 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                }
                if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                    CMD_HELP += '*🛠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + '```\n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                }
                if  (command.desc == '' && command.usage == '' && command.warn == '') {
                    CMD_HELP += '*🛠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + '```\n\n'
                }
                if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                    CMD_HELP += '*🛠 ' + Lang.COMMAND + ':* ```' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + '```\n' + '*💬 ' + Lang.DESC + ':* ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n' 
                }
            }
        );
        return await message.client.sendMessage(
            message.jid,'●▬▬▬ *Kioni Ndungu Edition* ▬▬▬●\n\n' + CMD_HELP, MessageType.text
        );    
        
    } else {
        var CMD = '';
        Asena.commands.map(
            async (command) =>  {
                if (command.dontAddCommandList || command.pattern === undefined) return;
                try {
                    var cmatch = command.pattern.toString().match(/(\W*)([A-Za-züşğiöç 1234567890]*)/);
                } catch {
                    var cmatch = [command.pattern];
                }
                
                if (cmatch[2] == match[1]) {
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD += '*🛠 ' + Lang.COMMAND + ':* ```' + (cmatch.length >= 3 ? (HANDLER + cmatch[2]) : command.pattern) + (command.desc === '' ? '```\n\n' : '```\n');
                    if (command.desc !== '') CMD += '*💬 ' + Lang.DESC + ':* ```' + command.desc + (command.warn === '' ? '```\n\n' : '```\n');
                    if (command.usage !== '') CMD += '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    if (command.warn !== '') CMD += '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n';

                }
            }
        );
        if (CMD == '') CMD += Lang.NOT_FOUND;
        await message.client.sendMessage(
            message.jid,'●▬▬▬ *Kioni Ndungu   Edition* ▬▬▬●\n\n' + CMD, MessageType.text
        );
    }
}));
