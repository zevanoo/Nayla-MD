const fetch = require('node-fetch')
const { sticker } = require('../lib/sticker.js')
const { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, text }) => {

 try {
  if (!text) throw 'Emojinya?'
  if (text) {
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
    let img = await (await fetch(`http://lolhuman.herokuapp.com/api/smoji/${encodeURIComponent(text)}?apikey=31caf10e4a64e86c1a92bcba`)).buffer()
    if (!img) throw img
    let stiker = await sticker(img, false, 'Emoji Maker', 'Lord Mimin')
    conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  }
 } catch (e) {
   m.reply(mess.error)
  }
}
handler.help = ['semoji2 <teks>']
handler.tags = ['sticker']
handler.command = /^semoji2$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
