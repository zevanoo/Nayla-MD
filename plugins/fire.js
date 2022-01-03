let imgbb = require('imgbb-uploader')
let { MessageType, Presence, MimeType } = require('@adiwajshing/baileys')
let { sticker } = require('../lib/sticker')
let fs = require('fs')
let imageToBase64 = require('image-to-base64')

let handler = async(m, { conn, text, args, usedPrefix }) => {

try {
  await m.reply(wait)
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
        let img = await imageToBase64(`http://docs-jojo.herokuapp.com/api/burning_fire?image_url=${teks}`)
          let buffer = Buffer.from(img, 'base64')
          let hasil = await sticker(buffer, false, 'Fire Sticker', 'MIMIN NETBOT')

      conn.sendFile(m.chat, hasil, 'fire.webp', '', m, false, { asSticker: true })

    await m.reply('Nihh')
        } else {
    m.reply(`Kirim perintah ${usedPrefix}fire dengan caption digambar atau reply gambar yang tersedia`)
     }
 } catch (e) {
  m.reply('Fotonya Mana?')
 }
}
handler.help = ['fire']
handler.tags = ['editor']
handler.command = /^(fire)$/i
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
