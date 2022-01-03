let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan masukan nama yang akan dicari kodepos nya', m)

  await m.reply('Searching...')
	axios.get(`https://videfikri.com/api/kodepos/?query=${text}`).then ((res) => {
	 	let hasil = `Provinsi :${res.data.result.provinsi}\nKota :${res.data.result.kota}\nKecamatan :${res.data.result.kecamatan}\nKelurahan :${res.data.result.kelurahan}\nKode Pos :${res.data.result.kodepos}`                

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['kodepos'].map(v => v + ' <kecamatan>')
handler.tags = ['tools']
handler.command = /^(kodepos)$/i
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