const brainly = require('brainly-scraper-v2')
let handler = async function (m, { text }) {
  if (!text) throw 'Soalnya?'
  let res = await brainly(text)
  let answer = res.data.map((v, i) => `*PERTANYAAN KE ${i + 1}*\n${v.pertanyaan}\n${v.jawaban.map((v,i) => `*JAWABAN KE ${i + 1}*\n${v.text}`).join('\n')}`).join('\n\n•------------•\n\n')
  await m.reply(wait)
  m.reply(answer)
}
handler.help = ['brainly <soal>','belajar <soal>','mtk <soal>','ipa <soal>','ips <soal>','ppkn <soal>','inggris <soal>','pertanyaan <soal>']
handler.tags = ['belajar']
handler.command = /^(brainly|belajar|mtk|ipa|ips|ppkn|inggris|pertanyaan)$/i

handler.limit = true

module.exports = handler