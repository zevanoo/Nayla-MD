let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
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
  let res = await fetch(global.API('xteam','/religi/wirid', {}, 'APIKEY'))
  let json = await res.json()
  if (res.status != 200) throw json
  if (json.result.error) throw json.result.message
  let {
    times,
    id,
    arabic,
    tnc
  } = json.result
  let caption = `
*「 Wirid 」*
No. ${id}
${arabic} ${times}x
${tnc}
`.trim()
  await m.reply(caption)
}
handler.help = ['wirid']
handler.tags = ['islam']
handler.command = /^(wirid)$/i


module.exports = handler
