let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = await fetch(`https://leyscoders-api.herokuapp.com/api/textmaker/gold-text?q=${response}&apikey=MIMINGANZ`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result.url, 'gold-text.jpg', `Nih Kak`, m, false)
}
handler.help = ['goldtext'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(goldtext)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler


