/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
Codded BY teenuX
Wa.me/+94766598862
*/

const Neotro = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Language = require('../language');
const XN_UP = "*Please Wait Little Bit Im Uploding Your PDF⏱*"
const EFFECT_DESC = "Text effective රූප බවට පරිවර්තනය කිරීම සඳහා විධාන කට්ටලයක්."
const NEED_WORD = "*ඔබ Ebook URL එකක් ඇතුළත් කළ යුතුය*"
const XN_D = "*Downloading Your PDF📑*"

Neotro.addCommand({pattern: 'x1book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}599`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x2book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}599`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x3book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}599`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x4book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}599`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x5book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}599`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x6book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}599`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Neotro.addCommand({pattern: 'x7book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}599`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Neotro.addCommand({pattern: 'x8book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}599`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x9book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}599`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x10book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}599`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x11book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}599`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Neotro.addCommand({pattern: 'x12book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}599`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x13book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}599`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x14book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}599`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x15book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}599`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x16book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}599`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x17book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}599`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x18book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}599`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Neotro.addCommand({pattern: 'x19book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}599`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Neotro.addCommand({pattern: 'x20book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}599`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x21book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}599`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x22book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}599`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

Neotro.addCommand({pattern: 'x23book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}599`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));
Neotro.addCommand({pattern: 'x24book ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
       await message.client.sendMessage(message.jid,XN_D,MessageType.text);

  
      var webimage = await axios.get(`https://${Config.SITE}599`, { responseType: 'arraybuffer' })

      await message.client.sendMessage(message.jid,XN_UP,MessageType.text);

      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
  
      }));

