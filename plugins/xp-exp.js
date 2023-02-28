let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Masukkan jumlah exp yang akan diberi'
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (isNaN(txt)) throw 'Hanya angka'
  let xp = parseInt(txt)
  let exp = xp
  let pjk = Math.ceil(xp * pajak)
  exp += pjk
  if (exp < 1) throw 'Minimal 1'
  let users = global.db.data.users
  if (exp > users[m.sender].exp) throw 'Uang anda tidak mencukupi untuk mentransfer'
  users[m.sender].exp -= exp
  users[who].exp += xp

  m.reply(`(Rp.${-xp}) + (Rp.${-pjk} (Pajak 2%)) = ( Rp.${-exp})`)
  conn.fakeReply(m.chat, `+Rp.${xp}`, who, m.text)
}
handler.help = ['gift @user <jumlah>']
handler.tags = ['xp']
handler.command = /^gift$/i

module.exports = handler
