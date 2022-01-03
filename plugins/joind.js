const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Silahkan masukan request\n\nContoh: !request Fitur Baru', m)
    if (text > 300) return conn.reply(m.chat, 'Maaf Link Terlalu Panjang, Sepertinya Ini Bukan Link Grup:v', m)
    var nomor = m.sender
    const teks1 = `*[ REQUEST ]*\nNomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${text}`
    conn.sendMessage('628818770766@s.whatsapp.net', teks1, MessageType.text)
    conn.reply(m.chat, '✔️Link Request Anda telah dikirimkan ke Owner\nSilahkan Chat Ke Owner Dan Konfrimasi Pembayaran\n\nNomer Owner :wa.me/628818770766', m)
}
handler.help = ['join <link gc>']
handler.tags = ['daftar']
handler.command = /^(join)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
