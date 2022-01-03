let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = await fetch(`https://ariarestapi.herokuapp.com/api/textmaker/metallic?text=${response}&theme=neon&apikey=AriaApi`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result.url, 'neon.jpg', `Nih kak`, m, false)
}
handler.help = ['neon'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(neon)$/i
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


