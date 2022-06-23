let axios = require('axios')
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, '*Mohon tambahkan kata *indo*', m)

  await conn.reply(m.chat, mess.wait, 0, { thumbnail: await(await fetch(ext.title)).buffer(), contextInfo: {
                  externalAdReply: {
                    mediaUrl: 'https://youtu.be/-tKVN2mAKRI',
                    title: ext.title,
                    body: ext.body,
                    thumbnail: await(await fetch(ext.thum)).buffer()
                   }
                 }
               }
           )
	axios.get(`https://videfikri.com/api/covidindo/`).then ((res) => {
	 	let hasil = `Positif :${res.data.result.positif}\nSembuh :${res.data.result.sembuh}Meninggal :${res.data.result.meninggal}\nDalam Perawatan :${res.data.result.dalam_perawatan}`     

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['covidindo']
handler.tags = ['tools']
handler.command = /^(covidindo)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 100

module.exports = handler