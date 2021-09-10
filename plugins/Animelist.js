const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const ANIME = "\n\n  *👩‍🦰Amazone Alexa Anime List*\n\n╔═════════▷\n╠🌼: .loli\n╠🌼: .wifu\n╠🌼: .neko\n╠🌼: .ava\n╠🌼: .kemo\n╠🌼: .awoo\n╠🌼: .shinobu\n╠🌼: .megumin\n╚═════════▷"
const fs = require('fs');
const Ln = "Anime List"
const axios = require('axios');
let Language = require('../language');
let Lang = Language.getString('amazone');
const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'loli ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
      
        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/randomloli`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));

    Asena.addCommand({ pattern: 'ava ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
      
        var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/anime/sfw/avatar?apikey=${Config.ZTH}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));

    Asena.addCommand({ pattern: 'kemo ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
      
        var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/anime/sfw/kemonomimi?apikey=${Config.ZTH}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));

    Asena.addCommand({ pattern: 'wifu ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

       var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/waifu?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));


    Asena.addCommand({ pattern: 'awoo ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {
        
        var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/awoo?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));   
    
    
    Asena.addCommand({ pattern: 'shinobu ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        
        var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/shinobu?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));

    Asena.addCommand({ pattern: 'megumin ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        

        var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/megumin?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));

    Asena.addCommand({ pattern: 'alist ?(.*)', fromMe: true, dontAddCommandList: false, desc: Lang.ANIMELIST,}, (async (message, match) => {await message.client.sendMessage(message.jid,ANIME, MessageType.text);

    }));

    Asena.addCommand({ pattern: 'neko ?(.*)', fromMe: true, dontaddCommandList: true}, (async (message, match) => {

       var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/neko?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));

}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'loli ?(.*)', fromMe: false, dontaddCommandList: true}, (async (message, match) => {
        

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/randomloli`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));

    Asena.addCommand({ pattern: 'ava ?(.*)', fromMe: false, dontaddCommandList: true}, (async (message, match) => {
      
        var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/anime/sfw/avatar?apikey=${Config.ZTH}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));

    Asena.addCommand({ pattern: 'kemo ?(.*)', fromMe: false, dontaddCommandList: true}, (async (message, match) => {
      
        var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/anime/sfw/kemonomimi?apikey=${Config.ZTH}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));

    Asena.addCommand({ pattern: 'wifu ?(.*)', fromMe: false, dontaddCommandList: true}, (async (message, match) => {
        

        var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/waifu?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));

    Asena.addCommand({ pattern: 'awoo ?(.*)', fromMe: false, dontaddCommandList: true}, (async (message, match) => {
       

        var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/awoo?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
        }));  



    Asena.addCommand({ pattern: 'shinobu ?(.*)', fromMe: false, dontaddCommandList: true}, (async (message, match) => {
        
        var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/shinobu?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));


    Asena.addCommand({ pattern: 'megumin ?(.*)', fromMe: false, dontaddCommandList: true}, (async (message, match) => {
        
        var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/megumin?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));

    Asena.addCommand({ pattern: 'alist ?(.*)', fromMe: false, deleteCommand: false, desc: Lang.ANIMELIST,}, (async (message, match) => {await message.client.sendMessage(message.jid,ANIME, MessageType.text);

    }));

    Asena.addCommand({ pattern: 'neko ?(.*)', fromMe: false, dontaddCommandList: true}, (async (message, match) => {

       var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/neko?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));
    
}
