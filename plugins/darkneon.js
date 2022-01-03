let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `https://videfikri.com/api/textmaker/darkneon/?text=${response}`
  conn.sendFile(m.chat, res, 'nama.jpg', `Nih Mhank`, m, false)
}
handler.help = ['darkneon'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(darkneon)$/i
handler.limit = true
handler.register = true

module.exports = handler

