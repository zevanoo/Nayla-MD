let fetch = require('node-fetch');
let ftype = require('file-type');
let { getBuffer, succes } = require('../lib/functions.js');

let handler = async(m, { conn, text }) => {
let str = `
Semoga Lu Beneran Tolol :v
`.trim()

    if (!text) return conn.reply(m.chat, 'Silahkan masukan parameter text1', m)

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

            let buff = ('http://bot.ojansenpai.ml/tolol/img.php?nama=' + text);
            let voss = await fetch(buff)
                        let vuss = await ftype.fromStream(voss.body)
                        if (vuss !== undefined) {

     conn.sendFile(m.chat, await getBuffer(buff), 'foto.jpg', str, m)
     }
}
handler.help = ['tololserti <teks>']
handler.tags = ['sticker']
handler.command = /^(tololserti)$/i
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
