let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {

   response = args.join(' ')

  if (!args) throw 'Masukkan Parameter'

  m.reply(wait)

  let res = `http://rzky.net/docs/api/SurgaSerti/img.php?nama=${response}`

  conn.sendFile(m.chat, res, 'SurgaSerti.jpg', `Nih kak`, m, false)

}

handler.help = ['surgaserti'].map(v => v + ' <teks>')

handler.tags = ['sticker']



handler.command = /^(surgaserti)$/i



module.exports = handler

let wait = global.wait
