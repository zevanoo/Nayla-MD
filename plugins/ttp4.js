const fetch = require('node-fetch')
const { sticker } = require('../lib/sticker.js')
const { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, text }) => {

 try {
  if (!text) throw 'Uhm... Teksnya?'
  if (text) {
   await m.reply(wait)
    let img = await (await fetch('https://leyscoders-api.herokuapp.com/api/textto-image?text=' + encodeURIComponent(text))).buffer()
    if (!img) throw img
    let stiker = await sticker(img, false, 'TTP', 'MIMIN')
    conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  }
 } catch (e) {
   m.reply(error)
  }
}
handler.help = ['ttp4 <teks>']
handler.tags = ['sticker']
handler.command = /^ttp4$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = true

handler.fail = null

module.exports = handler
