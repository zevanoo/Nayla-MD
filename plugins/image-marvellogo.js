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
  let res = `https://api.zeks.xyz/api/marvellogo?text1=${response[0]}&text2=${response[1]}&apikey=apivinz`
  conn.sendFile(m.chat, res, 'marvellogo.jpg', mess.sukses, m, false)
}
handler.help = ['marvellogo'].map(v => v + ' <text|text>')
handler.tags = ['image']
handler.command = /^(marvellogo)$/i

module.exports = handler

