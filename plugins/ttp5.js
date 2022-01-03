const fetch = require('node-fetch')
const { sticker } = require('../lib/sticker.js')
const { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, text }) => {

 try {
  if (!text) throw 'Uhm... Teksnya?'
  if (text) {
   await m.reply(wait)
    let res = await fetch('https://salism3api.pythonanywhere.com/text2img/?text=' + encodeURIComponent(text))
    let json = await res.json()
    if (!json) throw json
    let img = json.image
    let stiker = await sticker(img, false, 'TTP', 'mimin')
    conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  }
 } catch (e) {
   m.reply(error)
  }
}
handler.help = ['ttp5 <teks>']
handler.tags = ['sticker']
handler.command = /^ttp5$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler