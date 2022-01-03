let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `https://recoders-area.caliph.repl.co/api/loli?apikey=FreeApi`
  conn.sendFile(m.chat, res, 'loli.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['loli'].map(v => v + ' ')
handler.tags = ['anime']

handler.command = /^(loli)$/i

module.exports = handler