let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan masukan nama yang akan diartikan', m)

  await m.reply(wait)
	axios.get(`https://videfikri.com/api/primbon/artinama/?nama=${text}`).then ((res) => {
	 	let hasil = `Arti Namamu Adalah\n\n${res.data.result.arti}\nDesk Nama:${res.data.result.desk}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['artinama'].map(v => v + ' <nama>')
handler.tags = ['primbon']
handler.command = /^(artinama)$/i
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