let { get } = require('axios')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
m.reply(wait)
   let { result } = (await get(`https://api.lolhuman.xyz/api/pinterestdl?apikey=ohayou&url=${args[0]}`)).data
    url = result['736x'] || result['564x'] || result['474x'] || result['236x'] || result['170x']
    conn.sendMessage(m.chat, await getBuffer(url), 'imageMessage', { quoted: m, caption: 'Foto Sukses Di Download!' })
}
handler.help = ['pinterestdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(pinterestdl)$/i

module.exports = handler

async function getBuffer(url) {
h = await require('node-fetch')(url)
j = await h.buffer()
return j 
}