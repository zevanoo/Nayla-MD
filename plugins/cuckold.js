let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `https://api.xteam.xyz/randomimage/cuckold?apikey=MIMINETBOT`
  conn.sendFile(m.chat, res, 'cuckold.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['cuckold'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(cuckold)$/i

module.exports = handler