let { MessageType } = require('@adiwajshing/baileys');
let { exec } = require('child_process');
let fetch = require('node-fetch');
let fs = require('fs');

let handler = async(m, { conn, text }) => {

   let dadu = `${pickRandom(['https://www.random.org/dice/dice1.png','https://www.random.org/dice/dice2.png','https://www.random.org/dice/dice3.png','https://www.random.org/dice/dice4.png','https://www.random.org/dice/dice5.png','https://www.random.org/dice/dice6.png'])}`
   let ranp = getRandom('.png')
   let rano = getRandom('.webp')
     exec(`wget ${dadu} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
        fs.unlinkSync(ranp)
        let hasil = fs.readFileSync(rano)
 conn.sendFile(m.chat, hasil, 'dadu.webp', '', m, false, { asSticker: true })
        fs.unlinkSync(rano)
    })
}
handler.help = ['dadu2']
handler.tags = ['game']
handler.command = /^(dadu2|dice)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
