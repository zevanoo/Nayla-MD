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
  let res = `https://api.xteam.xyz/randomimage/thighs?apikey=MIMINETBOT`
  conn.sendFile(m.chat, res, 'thighs.jpg', mess.sukses, m, false)
}
handler.help = ['thighs'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(thighs)$/i

module.exports = handler