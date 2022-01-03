let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `_*Tidak Ada Absen Berlangsung Digrup Ini!*_\n\n*${usedPrefix}mulaiabsen* - Untuk Memulai Absen`

    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
    let list = absen.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    conn.reply(m.chat, `*「 ABSEN 」*

Tanggal: ${date}
${conn.absen[id][2]}

┌ *Yang sudah absen:*
│ 
│ Total: ${absen.length}
${list}
│ 
└────

_By Raku Gans_`, m, { contextInfo: { mentionedJid: absen } })
}
handler.help = ['cekabsen']
handler.tags = ['abs']
handler.command = /^cekabsen$/i
handler.group = true
module.exports = handler