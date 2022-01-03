let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {

   response = args.join(' ')

  if (!args) throw 'Masukkan Parameter'

  m.reply(wait)

  let res = `http://rzky.net/docs/api/AnakHaramSerti/img.php?nama=${response}`

  conn.sendFile(m.chat, res, '1.jpg', `Nih kak`, m, false)

}

handler.help = ['haramserti'].map(v => v + ' teks')

handler.tags = ['sticker']



handler.command = /^(haramserti)$/i



module.exports = handler

