let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `https://api.zeks.xyz/api/dropwater?apikey=MIMINGANZ&text=${response}`
  conn.sendFile(m.chat, res, 'nama.jpg', `Nih Mhank`, m, false)
}
handler.help = ['dropwater'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(dropwater)$/i
handler.limit = true
handler.register = true

module.exports = handler

