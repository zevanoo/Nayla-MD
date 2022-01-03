let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `https://api.zeks.xyz/api/text3d?text=${response}&apikey=apivinz`
  conn.sendFile(m.chat, res, 'text3d2.jpg', `Nih kak`, m, false)
}
handler.help = ['text3d2'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(text3d2)$/i

module.exports = handler

