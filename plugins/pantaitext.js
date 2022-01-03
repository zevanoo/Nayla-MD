let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `https://api.zeks.xyz/api/sandw?apikey=MIMINGANZ&text=${response}`
  conn.sendFile(m.chat, res, 'nama.jpg', `Nihh,, Jangan Lupa Donasi Ke Bot!\n\nDh cape2 kepantai malah gk donasi_-`, m, false)
}
handler.help = ['pantaitext'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(pantaitext)$/i
handler.limit = true
handler.register = true

module.exports = handler

//31caf10e4a64e86c1a92bcba
