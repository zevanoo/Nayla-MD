let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.dare)}”`, m)
}
handler.help = ['dare']
handler.tags = ['game']
handler.command = /^(dare)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.dare = [
"Ajak orang yang tidak kamu kenal untuk selfie berdua dengan mu lalu upload ke snapgram",
"Ambil beberapa nomor dari kontakmu secara acak dan kirim sms *Aku hamil* sama mereka.",
"Ambil minuman apa saja yang ada didekat mu lalu campurkan dengan cabai dan minum!",
"Ambil nomor secara acak dari kontakmu, telepon dia, dan bilang *Aku mencintaimu*",
"Beli makanan paling murah di kantin (atau beli sebotol aqua) dan bilang sambil tersedu-sedu pada teman sekelasmu *Ini adalah makanan yang paling mahal yang pernah kubeli*",
"Beli satu botol coca cola dan siram bunga dengan coca cola itu di depan orang banyak.",
"Berdiri deket kulkas, tutup mata, pilih makanan secara acak didalemnya, pas makanpun mata harus tetep ditutup.",
"Berdiri di tengah lapangan basket dan berteriak, *AKU MENCINTAIMU PANGERANKU/PUTRIKU*",
"Beri hormat pada seseorang di kelas, lalu bilang *Hamba siap melayani Anda, Yang Mulia.*",
"Berjalan sambil bertepuk tangan dan menyanyi lagu *Selamat Ulang Tahun* dari kelas ke koridor.",
"Berlutut satu kaki dan bilang *Marry me?* sama orang pertama yang masuk ke ruangan.",
"Bikin hiasan kepala absurd dari tisu, apapun itu, terus suruh pose didepan kamera, terus upload.",
"Bilang *KAMU CANTIK/GANTENG BANGET NGGAK BOHONG* sama cewek/cowok yang menurutmu paling cantik/ganteng.",
"Bilang pada seseorang di kelas, *Aku baru saja diberi tahu aku adalah kembaranmu dulu, kita dipisahkan, lalu aku menjalani operasi plastik. Dan ini adalah hal paling serius yang pernah aku katakan.*",
"Buang buku catatan seseorang ke tempat sampah, di depan matanya, sambil bilang *Buku ini isinya tidak ada yang bisa memahami*",
"Cabut bulu kaki mu sendiri sebanyak 3 kali!",
]