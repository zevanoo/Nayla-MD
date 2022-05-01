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
	axios.get(`https://api.banghasan.com/quran/format/json/acak`).then ((res) => {
	 	let sr = /{(.*?)}/gi;
         let hs = res.data.acak.id.ayat;
         let ket = `${hs}`.replace(sr, '');
         let hasil = `[${ket}] ${res.data.acak.ar.teks}\n\n${res.data.acak.id.teks}\n\n(QS.${res.data.surat.nama}, Ayat ${ket})`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['quran']
handler.tags = ['quotes']
handler.command = /^(quran)$/i
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