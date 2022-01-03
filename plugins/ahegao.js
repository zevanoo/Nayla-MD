let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `https://api.xteam.xyz/randomimage/ahegao?apikey=MIMINETBOT`
  conn.sendFile(m.chat, res, 'ahegao.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['ahegao'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(ahegao)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
