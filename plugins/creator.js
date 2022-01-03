let handler = function (m) {
  // this.sendContact(m.chat, '628818770766', owname, m)
  conn.sendContact(m.chat, '628818770766', owname, m)
  conn.reply(m.chat, `Tuh Ownerku hehe`, m)
}
handler.help = ['owner']
handler.tags = ['info']

handler.command = /^(owner)$/i

module.exports = handler

let owname = global.oname
