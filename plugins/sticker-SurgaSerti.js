let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {

   response = args.join(' ')

  if (!args) throw 'Masukkan Parameter'

  await conn.reply(m.chat, mess.wait, 0, { thumbnail: await(await fetch(ext.thum)).buffer(), contextInfo: {
                  externalAdReply: {
                    mediaUrl: 'https://youtu.be/-tKVN2mAKRI',
                    title: ext.title,
                    body: ext.body,
                    thumbnail: await(await fetch(ext.thum)).buffer()
                   }
                 }
               }
           )

  let res = `http://rzky.net/docs/api/SurgaSerti/img.php?nama=${response}`

  conn.sendFile(m.chat, res, 'SurgaSerti.jpg', mess.sukses, m, false)

}

handler.help = ['surgaserti'].map(v => v + ' <teks>')

handler.tags = ['sticker']



handler.command = /^(surgaserti)$/i



module.exports = handler

let wait = global.wait
