const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const Ln = "Esthetic Photos"
const axios = require('axios');
const Config = require('../config');

if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'esthetic ?(.*)', fromMe: false,dontaddCommandList: false }, (async (message, match) => {
      
        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/estetikpic?apikey=THEVINDUapi`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));

}

else if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'esthetic ?(.*)', fromMe: true,dontaddCommandList: false }, (async (message, match) => {
      
        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/estetikpic?apikey=THEVINDUapi`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));

}
