let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `https://onlydevcity.xyz/FFSerti2/img.php?nama=${response}`
  conn.sendFile(m.chat, res, 'FFSerti2.jpg', `Nih kak`, m, false)
}
handler.help = ['ffserti2'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(ffserti2)$/i

module.exports = handler

let wait = global.wait
