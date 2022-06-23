let fetch = require('node-fetch');
let ftype = require('file-type');
let { getBuffer, succes } = require('../lib/functions.js');

let handler = async(m, { conn, text }) => {
let str = `
${text} sopan kami curiga
`.trim()

    if (!text) return conn.reply(m.chat, 'Silahkan masukan teksnya', m)

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

    let buff = ('http://lolhuman.herokuapp.com/api/amongus?apikey=31caf10e4a64e86c1a92bcba&text=' + text);
    let voss = await fetch(buff)
    let vuss = await ftype.fromStream(voss.body)
    if (vuss !== undefined) {

     conn.sendFile(m.chat, await getBuffer(buff), 'amongus.webp', '', m, false, { asSticker: true })
  await m.reply(str)
     }
}
handler.help = ['amongus <teks>']
handler.tags = ['sticker']
handler.command = /^(amongus)$/i
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