let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/Enggak.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*ENGGAK*', 'status@broadcast')
}

handler.customPrefix = /^(mau)$/i
handler.command = new RegExp

module.exports = handler