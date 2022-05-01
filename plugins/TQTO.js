//ngapain cok? mau ganti nama yak?
//hargai lah yg buat,gw cape² ngebuat ini tapi kalian nya malah enak²an ubah nama doang
//kalo mau ada nama kalian chat dulu ke zevano,izin dulu biar sama² enak
//di tambahin nama boleh tapi di ilagin jangan walau satu nama pun
//yg gk tau nomer raku nih nomer nya
//http://wa.me/628818770766?text=bg%20izin%20taroh%20nama%20di%20bot%20mu%20yak
let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${m.text}
*Jawaban:* ${pickRandom(['Ya','Mungkin iya','Mungkin','Mungkin tidak','Tidak','Tidak mungkin'])}
`.trim(), m)
}
handler.help = ['Zevano','Khael','Lolhuman','Xteam','Vhtear','Nurutomo','Layscode']
handler.tags = ['thnks']
handler.customPrefix = /(\?$)/
handler.command = /^rakuganteng$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
//jgn di ilagin cok
