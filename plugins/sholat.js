let axios = require("axios")
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Harap Masukan Nama Daerahnya', m)

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
	axios.get(`https://api.zeks.xyz/api/jadwalsholat?apikey=apivinz&daerah=${text}`).then ((res) => {
	 	let hasil = `Jadwal Sholat Daerah *${text}*\n\nSubuh : ${res.data.data.object.Shubuh}\nDzuhur : ${res.data.data.object.Dzuhur}\nAshar : ${res.data.data.object.Ashr}\nMaghrib : ${res.data.data.object.Maghrib}\nIsya : ${res.data.data.object.Isya}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['sholat'].map(v => v + ' <daerah>')
handler.tags = ['tools']
handler.command = /^(sholat)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
