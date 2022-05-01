// let { getBuffer, succes } = require('./lib/functions.js');
let fs = require('fs');

let handler = async(m, { conn, text, args, usedPrefix }) => {
    if (args.length == 0) return conn.reply(m.chat, `Silahkan masukan query voice notes`, m)
    if (args[0] == 'papale' || args[0] == 'anjay' || args[0] == 'pota' || args[0] == 'padepap' || args[0] == 'iri' || args[0] == 'ara' || args[0] == 'bila' || args[0] == 'cidro' || args[0] == 'kiminoto' || args[0] == 'baby' || args[0] == 'bernyanyi' || args[0] == 'umbrella' || args[0] == 'enak' || args[0] == 'wes' || args[0] == 'kokoro' || args[0] == 'bambam' || args[0] == 'booma' || args[0] == 'tapi' || args[0] == 'siul' || args[0] == 'masha') {

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

     let bufferg = fs.readFileSync(`./src/vn/${args[0]}.opus`)

     conn.sendFile(m.chat, bufferg, 'getvn.opus', null, m, true)
    } else {
        conn.reply(m.chat, `Query tidak tersedia!\n\nSilahkan ketik ${usedPrefix}listvn untuk lihat query vn yang tersedia.`, m)
    }
}
handler.help = ['getvn <query>']
handler.tags = ['sound','music']
handler.command = /^(getvn)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
