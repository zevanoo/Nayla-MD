let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = await fetch(`https://ariarestapi.herokuapp.com/api/textmaker?text=${response[0]}&text2=${response[1]}&theme=glitch&apikey=AriaApi`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result.url, 'glitch.jpg', `Nih kak`, m, false)
}
handler.help = ['glitch'].map(v => v + ' teks|teks')
handler.tags = ['sticker']

handler.command = /^(glitch)$/i

module.exports = handler
