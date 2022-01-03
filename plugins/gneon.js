let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `https://api.zeks.xyz/api/gneon?apikey=apivinz&text=${response}`
  conn.sendFile(m.chat, res, 'gneon.jpg', `Nih Kak`, m, false)
}
handler.help = ['gneon'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(gneon)$/i

module.exports = handler

