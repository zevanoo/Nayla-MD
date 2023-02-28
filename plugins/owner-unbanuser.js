/*let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw 'Siapa yang mau di unbanned?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu lah'
    let users = global.db.data.users
    users[who].banned = false
    conn.reply(m.chat, `berhasil unbanned`, m)
}
handler.help = ['unban']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.rowner = true

module.exports = handler*/

let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

  if (!text) return conn.reply(m.chat, `*❏ GET NUMBER*\n\n• ${usedPrefix}unban number|days\n*Example:* ${usedPrefix}unban 62999191112`, m)
  text = no(text) + "@s.whatsapp.net"
  global.db.data.users[text].banned = false
  global.db.data.users[text].bannedDate = 0
  conn.reply(m.chat,`*Berhasil bebas dari sengsara @${text.split('@')[0]}.*`,m,{ contextInfo: { mentionedJid: [text] } })

}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.rowner = true
handler.fail = null
module.exports = handler
