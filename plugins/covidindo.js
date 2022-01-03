let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, '*Mohon tambahkan kata *indo*', m)

  await m.reply(wait)
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