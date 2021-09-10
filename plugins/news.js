/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const Neotro = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Language = require('../language');
const Lang = Language.getString('weather');


Neotro.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
    if (message.jid === '919562803423-1627735504@g.us') {

             return;
         }
         let regex1 = new RegExp('HASH')
         let regex2 = new RegExp('NASH')
         let regex3 = new RegExp('MASH')
         let regex4 = new RegExp('RASH')
         let regex5 = new RegExp('TASH')
         let regex6 = new RegExp('BASH')
         let regex7 = new RegExp('LASH')
         let regex8 = new RegExp('YASH')
         let regex9 = new RegExp('VASH')
         let regex10 = new RegExp('GASH')
         let regex11 = new RegExp('PASH')
         let regex12 = new RegExp('QASH')
         let regex13 = new RegExp('JASH')
         let regex14 = new RegExp('CASH')
         let regex15 = new RegExp('XASH')
         let regex16 = new RegExp('DASH')
         let regex17 = new RegExp('EASG')
         let regex18 = new RegExp('YASH')
         let regex19 = new RegExp('UASH')
          if (regex1.test(message.message)) {              
             await message.client.sendMessage(message.jid,'\n👩‍🦰', MessageType.text, {quoted: message.data })
         } 
         else if (regex2.test(message.message)) {
            await message.client.sendMessage(message.jid,'👩‍🦰' , MessageType.text, {quoted: message.data })
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

