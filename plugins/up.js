let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
Pesanan Sedang Diproses, Silahkan Kirim SS Bukti Transfer
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*APA*', 'status@broadcast')
}
handler.customPrefix = /^(UP)$/i
handler.command = new RegExp

module.exports = handler
 