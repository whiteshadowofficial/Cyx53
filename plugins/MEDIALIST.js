/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const Neotro = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Language = require('../language');
const Lang = Language.getString('amazone');
let fs = Config.WORKTYPE == 'public' ? false : true

Neotro.addCommand({pattern: 'textimg', fromMe: fs, desc: Lang.ALIST}, (async (message, match) => {
    await message.sendMessage("");

}));

Neotro.addCommand({pattern: 'listp', fromMe: fs, desc: Lang.BLIST}, (async (message, match) => {
    await message.sendMessage("");

}));

Neotro.addCommand({pattern: 'listanim', fromMe: fs, desc: Lang.CLIST}, (async (message, match) => {
    await message.sendMessage("");

}));
