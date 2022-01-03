let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `http://lolhuman.herokuapp.com/api/tweettrump?apikey=31caf10e4a64e86c1a92bcba&text=${response}`
  conn.sendFile(m.chat, res, 'nama.jpg', `Donald Trump Be Like :`, m, false)
}
handler.help = ['trumpcomment'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(trumpcomment)$/i
handler.limit = true
handler.register = true

module.exports = handler

//31caf10e4a64e86c1a92bcba
