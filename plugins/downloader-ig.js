let axios = require("axios");
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Uhm... urlnya mana?', m)

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
        axios.get(`https://st4rz.herokuapp.com/api/ig?url=` + text)
            .then((res) => {
              let dl_link = res.data.result.videos
                    // conn.reply(m.chat, `*Link:* ${dl_link} `, m)
                conn.sendFile(m.chat, dl_link, 'video.mp4', `*Title:* ${text}\n*Link:* ${dl_link}`, m)
    })
}
handler.help = ['ig']
handler.tags = ['downloader']
handler.command = /^ig$/i
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