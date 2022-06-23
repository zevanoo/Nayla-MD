let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  if (!text) return m.reply('Mimpi apa? ')
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
  let res = await fetch(global.API('bg',  '/artimimpi', { mimpi: text }))
  let json = await res.json()
  if (json.status !== true) throw json
  conn.reply(m.chat, json.result.trim(), m)
}
handler.help = ['artimimpi'].map(v => v + ' [mimpi]')
handler.tags = ['kerang']
handler.command = /^(artimimpi)$/i

module.exports = handler
