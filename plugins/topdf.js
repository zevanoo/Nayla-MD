let { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys')
let { getBuffer } = require('../lib/functions')
let imgbb = require('imgbb-uploader')
let util = require('util')
let fs = require('fs')
let fetch = require('node-fetch')

let handler = async(m, { conn, text, args }) => {

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
        let file = `${anu.display_url}`
        let pdf = await getBuffer(`http://api.lolhuman.xyz/api/convert/imgtopdf?apikey=31caf10e4a64e86c1a92bcba&img=${file}`)
    await m.reply('Nihh')
   conn.sendFile(m.chat, pdf, 'file.pdf', '', m, false, { asDocument: true })

 } else {
    m.reply(`Kirim perintah ${usedPrefix}topdf dengan caption digambar atau reply gambar yang tersedia`)
     }
 } catch (e) {
  m.reply('Fotonya mana?')
 }
}
handler.help = ['topdf (reply)']
handler.tags = ['convert']
handler.command = /^(topdf)$/i
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
