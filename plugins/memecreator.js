const uploadImage = require('../lib/uploadImage')
const uploadFile = require('../lib/uploadFile')
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
  let [text1, text2] = text.split('|')
  if (!text1) text1 = ' '
  if (!text2) text2 = ' '
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img).catch(e => uploadFile(img))
  let meme = global.API('https://api.memegen.link', `/images/custom/${encodeURIComponent(text1)}/${encodeURIComponent(text2)}.png`, {
    background: url })
  conn.sendFile(m.chat, meme, 'meme.jpg', mess.sukses, m)
} catch (e) {
  m.reply('Conversion Failed')
  }
}

handler.help = ['memecreator <teks>|<teks>']
handler.tags = ['creator']
handler.command = /^(memecreator)$/i
handler.limit = true
handler.group = false
handler.register = true
module.exports = handler
