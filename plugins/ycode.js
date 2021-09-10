/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
Codded BY teenuX
Wa.me/+94766598862
*/

const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Language = require('../language');
const XN_UP = "*Please Wait Little Bit Im Uploding Your PDF⏱*"
const EFFECT_DESC = "Text effective රූප බවට පරිවර්තනය කිරීම සඳහා විධාන කට්ටලයක්."
const NEED_WORD = "*ඔබ Ebook URL එකක් ඇතුළත් කළ යුතුය*"


Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '2book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '3book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '4book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '5book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '6book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '7book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '8book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '9book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '10book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '11book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Asena.addCommand({pattern: '1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
  
      var webimage = await axios.get(`https://${Config.SITE}6`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
