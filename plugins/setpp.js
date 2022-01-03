let imgbb = require('imgbb-uploader')
let { MessageType, Presence, GroupSettingChange, mentionedJid } = require('@adiwajshing/baileys')
let ffmpeg = require('fluent-ffmpeg')
let fetch = require('node-fetch')
let ftype = require('file-type')
let fs = require('fs')

let handler = async(m, { conn, text, args, usedPrefix }) => {

    let type = Object.keys(m.message)[0]
    let content = JSON.stringify(m.message)
    let isMedia = (type === 'imageMessage' || type === 'videoMessage')
    let isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
    let isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
    if (!isQuotedImage) return m.reply('Tag Fotonya!')
    if ((isMedia && m.message.imageMessage || isQuotedImage) && args.length == 0) {
    let ger = isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo : m
	let owgi = await conn.downloadAndSaveMediaMessage(ger)
     await conn.updateProfilePicture(m.chat, owgi)

    conn.reply(m.chat, 'Done!', m)
     } else {
    m.reply(`Kirim perintah di grup ${usedPrefix}setpp dengan caption digambar atau reply gambar yang tersedia`)
     }
}
handler.help = ['setpp','seticon']
handler.tags = ['group']
handler.command = /^set(icon|pp)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`
}
