let imageToBase64 = require('image-to-base64');
let { MessageType } = require('@adiwajshing/baileys');
let axios = require("axios");
let handler = async(m, { conn, text }) => {

  await m.reply(wait)
    axios.get('https://lolhuman.herokuapp.com/api/ceritahoror?apikey=31caf10e4a64e86c1a92bcba')
    .then((res) => {
      imageToBase64(res.data.result.thumbnail)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')
            let story = `*${res.data.result.title}*\n\nDesk :\n${res.data.result.desc}\n\n${res.data.result.story}`

    conn.sendFile(m.chat, buf, 'horror.jpg', story, m)
      })
  })
}
handler.help = ['ceritahorror']
handler.tags = ['quotes']
handler.command = /^(ceritahorror|ceritahoror)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
