let fetch = require('node-fetch')
let limit = 60
let yts = require('yt-search')
let { servers, yta, ytv } = require('../lib/y2mate')

let handler = async (m, { conn, command, text, isPrems, isOwner }) => {

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
  if (!text) throw 'Harap masukan query'
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 7200)
  if (!vid) throw `Hasil Pencarian ${text} tidak ditemukan!`
  let { dl_link, thumb, title, filesize, filesizeF} = await (/2$/.test(command) ? ytv : yta)(vid.url, 'id4')
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
*Title:* ${title}
*Size:* ${filesizeF}
*Source:* ${vid.url}
*Download:* ${dl_link}
`.trim(), m)
}
handler.help = ['ytsearch'].map(v => v + ' <query>')
handler.tags = ['internet']
handler.command = /^(ytsearch)$/i

handler.exp = 0
handler.limit = true

module.exports = handler
