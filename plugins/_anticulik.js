let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *Gopay:* 6281215199447
• *Telkomsel:* 6281215199447
• *Indosat:* 6285642337380

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
Kalau gak mampu yang di atas bisa juga *follow ig* https://instagram.com/caliph91_

Kontak pemilik saya⬇️⬇️
`, m)
this.sendContact(m.chat, '6281215199447', 'Pemilik saya', idnya)
  }
  return true
}

module.exports = handler