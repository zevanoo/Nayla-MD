let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `https://api.zeks.xyz/api/thundertext?text=${response}&apikey=MIMINGANZ`
  conn.sendFile(m.chat, res, 'nama.jpg', `DUAARRRR!`, m, false)
}
handler.help = ['thundertext'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(thundertext)$/i
handler.limit = true
handler.register = true

module.exports = handler

//31caf10e4a64e86c1a92bcba
