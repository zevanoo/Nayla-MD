let { MessageType, Presence, MimeType } = require('@adiwajshing/baileys')
let uploadImage = require('../lib/uploadImage')
let fetch = require('node-fetch')
let ftype = require('file-type')
let axios = require('axios')
let fs = require('fs')

let handler = async(m, { conn, text, args, usedPrefix }) => {

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
    let q = m.quoted ? m.quoted : m
    let media = await q.download()
    if (!media && !m.quoted) throw `Kirim perintah ${usedPrefix}readqr dengan caption digambar atau reply gambar yang tersedia`
    let qr = await uploadImage(media)
          axios.get(`https://api.zeks.xyz/api/qrdecode?apikey=MIMINGANZ&image=${qr}`).then((res) => {

  conn.reply(m.chat, 'Hasil Pembacaan QR :\n\n' + res.data.result, m)
   })
}
handler.help = ['readqr']
handler.tags = ['tools']
handler.command = /^(readqr)$/i
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
