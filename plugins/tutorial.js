let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial Buat Bot WA:
Credit: *~NayLaBotz*

Download dulu apk ny
1) Termux
2) QuickEditor
3) ZarAchiver

Sc kalian pindah in ke /storage/emulated/0
setelah itu

Ketik di *[TERMUX]*
1) $ apt update
2) $ apt upgrade
3) $ pkg install ffmpeg
4) $ pkg install imagemagick
5) $ pkg install nodejs
6) $ pkg install bash
7) $ pkg install git

Untuk SC Nya..
Cari sendiri :v
8) $ termux-setup-storage
9) $ cd /sdcard/(nama folder sc ny)

*Terakhir*..
Penginstalannya cuy :)
10) *$ npm start* atau *node .*

Klo g muncul qr ny kalian ikuti ini
1) $ pkg install mc
2) $ mc
3) hapus folder session.json atau session.data.json
4) ctrl + z
5) $ *npm start* atau *node .* dan selesai kalian bisa scan

[ Note : Tanda $ Ga Perlu Di Ketik ]
[ Note : Ini Cuma Cara Pemasangan]
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['tutor']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
