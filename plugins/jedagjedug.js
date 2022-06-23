let fs = require('fs')
let fetch = require('node-fetch')

let handler = async(m, { conn, text, args }) => {
    if (args.length == 0) return conn.reply(m.chat, `Silahkan masukan querynya`, m)
    if (args[0] == 'ff' || args[0] == 'ml' || args[0] == 'beatvn') {

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

     let bufferg = fs.readFileSync(`./src/jedag_jedug/${args[0]}/${pickRandom(['jedag','jedag1','jedag2','jedag3','jedag4','jedag5','jedag6','jedag7','jedag8'])}.mp4`)

     conn.sendFile(m.chat, bufferg, 'video.mp4', mess.sukses, m)
    } else {
        conn.reply(m.chat, `Query yang tersedia :\n\n• ff\n• ml\n• beatvn\n\nMisal : !jedagjedug ff`, m)
    }
}
handler.help = ['jedagjedug <query>']
handler.tags = ['video']
handler.command = /^(jedagjedug)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
