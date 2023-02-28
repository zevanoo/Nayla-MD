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
  let res = await fetch(`http://lolhuman.herokuapp.com/api/ephoto2/codwarzone?apikey=31caf10e4a64e86c1a92bcba&text1=${response[0]}&text2=${response[1]}`)
  conn.sendFile(m.chat, res, 'nama.jpg', mess.sukses, m, false)
}
handler.help = ['cod'].map(v => v + ' <teks|teks>')
handler.tags = ['sticker']

handler.command = /^(cod)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler