let { getBuffer } = require('../lib/functions')
let axios = require('axios')
let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap Masukan Query', m)

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
    let res = await fetch(`https://api.zeks.xyz/api/apkpure?q=${text}&apikey=MIMINGANZ`)
    let json = await res.json()
    if (!json.status) throw json
    let data = json.result
    let index = Math.floor(Math.random() * data.length)
    let object = data[index]
    let thumb = await (await fetch(object.thumbnail)).buffer()
    let hasil = `*APK PURE*\n\nJudul: ${object.title}\nRating: ${object.rating}\nLink: ${object.url}`

    conn.sendFile(m.chat, thumb, 'apkpure.jpg', hasil, m)
}
handler.help = ['apkpure'].map(v => v + ' <query>')
handler.tags = ['search']
handler.command = /^(apkpure)$/i
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