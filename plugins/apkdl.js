let axios = require("axios")
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Command nya', m)
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
	axios.get(`http://hujanapi.xyz/api/apkpuredl?url=${text}&apikey=qrQuAVo14XfmRIr`).then ((res) => {
	 	let hasil = `
Nama App : ${res.data.result.title}
Link download : ${res.data.result.url}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['apkdl (link apkpure)']
handler.tags = ['apk']
handler.command = /^(apkdl)$/i
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
