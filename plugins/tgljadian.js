let axios = require("axios")
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
	let [l, r, b] = text.split `/`

    if (!l) return conn.reply(m.chat, 'Silahkan masukan tanggal nya,contoh 1/2/2020', m)
    if (!r) return conn.reply(m.chat, 'Silahkan masukan bulan nyanya,contoh 1/2/2020', m)
    if (!b) return conn.reply(m.chat, 'Silahkan masukan tahun nya,contoh 1/2/2020', m)

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
	axios.get(`https://videfikri.com/api/primbon/tgljadian/?tgl=' + l + '&bln=' + r + '&thn=' + b`).then ((res) => {
	 	let hasil = `${res.data.result.hasil}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['tgljadian'].map(v => v + ' <nama>')
handler.tags = ['primbon']
handler.command = /^(tgljadian)$/i
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