let { getBuffer, succes } = require('../lib/functions.js')
let imgbb = require('imgbb-uploader')
let { MessageType, Presence, MimeType } = require('@adiwajshing/baileys')
let ffmpeg = require('fluent-ffmpeg')
let fetch = require('node-fetch')
let fs = require('fs')

let handler = async(m, { conn, text, args, usedPrefix }) => {
let [t1, t2] = text.split `|`

    if (!t1) return conn.reply(m.chat, 'Silahkan masukan parameter text1', m)
    if (!t2) return conn.reply(m.chat, 'Silahkan masukan parameter text2', m)

 try {
  await conn.reply(m.chat, mess.wait, 0, { thumbnail: await(await fetch(ext.title)).buffer(), contextInfo: {
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
      if ((isMedia && !m.message.videoMessage || !isQuotedImage || isQuotedImage) && (t1 || t2)) {
                   let ger = isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo : m
                   let owgi = await conn.downloadAndSaveMediaMessage(ger)
                   let anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                   let teks = `${anu.display_url}`
                   let hasil = `http://zekais-api.herokuapp.com/mgen?text1=${t2}&text2=${t2}&url=${teks}`

	 conn.sendFile(m.chat, await getBuffer(json.gambar), 'meme.jpg', mess.sukses,  m)

   } else {
         m.reply(`Kirim perintah ${usedPrefix}memetext <teks|teks> dengan caption digambar atau reply gambar yang tersedia`)
              }
 } catch (e) {
  m.reply('Fotonya mana?')
   }
}
handler.help = ['memetext <teks|teks>','memegen <teks|teks>']
handler.tags = ['editor']
handler.command = /^meme(gen|text)$/i
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
