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
  let res = await fetch(`https://recoders-area.caliph.repl.co/api/textmaker/game?text=${response[0]}&text2=${response[1]}&theme=pubg&apikey=FreeApi`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result.url, 'pubglogo.jpg', mess.sukses, m, false)
}
handler.help = ['pubglogo'].map(v => v + ' teks|teks')
handler.tags = ['sticker']

handler.command = /^(pubglogo)$/i

module.exports = handler