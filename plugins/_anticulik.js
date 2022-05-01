let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `
KLO MAU W MASUK BAYAR JAMAL
`, m)
this.sendContact(m.chat, '628818770766', 'Pemilik saya', idnya)
  }
  return true
}

module.exports = handler