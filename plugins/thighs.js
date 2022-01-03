let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `https://api.xteam.xyz/randomimage/thighs?apikey=MIMINETBOT`
  conn.sendFile(m.chat, res, 'thighs.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['thighs'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(thighs)$/i

module.exports = handler