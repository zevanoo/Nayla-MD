let fetch = require('node-fetch');
let ftype = require('file-type');
let { getBuffer, succes } = require('../lib/functions.js');

let handler = async(m, { conn, text }) => {
let str = `
Semoga Lu Beneran Tolol😂
`.trim()

    if (!text) return conn.reply(m.chat, 'Silahkan masukan parameter text1', m)

  await m.reply(wait)

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
