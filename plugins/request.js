const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Silahkan masukan request\n\nContoh: !request Fitur Baru', m)
    if (text > 300) return conn.reply(m.chat, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', m)
    var nomor = m.sender
    const teks1 = `*[ REQUEST ]*\nNomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${text}`
    conn.sendMessage('628818770766@s.whatsapp.net', teks1, MessageType.text)
    conn.reply(m.chat, '✔️Laporan Request Fiturmu telah dikirimkan ke Owner', m)
}
handler.help = ['request <fitur>']
handler.tags = ['info']
handler.command = /^(request)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
