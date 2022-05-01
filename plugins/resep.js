let imageToBase64 = require('image-to-base64')
let axios = require('axios')
let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap Masukan Query', m)

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
   axios.get(`https://api.zeks.xyz/api/resep-masak?apikey=MIMINGANZ&q=${text}`)
    .then((res) => {
      imageToBase64(res.data.thumb)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')
            let hasil = `*${res.data.title}*\n\nTingkat : ${res.data.tingkat}\nWaktu : ${res.data.duration}\nBahan2 :${res.data.bahan}\nPorsi : ${res.data.banyak}\nLangkah2 :\n${res.data.cara}\n\nSumber :\n${res.data.url}\n*Selamat Mencoba!`

     conn.sendFile(m.chat, buf, 'resep.jpg', hasil, m)
        })
    })
}
handler.help = ['resep'].map(v => v + ' <masakan>')
handler.tags = ['search']
handler.command = /^(resep)$/i
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
