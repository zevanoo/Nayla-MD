let fetch = require('node-fetch')
     let handler  = async (m, { conn, args, text }) => {
     if (!text) throw 'Cari Apa ?'
 if (text) await conn.reply(m.chat, mess.wait, 0, { thumbnail: await(await fetch(ext.thum)).buffer(), contextInfo: {
                  externalAdReply: {
                    mediaUrl: 'https://youtu.be/-tKVN2mAKRI',
                    title: ext.title,
                    body: ext.body,
                    thumbnail: await(await fetch(ext.thum)).buffer()
                   }
                 }
               }
           )
    heum = await require('../lib/scraper').pinterest(text)
    json = await heum
    random = json.result[Math.floor(Math.random() * json.result.length)]
    if (json.result.length == 0) return conn.sendFile(m.chat, './src/error.png', 'error not found', 'ERROR 404 NOT FOUND', m)
    data = await fetch('https://api.imgbb.com/1/upload?key=c93b7d1d3f7a145263d4651c46ba55e4&image='+random).then(v => v.json())
   get = await conn.getFile(data.data.url)
   conn.sendMessage(m.chat, get.data, 'imageMessage', { quoted: m, mimetype: get.mime, caption: data.data.url })
}
handler.help = ['pinterest2 <query>']
handler.tags = ['image']
handler.command = /^pinterest2$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler