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
1) $ pkg update
2) $ pkg upgrade
3) $ apt install ffmpeg
4) $ apt install imagemagick
5) $ apt install nodejs
6) $ apt install yarn
7) $ npm i yarn

Untuk SC Nya..
Cari sendiri :v
8) $ termux-setup-storage
9) $ cd /sdcard/(nama folder sc ny)

*Terakhir*..
Penginstalannya cuy :)
10) *$ npm start* atau *node .*

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
