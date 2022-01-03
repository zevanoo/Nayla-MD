let fetch = require('node-fetch');

let handler = async(m, { conn, text }) => {
let [effect, teks] = text.split `|`

try {
let listeffect = `
*List Effect Ephoto360 :*

wetglass
multicolor3d
watercolor
luxurygold
galaxywallpaper
lighttext
beautifulflower
puppycute
royaltext
heartshaped
birthdaycake
galaxystyle
hologram3d
greenneon
glossychrome
greenbush
metallogo
noeltext
glittergold
textcake
starsnight
wooden3d
textbyname
writegalaxy
galaxybat
snow3d
birthdayday
goldplaybutton
sliverplaybutton
freefire
cartoongravity
anonymhacker
`.trim()

    if (!effect) return conn.reply(m.chat, listeffect, m)
    if (!teks) return conn.reply(m.chat, 'Uhm... Teksnya?', m)

  await m.reply('Sedang membuat...')

 let hasil = await (await fetch('http://lolhuman.herokuapp.com/api/ephoto1/' + effect + '?apikey=31caf10e4a64e86c1a92bcba&text=' + teks)).buffer()
 let caption = `*EPHOTO 360*\n\nEffect : ${effect}`

    conn.sendFile(m.chat, hasil, 'ephoto.jpg', caption, m)

 } catch (e) {
  m.reply(`Effect *${effect}* tidak ditemukan!`)
   }
}
handler.help = ['ephoto <effect|teks>']
handler.tags = ['sticker']
handler.command = /^(ephoto)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
