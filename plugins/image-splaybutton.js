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
  let res = `https://api.zeks.xyz/api/splaybutton?text=${response}&apikey=apivinz`
  conn.sendFile(m.chat, res, 'splaybutton.jpg', mess.sukses, m, false)
}
handler.help = ['splaybutton'].map(v => v + ' <teks>')
handler.tags = ['image']
handler.command = /^(splaybutton)$/i

module.exports = handler

