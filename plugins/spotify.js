let { get } = require('axios')
let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
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
   let { status, result } = (await get(`https://api.lolhuman.xyz/api/spotify?apikey=ohayou&url=${args[0]}`)).data
    if (status !== 200) throw 'Server Error, Try Again!'
    let { title, artists, duration, link, thumbnail } = result
    conn.sendMessage(m.chat, await getBuffer(thumbnail), 'imageMessage', { quoted: m, caption : `*Title* : ${title}\n*Artist* : ${artists}` })
    conn.sendMessage(m.chat, await getBuffer(link), 'documentMessage', { quoted: m, mimetype: 'audio/mp3' , filename: `${title}.mp3` })
}
handler.help = ['spotify'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(spotify(dl)?)$/i

module.exports = handler

async function getBuffer(url) {
h = await fetch(url)
j = await h.buffer()
return j 
}