let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = await fetch(`http://lolhuman.herokuapp.com/api/ephoto2/juventusshirt?apikey=31caf10e4a64e86c1a92bcba&text1=${response[0]}&text2=${response[1]}`)
  conn.sendFile(m.chat, res, 'nama.jpg', `Semoga Jadi Pemain Bola Sungguhan`, m, false)
}
handler.help = ['football'].map(v => v + ' <nama|nomer>')
handler.tags = ['sticker']

handler.command = /^(football)$/i
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