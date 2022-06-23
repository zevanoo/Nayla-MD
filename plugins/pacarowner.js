let handler = function (m) {
  conn.reply(m.chat, `Gada Awokawokawok`, m) 
}
handler.help = ['pacarowner']
handler.tags = ['info']

handler.command = /^(pacarowner)$/i

module.exports = handler
