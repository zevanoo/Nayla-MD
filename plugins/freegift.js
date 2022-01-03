let handler = async(m, { conn, args, usedPrefix }) => {

    if (args.length == 0) return conn.reply(m.chat, `Harap masukan Kode FreeGiftmu!`, m)
    if (args[0] == 'inikodegiftcok' || args[0] == 'CryptoBwos01jabKhP10KjUuupO201Zx' || args[0] == 'BbJdQ0X37ohL016HhqK' || args[0] == 'BbL016JJQBCSr54OwwW0' || args[0] == 'giftkey01389320007' || args[0] == 'kode013923') {

    if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
       conn.reply(m.chat, '*SELAMAT!*\n\nKamu telah mendapatkan\n1000 XP & 5 Limit!', m)
    global.DATABASE._data.users[m.sender].exp += 1000
    global.DATABASE._data.users[m.sender].limit += 5
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
} else conn.reply(m.chat, 'Kode Gift Gratis hanya dapat digunakan sehari sekali!\n\nKetik !buygift untuk menbeli kodegift premium', m)
   } else {
        conn.reply(m.chat, `*「 KODE FREE TIDAK VALID 」*\n\nSilahkan daftar terlebih dahulu untuk mendapatkan kodegift gratis!\n\nKetik !daftar namamu|umurmu`, m)
    }
}
handler.help = ['freegift <kode>']
handler.tags = ['hadiah']
handler.command = /^(freegift)$/i

module.exports = handler
