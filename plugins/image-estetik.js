let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
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
  let res = await fetch(`https://leyscoders-api.herokuapp.com/api/estetik?apikey=MIMINGANZ`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result, 'estetik.jpg', mess.sukses, m, false)
}
handler.help = ['estetik'].map(v => v + ' ')
handler.tags = ['image']
handler.command = /^(estetik)$/i

module.exports = handler

