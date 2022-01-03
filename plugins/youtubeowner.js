let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `Subscribe Channel Ku Ya Kak nih link nya
yt
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*YANG SUBSCRIBE ANAK TUHAN*', 'status@broadcast') 
}
handler.help = ['chadmin']
handler.tags = ['info']
handler.command = /^(chadmin)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 25

module.exports = handler
