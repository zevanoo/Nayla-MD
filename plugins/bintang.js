let fetch = require('node-fetch');
let ftype = require('file-type');
let { getBuffer, succes } = require('../lib/functions.js');

let handler = async(m, { conn, text }) => {
let str = `
Nihh Cuk
`.trim()

    if (!text) return conn.reply(m.chat, 'Silahkan masukan parameter text1', m)

  await m.reply(wait)

            let buff = ('http://lolhuman.herokuapp.com/api/ephoto1/starsnight?apikey=31caf10e4a64e86c1a92bcba&text=' + text)
            let voss = await fetch(buff)
                        let vuss = await ftype.fromStream(voss.body)
                        if (vuss !== undefined) {

     conn.sendFile(m.chat, await getBuffer(buff), 'foto.jpg', str, m)
     }
}
handler.help = ['bintang <teks>']
handler.tags = ['sticker']
handler.command = /^(bintang)$/i

handler.fail = null
handler.limit = true

module.exports = handler
