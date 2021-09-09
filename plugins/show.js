

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
/*const got = require('got');
const fs = require('fs');*/
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('weather');
const { errorMessage, infoMessage } = require('../helpers');

Asena.addCommand({ pattern: 'twt ?(.*)', fromMe: false,  dontAddCommandList: true, desc: "download from twitter links" }, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("Give proper link!"))

    await message.sendMessage(infoMessage(Lang.LOADINGTV))

    await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/twdown?url=${userName}`)
      .then(async (response) => {
        const {
          format,
          result,
        } = response.data

        const profileBuffer = await axios.get(result, {responseType: 'arraybuffer'})

        const msg = `${format}`


      if (msg === 'Image/jpg or png') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg,
        })}
		 	 
	if (msg === 'video/mp4') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: msg,
        })}

      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Error" )),
      )
  },
)






Asena.addCommand({ pattern: 'show ?(.*)', fromMe: false , desc: "Get info related to tv series and shows"}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("give me the show name"))

    await message.sendMessage(infoMessage("Loading..."))

  await axios
      .get(`http://api.tvmaze.com/search/shows?q=${userName}`)
      .then(async (response) => {
        const {
          name,
          type,	
          language,
           status,
	  officialSite,
	  summary,
        } = response.data[0].show

   
        const msg = `*${"Name"}*: ${name}\n*${"Type"}*: ${type}\n*${"Type"}*: ${status}\n*${"Summary"}*: ${summary}\n*${"Official Site"}*: ${officialSite}`
       
       await message.client.sendMessage(message.jid, msg , MessageType.text);
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Not Found" )),
      )
  },
)

Asena.addCommand({ pattern: 'show ?(.*)', fromMe: false , dontAddCommandList: true}, async (message, match) => {

 const userName = match[1]
    
  await axios
      .get(`http://api.tvmaze.com/search/shows?q=${userName}`)
      .then(async (response) => {
        const {
          original,
        } = response.data[0].show.image

        const profileBuffer = await axios.get(original, {responseType: 'arraybuffer'})
     
        const msg = ``
       
        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.sendMessage(""),
      )
  },
)
