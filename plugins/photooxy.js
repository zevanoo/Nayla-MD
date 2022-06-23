let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {
let [effect, teks] = text.split `|`

let listeffect = `
*List Effect Photooxy :*

smoke
wolfmetal
underwaterocean
typography
neonlight
google
rainbowshine
camuflage
3dglowing
vintage
candy
gradientavatar
glowrainbow
stars
fur
flaming
crispchrome
kueultah
rainbowbg
metalicglow
striking3d
watermelon
underwebmatrix
multimaterial
harrypotter
8bit
kopi2
luxuryroyal
gerbang
woodblock
smoketypography
sweetcandy
silk
bevel
partyneon
greenleaves
modernmetal
lolcover
warface
pentakill
aov
battlefield
avatarlol
pokemon
lolavatarglitch
shinebannerlol
mastery7lol
dota2avatar
lol
crossfire
glowpentakill
warfacecover
coveroverwatch
lolcover2
csgo
lolpentakill
`.trim()

    if (!effect) return conn.reply(m.chat, listeffect, m)
    if (!teks) return conn.reply(m.chat, 'Uhm... Teksnya?', m)

  await conn.reply(m.chat, mess.wait, 0, { thumbnail: await(await fetch(ext.thum)).buffer(), contextInfo: {
                  externalAdReply: {
                    mediaUrl: 'https://youtu.be/-tKVN2mAKRI',
                    title: ext.title,
                    body: ext.body,
                    thumbnail: await(await fetch(ext.thum)).buffer()
                   }
                 }
               }
           )
 let hasil = await (await fetch('https://api.xteam.xyz/photooxy/' + effect + '?text=' + teks + '&APIKEY=APIKEYMU')).buffer()
 let caption = `*PHOTOOXY*\n\nEffect : ${effect}`

    conn.sendFile(m.chat, hasil, 'photooxy.jpg', caption, m)
}
handler.help = ['photooxy <effect|teks>']
handler.tags = ['sticker']
handler.command = /^(photooxy)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
