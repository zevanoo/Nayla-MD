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
  let res = await fetch(global.API('xteam','/religi/ayatkursi', {}, 'APIKEY'))
  let json = await res.json()
  if (res.status != 200) throw json
  if (json.result.error) throw json.result.message
  let {
    tafsir,
    latin,
    arabic,
    translation
  } = json.result.data
  let caption = `
*「 Ayat Kursi 」*
${arabic}
${latin}
Artinya:
_"${translation}"_
`.trim()
  m.reply(caption)
  await m.reply(`Tafsir:\n\n${tafsir}`)
}
handler.help = ['ayatkursi']
handler.tags = ['islam']
handler.command = /^(ayatkursi)$/i


module.exports = handler
