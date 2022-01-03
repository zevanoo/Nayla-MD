let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter Teks.\nContoh !nulis5 kanan|Bu Sri Guru Yg Wajib Ada Di Sekolahan'
  m.reply(wait)
  let res = await fetch(`http://zekais-api.herokuapp.com/buku${response[0]}?text=${response[1]}`)
  conn.sendFile(m.chat, res, 'nama.jpg', `Nih Mhank`, m, false)
}
handler.help = ['nulis5'].map(v => v + ' <kanan/kiri|teks>')
handler.tags = ['nulis']

handler.command = /^(nulis5)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler