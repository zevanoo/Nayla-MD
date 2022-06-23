const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')

let handler  = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  try {
    await m.reply(wait)
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await q.download()
      if (!img) throw 'Kirim perintah ${usedPrefix + command} dengan caption/reply media gambar/video yang tersedia'
      stiker = await sticker(img, false, '', '')
    } else if (args[0]) stiker = await sticker(false, args[0], '', '')
  } finally {
    await m.reply('Nihh Stickernya')
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else throw 'Gagal!\n\nPastikan kirimkan media gambar/videonya'
  }
}
handler.help = ['stickernowm', 'stickergifnowm', 'sgifnowm']
handler.tags = ['premium']
handler.command = /^(sgifnowm|stic?kernowm|stic?kergifnowm)$/i
handler.premium = true

handler.limit = false

module.exports = handler
