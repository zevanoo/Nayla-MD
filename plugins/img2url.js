let imgbb = require('imgbb-uploader')
let { MessageType, Presence, MimeType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let ftype = require('file-type')
let fs = require('fs')
let axios = require('axios')

let handler = async(m, { conn, text, args, usedPrefix }) => {

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
        let hasil = `Nihh Link Gambarmu :\n${teks}`

	 conn.reply(m.chat, hasil,  m)

     } else {
    m.reply(`Kirim perintah ${usedPrefix}img2url dengan caption digambar atau reply gambar yang tersedia`)
     }
 } catch (e) {
  m.reply('${e}')
  }
}
handler.help = ['img2url']
handler.tags = ['tools']
handler.command = /^(img2url)$/i
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
