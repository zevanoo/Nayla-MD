let fetch = require('node-fetch');
let ftype = require('file-type');
let { getBuffer, succes } = require('../lib/functions.js');

let handler = async(m, { conn, text }) => {
    let str = `
Nihh Dah Jadi..
`.trim()

    if (!text) return conn.reply(m.chat, 'Silahkan masukan parameter text1', m)

  await m.reply(wait)

  let hasil = await (await fetch('http://zekais-api.herokuapp.com/carbon?code=' + text)).buffer()

     conn.sendFile(m.chat, hasil, 'foto.jpg', str, m)
}
handler.help = ['carbontext <teks>']
handler.tags = ['sticker']
handler.command = /^(carbontext)$/i
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
