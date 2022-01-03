let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/error.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*ERROR BY ALAN BOTZ*', 'status@broadcast')
}
handler.customPrefix = /^(ERROR)$/i
handler.command = new RegExp

module.exports = handler