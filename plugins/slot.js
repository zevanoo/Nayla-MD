let axios = require("axios");
let handler = async(m, { conn, text }) => {

	axios.get(`https://api.xteam.xyz/game/virtualslot?APIKEY=MIMINETBOT`).then ((res) => {
	 	let hasil = `${res.data.map}\nHasil : ${res.data.hasil}\nScore :${res.data.score}`                  

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['slot'].map(v => v + ' ')
handler.tags = ['game']
handler.command = /^(slot)$/i
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