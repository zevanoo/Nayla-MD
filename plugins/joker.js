let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args[0]) throw 'Masukkan Parameter'
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
  let res = await fetch(`https://kuhong-api.herokuapp.com/api/jokerlogo?text=${response}&apikey=4qk0g7Dgs2Hr-5xBdsTgQmdS4JN`)
  let image = await res.buffer()
  conn.sendFile(m.chat, image, 'image.jpg', mess.sukses, m)
}
handler.help = ['joker'].map(v => v + ' <teks>')
handler.tags = ['joker']
handler.command = /^(joker)$/i
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