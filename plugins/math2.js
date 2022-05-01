let fetch = require('node-fetch')

global.math2 = global.math2 ? global.math2 : {}
let waktu = 30000
let poin = 50000

let handler = async(m, { conn, text, args, usedPrefix }) => {

let id = m.chat
if (id in global.math2) return conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', global.math2[id][0])
let caption = `
「 MATH 2 」

Waktu : 30.00 Detik
Bonus : ${poin} XP & 5 Limit
`.trim()

  let res = await fetch('https://salism3api.pythonanywhere.com/math')
  let json = await res.json()

 global.math2[id] = [
    await conn.sendFile(m.chat, json.image, 'math.jpg', caption, m),
    json, poin,
    setTimeout(() => {
      if (global.math2[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah ${json.answer}`, global.math2[id][0])
      delete global.math2[id]
    }, waktu)
  ]
}
handler.help = ['math2']
handler.tags = ['game']
handler.command = /^(math2)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
