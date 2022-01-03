let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `https://api.xteam.xyz/randomimage/nsfwneko?apikey=MIMINETBOT`
  conn.sendFile(m.chat, res, 'nsfwneko.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['nsfwneko'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(nsfwneko)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

