const uploadImage = require('../system/lib/uploadImage')
const { sticker } = require('../system/lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
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
try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  let Horny = `https://some-random-api.ml/canvas/horny?avatar=${url}`
  let stiker = await sticker(null, Horny, 'Horny', '@Kokoronationz')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
} catch (e) {
  m.reply('Conversion Failed')
  }
}


handler.help = ['horny (caption|reply media)']
handler.tags = ['sticker']
handler.command = /^(horny)$/i
handler.limit = true
handler.group = false
handler.register = true
module.exports = handler
