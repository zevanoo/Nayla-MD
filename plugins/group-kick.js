let handler = async (m, { conn, args }) => {
let fs = require('fs')
let stc = fs.readFileSync('./sticker/Mintakick.webp')
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await conn.groupRemove(m.chat, [user])
  conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*KICKED BY ' + global.botname + '*', 'status@broadcast')
}
handler.help = ['kick'].map(v => v + ' @user')
handler.tags = ['group']
handler.command = /^(kick|\-)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = false

module.exports = handler

