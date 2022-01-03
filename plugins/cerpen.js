let axios = require("axios");
let handler = async(m, { conn, text }) => {

  await m.reply(wait)
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