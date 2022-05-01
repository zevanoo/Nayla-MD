let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Harap Masukan Nama Film Animenya', m)

	axios.get(`https://arugaz.herokuapp.com/api/sdmovie?film=${text}`).then ((res) => {
	 	let hasil = `*Film Anime ${text}*\n\nJudul : ${res.data.result.title}\nRating : ${res.data.result.rating}\nInfo : ${res.data.result.sinopsis}\nLink Video : ${res.data.result.video}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['filmanime'].map(v => v + ' <film>')
handler.tags = ['tools']
handler.command = /^(filmanime)$/i
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