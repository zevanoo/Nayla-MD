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
  let res = `https://api.xteam.xyz/randomimage/tentacles?apikey=MIMINETBOT`
  conn.sendFile(m.chat, res, 'tentacles.jpg', mess.sukses, m, false)
}
handler.help = ['tentacles'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(tentacles)$/i

module.exports = handler