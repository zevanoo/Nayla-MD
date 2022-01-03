let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `https://api.zeks.xyz/api/gplaybutton?text=${response}&apikey=apivinz`
  conn.sendFile(m.chat, res, 'gplaybutton.jpg', `Semoga terwujud ya kak 😍`, m, false)
}
handler.help = ['gplaybutton'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(gplaybutton)$/i

module.exports = handler

