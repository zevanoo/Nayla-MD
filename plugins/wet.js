let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
Pesanan Sedang Diproses, Silahkan Pilih Menu Pembayaran Untuk Melanjutkan Pembelian
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 VIGEN SHOP TERPERCAYA 🔥*', 'status@broadcast')
}
handler.customPrefix = /^(NEXT)$/i
handler.command = new RegExp

module.exports = handler
 