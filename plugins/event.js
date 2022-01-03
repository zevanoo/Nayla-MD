let handler  = async (m, { conn, usedPrefix: _p }) => {
let event = `
┏━°❀❬ *EVENT MINGGUAN * ❭❀°━┓
┃
┃> Tidak ada Event Minggu ini!
┃
┗━━━━━━━━━━━━━━━━
`.trim()

  conn.fakeReply(m.chat, event, '6281111111111@s.whatsapp.net', '*Eventnya Udahan :(*')
}
handler.help = ['event']
handler.tags = ['hadiah']
handler.command = /^(event)$/i

handler.fail = null 

module.exports = handler
