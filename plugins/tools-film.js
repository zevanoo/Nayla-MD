let imageToBase64 = require('image-to-base64')
let axios = require('axios')
let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {

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

    if (!text) return conn.reply(m.chat, 'Harap masukan query film', m)

	axios.get(`https://arugaz.herokuapp.com/api/sdmovie?film=${text}`)
    .then ((res) => {
      imageToBase64(res.data.result.thumb)
    .then((ress) => {
    let thumb = Buffer.from(ress, 'base64')
    let hasil = `*Title:* ${res.data.result.title}\n*Sinopsis:* ${res.data.result.sinopsis}\n*Link:*\n${res.data.result.video}`

    conn.sendFile(m.chat, thumb, 'film.jpg', hasil, m)
	})
   })
}
handler.help = ['film', 'nonton'].map(v => v + ' <query>')
handler.tags = ['tools']
handler.command = /^(film|nonton)$/i
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
