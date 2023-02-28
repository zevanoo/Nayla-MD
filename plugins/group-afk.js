let handler = (m, { text }) => {
  let user = global.DATABASE.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
*「 AFK MODE 」*

${conn.getName(m.sender)} Sekarang sedang AFK!

Alasan : ${text ? '' + text : ''}
`)
}
handler.help = ['afk <alasan>']
handler.tags = ['group']
handler.command = /^afk$/i

module.exports = handler
