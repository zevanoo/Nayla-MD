let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args[0]) throw 'Masukkan Nama Kota'
  m.reply(wait)
  let res = await fetch(`https://ariarestapi.herokuapp.com/api/maker/special/epep?text=${response}&apikey=AriaApi`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result.results, 'image.jpg', 'Serti Nya Kak', m, false)
}
handler.help = ['ffserti'].map(v => v + ' <teks>')
handler.tags = ['ffserti']
handler.command = /^(ffserti)$/i
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
