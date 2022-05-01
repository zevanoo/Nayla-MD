let axios = require("axios")
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
	axios.get(`https://leyscoders-api.herokuapp.com/api/cerpen?apikey=MIMINGANZ`).then ((res) => {
	 	let hasil = `Judul :${res.data.result.title}\nStory :${res.data.result.story}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['cerpen'].map(v => v + ' ')
handler.tags = ['premium']
handler.command = /^(cerpen)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler