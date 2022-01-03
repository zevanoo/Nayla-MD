let handler = async (m, { usedPrefix, text }) => {
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        throw `_*Masih Ada Absensi Di Chat Ini!*_\n\n*${usedPrefix}hapusabsen* - Untuk Menghapus Absen`
    }
    conn.absen[id] = [
        m.reply(`Berhasil Memulai Absen!\n\n*${usedPrefix}absen* - Untuk Absen\n*${usedPrefix}cekabsen* - Untuk Mengecek Absen\n*${usedPrefix}hapusabsen* - Untuk Menghapus Data Absen`),
        [],
        text
    ]
}
handler.help = ['mulaiabsen [teks]']
handler.tags = ['abs']
handler.command = /^(start|mulai)absen$/i
handler.group = true
handler.admin = true
module.exports = handler