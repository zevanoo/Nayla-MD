let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
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
  let res = await fetch(`https://ariarestapi.herokuapp.com/api/textmaker?text=${response[0]}&text2=${response[1]}&theme=glitch&apikey=AriaApi`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result.url, 'glitch.jpg', mess.sukses, m, false)
}
handler.help = ['glitch'].map(v => v + ' teks|teks')
handler.tags = ['sticker']

handler.command = /^(glitch)$/i

module.exports = handler
