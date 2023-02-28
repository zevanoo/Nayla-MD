let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭─「 BUY PREMIUM & SEWA 」
│
│ + *Premium*
│ > Keuntungan :
│• Limit Tidak Terbatas!
│• Fitur Premium Dapat Digunakan!
│
│ > Harga :
│• 10K / Weekly (Mingguan)
│• 20K / Monthly (Bulanan)
│
│ + *Sewa*
│• 5K / Minggu
│• 20K / Bulan
│
│ + *Pembayaran*
│• TRI : 089520306297
╰────
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
} 
handler.help = ['harga']
handler.tags = ['info']
handler.command = /^(harga)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 100

module.exports = handler