let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `http://zekais-api.herokuapp.com/comics?text=${response}`
  conn.sendFile(m.chat, res, 'nama.jpg', `Nih Mhank`, m, false)
}
handler.help = ['sticker'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(sticker)$/i
handler.limit = true
handler.register = true

module.exports = handler

