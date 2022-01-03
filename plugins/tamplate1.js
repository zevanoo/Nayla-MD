let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = await fetch(`https://recoders-area.herokuapp.com/api/textmaker/metallic?text=${response}&theme=neon&apikey=FreeApi`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result.url, 'inu1.jpg', `Nih kak`, m, false)
}
handler.help = ['inu'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(inu)$/i
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


