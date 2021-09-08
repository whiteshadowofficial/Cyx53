/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v7.3.6',
    CHANNEL: 'https://t.me/amazoneplug',
    SESSION: process.env.ASENA_SESSION === undefined ? '' : process.env.ASENA_SESSION,
    ANTİLİNK: process.env.ANTİ_LİNK === undefined ? 'false' : process.env.ANTİ_LİNK,
    AUTOBİO: process.env.AUTO_BİO === undefined ? 'false' : process.env.AUTO_BİO,
    THERI_KICK: process.env.THERI_KICK === undefined ? 'false' : process.env.THERI_KICK,
    BAD_KICK: process.env.BAD_KICK === undefined ? 'false' : process.env.BAD_KICK,
    ALL_LINK_BAN: process.env.ALL_LINK_BAN === undefined ? 'false' : process.env.ALL_LINK_BAN,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.hizliresim.com/loUtAb.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    OWNER: process.env.OWNER_NAME === undefined ? 'Amazone' : process.env.OWNER_NAME,
    OWNERNUM: process.env.OWNER_NUMBER === undefined ? '940000000000' : process.env.OWNER_NUMBER,
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://imgur.com/kB30S41.png' : process.env.ALIVE_LOGO,
    TAGREPLY: process.env.TAG_REPLY === undefined ? '919072790587@s.whatsapp.net' : process.env.TAG_REPLY,
    INBO: process.env.INBO_BLOCK === undefined ? 'false' : process.env.INBO_BLOCK,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    BOT_NAME: process.env.BOT_NAME === undefined ? 'Amazone Alexa' : process.env.BOT_NAME,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    BGMFILTER: process.env.BGM_FILTER === undefined ? false : convertToBool(process.env.BGM_FILTER),
    DISBGM: process.env.DISABLE_JID_BGM_FILTER === undefined ? false : process.env.DISABLE_JID_BGM_FILTER,
    AUTOSTICKER: process.env.AUTO_STICKER === undefined ? true : convertToBool(process.env.AUTO_STICKER),
    DISSTICKER: process.env.DISABLE_STICKER === undefined ? false : process.env.DISABLE_STICKER,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    SONGD: process.env.SONGD === undefined ? 'ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ' : process.env.SONGD,
    SONGU: process.env.SONGU === undefined ? 'ᴜᴘʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ' : process.env.SONGU,
    FULLEVA: process.env.FULL_EVA === undefined ? 'false' : process.env.FULL_EVA,
    WEL_GIF: process.env.WEL_GIF === undefined ? 'https://i.imgur.com/nErXUGj.mp4' : process.env.WEL_GIF,
    GIF_BYE: process.env.GIF_BYE === undefined ? 'https://i.imgur.com/Z1jCYGN.mp4' : process.env.GIF_BYE,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    AMAZONE: process.env.AMAZONE === undefined ? 'Amazone Alexa' : process.env.AMAZONE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    PLKBGM: process.env.CHANGE_BGM_TO === undefined ? 'one' : process.env.CHANGE_BGM_TO,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    OVERMSG: process.env.OVER_MESSAGE === undefined ? 'default' : process.env.OVER_MESSAGE,
    KTB: process.env.TAG_HEADER === undefined ? 'Amazone' : process.env.TAG_HEADER,
    TB: process.env.TAG_HEADER === undefined ? '' : process.env.TAG_HEADER,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    YAK: process.env.YAK === undefined ? '94766598862,0' : process.env.YAK,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    BRANCH: 'master',
    HLOCK: process.env.HLOCK === undefined ?'hadi-api' : process.env.HLOCK,
    NEOA: process.env.NEOA === undefined ?'aca83a4354ac' : process.env.NEOA,
    NEOS: process.env.NEOS === undefined ?'zenzapi' : process.env.NEOS,
    NEOY: process.env.NEOY === undefined ?'xyz' : process.env.NEOY,
    NY: process.env.NY === undefined ?'xyz' : process.env.NY,
    NA: process.env.NA === undefined ?'aca83a4354ac' : process.env.NA,
    NS: process.env.NS === undefined ?'zenzapi' : process.env.NS,
    HACKER: process.env.HACKER === undefined ?'h4ck3rs404' : process.env.HACKER,
    A_HACKER: process.env.A_HACKER === undefined ?'h4ck3rs404-api' : process.env.A_HACKER,
    DEVELOPER: 'HATZU TEAM',
    AUTHOR: 'AMAZONE ALEXA',
    GIT: 'https://github.com/jesonpro/ales.git',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './whatsasena.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
};
 
