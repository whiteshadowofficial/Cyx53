/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const Neotro = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Language = require('../language');
let config = require('../config');
const Lang = Language.getString('weather');
let td = config.WORKTYPE == 'public' ? false : true


Neotro.addCommand({on: 'text', fromMe: td, deleteCommand: false}, (async (message, match) => {
    if (message.jid === '919562803423-1627735504@g.us') {

             return;
         }
         let regex1 = new RegExp('👩‍🦰ANIME-LIST')
         let regex2 = new RegExp('👩‍🦰MEME-LIST')
         let regex3 = new RegExp('👩‍🦰TTP-LIST')
         let regex4 = new RegExp('👩‍🦰ALL-LIST')
         let regex5 = new RegExp('👩‍🦰ADMIN-LIST')
         let regex6 = new RegExp('👩‍🦰LOGO-LIST')
         let regex7 = new RegExp('👩‍🦰DOWNLOAD-LIST')
         let regex8 = new RegExp('👩‍🦰MAIN-LIST')
         let regex9 = new RegExp('👩‍🦰BOOK-LIST')
         let regex10 = new RegExp('👩‍🦰APK-LIST')
         let regex11 = new RegExp('👩‍🦰EHI-LIST')
         let regex12 = new RegExp('QASH')
         let regex13 = new RegExp('JASH')
         let regex14 = new RegExp('CASH')
         let regex15 = new RegExp('XASH')
         let regex16 = new RegExp('DASH')
         let regex17 = new RegExp('EASG')
         let regex18 = new RegExp('YASH')
         let regex19 = new RegExp('UASH')
          if (regex1.test(message.message)) {              
             await message.client.sendMessage(message.jid,'*👩‍🦰Amazone Alexa Anime List*\n\n╔═════════▷\n╠🌼: .loli\n╠🌼: .wifu\n╠🌼: .neko\n╠🌼: .ava\n╠🌼: .kemo\n╠🌼: .awoo\n╠🌼: .shinobu\n╠🌼: .megumin\n╚═════════▷', MessageType.text, {quoted: message.data })
         } 
         else if (regex2.test(message.message)) {
            await message.client.sendMessage(message.jid,'*╔═════◉ᴀᴍᴀᴢᴏɴᴇ◉═════╗*\n           👩‍🦰ǫᴜᴇᴇɴ ᴀᴍᴀᴢᴏɴᴇ 🪐\n*❖═මීම් ලැයිස්තුව ᴍᴇᴍᴇ ᴘᴀᴄᴋ═❖*\n\n*💠.yasai       ❴your text❵*\n*💠.uddika    ❴your text❵*\n*💠.aah          ❴your text❵*\n*💠.sir            ❴your text❵*\n*💠.my3         ❴your text❵*\n*💠.fuck         ❴your text❵*\n*💠.hii             ❴your text❵*\n*💠.asai          ❴your text❵*\n*💠.hapoi       ❴your text❵*\n*💠.anura       ❴your text❵*\n*💠.gemba       ❴your text❵*\n*💠.wow       ❴your text❵*\n*💠.hapo       ❴your text❵*\n*💠.babah       ❴your text❵*\n*💠.mcn       ❴your text❵*\n*💠.nah       ❴your text❵*\n*╚═══❖══▣══▣══❖═══╝*\n\n*▷Template Credit: එ.මි.ස ¡v*' , MessageType.text, {quoted: message.data })
         }
          else if (regex3.test(message.message)) {
             await message.client.sendMessage(message.jid,'', MessageType.text, {quoted: message.data })
         }
         else if (regex4.test(message.message)) {
            await message.client.sendMessage(message.jid,'👩‍🦰', MessageType.text, {quoted: message.data })
         }
         else if (regex5.test(message.message)) {
           await message.client.sendMessage(message.jid,'👩‍🦰', MessageType.text, {quoted: message.data })
         }
          else if (regex6.test(message.message)) {
            await message.client.sendMessage(message.jid,'\n👩‍🦰', MessageType.text, {quoted: message.data })
         }
          else if (regex7.test(message.message)) {
            await message.client.sendMessage(message.jid,'👩‍🦰', MessageType.text, {quoted: message.data })
         }
          else if (regex8.test(message.message)) {
            await message.client.sendMessage(message.jid,'👩‍🦰', MessageType.text, {quoted: message.data })
         }
          else if (regex9.test(message.message)) {
            await message.client.sendMessage(message.jid,'👩‍🦰', MessageType.text, {quoted: message.data })
         }
         else if (regex10.test(message.message)) {
            await message.client.sendMessage(message.jid,'👩‍🦰', MessageType.text, {quoted: message.data })
         }
         else if (regex11.test(message.message)) {
            await message.client.sendMessage(message.jid,'👩‍🦰', MessageType.text, {quoted: message.data })
         }   
         else if (regex12.test(message.message)) {
            await message.client.sendMessage(message.jid,'👩‍🦰', MessageType.text, {quoted: message.data })
         }
         else if (regex13.test(message.message)) {
            await message.client.sendMessage(message.jid,'👩‍🦰', MessageType.text, {quoted: message.data })
         }

         else if (regex14.test(message.message)) {
            await message.client.sendMessage(message.jid,'👩‍🦰', MessageType.text, {quoted: message.data })
         }

         else if (regex15.test(message.message)) {
            await message.client.sendMessage(message.jid,'👩‍🦰', MessageType.text, {quoted: message.data })
         }
        
         else if (regex16.test(message.message)) {
            await message.client.sendMessage(message.jid,'👩‍🦰', MessageType.text, {quoted: message.data })
         }
        
         else if (regex17.test(message.message)) {
            await message.client.sendMessage(message.jid,'*👩‍🦰', MessageType.text, {quoted: message.data })
         }
        
         else if (regex18.test(message.message)) {
            await message.client.sendMessage(message.jid,'👩‍🦰', MessageType.text, {quoted: message.data })
         }
        
         else if (regex18.test(message.message)) {
            await message.client.sendMessage(message.jid,'👩‍🦰', MessageType.text, {quoted: message.data })
         }
        
         else if (regex19.test(message.message)) {
            await message.client.sendMessage(message.jid,'👩‍🦰', MessageType.text, {quoted: message.data })
         }
        
 }));

