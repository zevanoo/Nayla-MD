let axios = require("axios");
let handler = async(m, { conn, text }) => {

  await m.reply(wait)
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