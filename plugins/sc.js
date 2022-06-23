let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hayo ngapain mau pasang ya?*
*Nih w kasi*
*https://github.com/zevoffc/nayla*
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*NIH KASIAN LU*', 'status@broadcast')
}
handler.help = ['sc']
handler.tags = ['tutor']
handler.command = /^(sc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
 
