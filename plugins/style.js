let { MessageType, Presence, MimeType } = require('@adiwajshing/baileys')
let { sticker } = require('../lib/sticker')
let imageToBase64 = require('image-to-base64')

let handler = async(m, { conn, text, args, usedPrefix }) => {
let [theme, teks] = text.split `|`

try {
  await m.reply(wait)
   if (!theme) throw 'Silahkna masukan temanya\n\npoly, bold, glowing, colorful, army, retro.'
   if (!teks) throw 'Teksnya Mana?'
   if (theme == 'poly' || theme == 'bold' || theme == 'glowing' || theme == 'colorful' || theme == 'army' || theme == 'retro') {
   let style = await imageToBase64('https://api.xteam.xyz/videomaker/' + theme + '?text=' + teks + '&APIKEY=MIMINETBOT')
   let buffer = Buffer.from(style, 'base64')
   let hasil = await sticker(buffer, false, 'Style Maker', 'Kuhong Bot')

    conn.sendFile(m.chat, hasil, 'style.webp', '', m, false, { asSticker: true })

     } else m.reply('Query yang tersedia :\n\npoly, bold, glowing, colorful, army, retro.')
 } catch (e) {
  throw global.error
 }
}
handler.help = ['style <query|teks>']
handler.tags = ['sticker']
handler.command = /^(style)$/i
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
