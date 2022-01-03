let fetch = require('node-fetch');
let ftype = require('file-type');
let { getBuffer, succes } = require('../lib/functions.js');

let handler = async(m, { conn, text }) => {
let str = `
Nih
`.trim()

    if (!text) return conn.reply(m.chat, 'Silahkan masukan teksnya', m)

  await m.reply(wait)

  let hasil = await (await fetch('http://lolhuman.herokuapp.com/api/textprome/bloodfrosted?apikey=31caf10e4a64e86c1a92bcba&text=' + text)).buffer()

     conn.sendFile(m.chat, hasil, 'foto.jpg', str, m)
}
handler.help = ['bloodtext <teks>']
handler.tags = ['sticker']
handler.command = /^(bloodtext)$/i
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
