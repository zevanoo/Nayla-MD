let axios = require("axios")

let handler = async(m, { conn, text }) => {

 axios.get(`https://leyscoders-api.herokuapp.com/api/katailham?apikey=MIMINGANZ`).then((res) => {
   let hasil = conn.sendButton(m.chat, `${res.data.result}`, mess.wm, 'Next', `.katailham`, m)

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['kata'].map(v => v + 'ilham')
handler.tags = ['quotes']
handler.command = /^(katailham)$/i
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

let wm = global.botwm