let { getBuffer, succes } = require('../lib/functions.js')
let imgbb = require('imgbb-uploader')
let { MessageType, Presence, MimeType } = require('@adiwajshing/baileys')
let ffmpeg = require('fluent-ffmpeg')
let fetch = require('node-fetch')
let ftype = require('file-type')
let fs = require('fs')
let { exec } = require('child_process')

let handler = async(m, { conn, text, args, usedPrefix, command }) => {
let caption = `
Senyum Dongg :)
`.trim()

 try {
  await conn.reply(m.chat, mess.wait, 0, { thumbnail: await(await fetch(ext.thum)).buffer(), contextInfo: {
                  externalAdReply: {
                    mediaUrl: 'https://youtu.be/-tKVN2mAKRI',
                    title: ext.title,
                    body: ext.body,
                    thumbnail: await(await fetch(ext.thum)).buffer()
                   }
                 }
               }
           )
    let type = Object.keys(m.message)[0]
    let content = JSON.stringify(m.message)
    let isMedia = (type === 'imageMessage' || type === 'videoMessage')
    let isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
    let isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
    if ((isMedia && !m.message.videoMessage || !isQuotedImage || isQuotedImage) && args.length == 0) {
    let ger = isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo : m
	let owgi = await conn.downloadAndSaveMediaMessage(ger)
	let anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
	let teks = `${anu.display_url}`
	let buff = `http://lolhuman.herokuapp.com/api/editor/tosmile?apikey=31caf10e4a64e86c1a92bcba&img=${teks}`
          let voss = await fetch(buff)
	  let vuss = await ftype.fromStream(voss.body)
          if (vuss !== undefined) {

	 conn.sendFile(m.chat, await getBuffer(buff), 'smile.jpg', caption,  m)

      } } else {
    m.reply(`Kirim perintah ${usedPrefix + command} dengan caption digambar atau reply gambar yang tersedia`)
     }
 } catch (e) {
  m.reply('Fotonya Mana?')
 }
}
handler.help = ['smile','senyum']
handler.tags = ['editor']
handler.command = /^(smile|senyum)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
