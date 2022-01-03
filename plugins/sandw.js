let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `https://api.zeks.xyz/api/sandw?apikey=apivinz&text=${response}`
  conn.sendFile(m.chat, res, 'sandw.jpg', `Nih kak`, m, false)
}
handler.help = ['sandw'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(sandw)$/i

module.exports = handler

