let axios = require("axios")
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Teksnya', m)

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
	axios.get(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${text}`).then ((res) => {
	 	let hasil = `Nih Link Pastebinmu Dh Jadi\n${res.data.result}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['pastebin'].map(v => v + ' <opsional>')
handler.tags = ['tools']
handler.command = /^(pastebin)$/i
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