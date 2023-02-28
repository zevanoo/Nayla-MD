let axios = require("axios")
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan ketik apa yg mau kamu cari!!', m)

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
	axios.get(`https://videfikri.com/api/wiki/?query=${text}`).then ((res) => {
	 	let hasil = `*Serch :${text}*\n\n*Di Temukan :${res.data.result.isi_konten}*`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['wiki'].map(v => v + ' <nama>')
handler.tags = ['internet']
handler.command = /^(wiki)$/i
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