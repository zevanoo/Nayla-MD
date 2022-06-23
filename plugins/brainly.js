const brainly = require('brainly-scraper-v2')
let fetch = require('node-fetch')
let handler = async function (m, { conn, text }) {
  if (!text) throw 'Soalnya?'
  let res = await brainly(text)
  let answer = res.data.map((v, i) => `*PERTANYAAN KE ${i + 1}*\n${v.pertanyaan}\n${v.jawaban.map((v,i) => `*JAWABAN KE ${i + 1}*\n${v.text}`).join('\n')}`).join('\n\n•------------•\n\n')
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
  m.reply(answer)
}
handler.help = ['brainly <soal>','belajar <soal>','mtk <soal>','ipa <soal>','ips <soal>','ppkn <soal>','inggris <soal>','pertanyaan <soal>']
handler.tags = ['belajar']
handler.command = /^(brainly|belajar|mtk|ipa|ips|ppkn|inggris|pertanyaan)$/i

handler.limit = true

module.exports = handler