let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {
let [effect, teks] = text.split `|`

let listeffect = `
*List Effect Ephoto360 :*

wetglass
multicolor3d
watercolor
luxurygold
galaxywallpaper
light text
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
`.trim()

    if (!effect) return conn.reply(m.chat, listeffect, m)
    if (!teks) return conn.reply(m.chat, 'Uhm... Teksnya?', m)

  await m.reply('Sedang membuat...')
 let hasil = await (await fetch('http://lolhuman.herokuapp.com/api/ephoto1/' + effect + '?apikey=459d7c3abd0cf81a0832ca4c&text=' + teks)).buffer()
 let caption = `*EPHOTO 360*\n\nEffect : ${effect}`

    conn.sendFile(m.chat, hasil, 'ephoto360.jpg', caption, m)
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
