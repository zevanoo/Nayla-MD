let axios = require("axios")
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Nama Daerah', m)

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
	axios.get(`https://api.xteam.xyz/cuaca?kota=${text}&APIKEY=MIMINETBOT`).then ((res) => {
	 	let hasil = `Cuaca Daerah *${text}*\n\nTempat : ${res.data.message.kota}\nAngin : ${res.data.message.angin}\nCuaca : ${res.data.message.cuaca}\nDeskripsi : ${res.data.message.deskripsi}\nKelembapan : ${res.data.message.kelembapan}\nSuhu : ${res.data.message.suhu}\nUdara : ${res.data.message.pressure}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['cuaca'].map(v => v + ' <daerah>')
handler.tags = ['tools']
handler.command = /^(cuaca)$/i
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
