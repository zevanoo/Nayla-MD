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
  let res = `https://api.xteam.xyz/randomimage/uniform?apikey=beliapikey`
  conn.sendFile(m.chat, res, 'uniform.jpg', mess.sukses, m, false)
}
handler.help = ['uniform'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(uniform)$/i

module.exports = handler