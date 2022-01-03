let fetch = require('node-fetch');
let ftype = require('file-type');
let { getBuffer, succes } = require('../lib/functions.js');

let handler = async(m, { conn, text }) => {
    let str = `
Ngopi?
`.trim()

    if (!text) return conn.reply(m.chat, 'Silahkan masukan teksnya', m)

  await m.reply(wait)

  let hasil = await (await fetch('https://videfikri.com/api/textmaker/coffeecup2/?text=' + text)).buffer()

     conn.sendFile(m.chat, hasil, 'foto.jpg', str, m)
}
handler.help = ['coffetext <teks>']
handler.tags = ['sticker']
handler.command = /^(coffetext)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
