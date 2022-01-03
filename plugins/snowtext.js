let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = await fetch(`https://api.zeks.xyz/api/snowwrite?text1=${response[0]}&text2=${response[1]}&apikey=MIMINGANZ`)
  conn.sendFile(m.chat, res, 'nama.jpg', `Dah cape2 ke luar negri malah gk donasi_-`, m, false)
}
handler.help = ['snowtext'].map(v => v + ' <teks|teks>')
handler.tags = ['sticker']

handler.command = /^(snowtext)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler