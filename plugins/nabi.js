let axios = require("axios")
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan masukan nama nabi,contoh *!kisahnabi adam*', m)

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
	axios.get(`https://videfikri.com/api/religi/kisahnabi/?nabi=${text}`).then ((res) => {
	 	let hasil = `*Lahir Tahun ${res.data.result.tahun_kelahiran} SM*\n*Tempat Lahir :${res.data.result.tempat_lahir}*\n*Umur :${res.data.result.usia}*\n*Cerita :${res.data.result.description}*`                        

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['kisahnabi'].map(v => v + ' <nama>')
handler.tags = ['quotes']
handler.command = /^(kisahnabi)$/i
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