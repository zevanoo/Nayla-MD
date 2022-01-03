let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {

   response = args.join(' ')

  if (!args) throw 'Masukkan Parameter'

  m.reply(wait)

  let res = `http://rzky.net/docs/api/GaySerti/img.php?nama=${response}`

  conn.sendFile(m.chat, res, 'GaySerti.jpg', `Nih kak`, m, false)

}

handler.help = ['gayserti'].map(v => v + ' <teks>')

handler.tags = ['sticker']



handler.command = /^(gayserti)$/i



module.exports = handler

let wait = global.wait
