let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `https://api.zeks.xyz/api/crismes?text=${response}&apikey=MIMINGANZ`
  conn.sendFile(m.chat, res, 'nama.jpg', `Nih Ngab`, m, false)
}
handler.help = ['snowtext2'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(snowtext2)$/i
handler.limit = true
handler.register = true

module.exports = handler

//31caf10e4a64e86c1a92bcba
