let axios = require('axios');
let fetch = require('node-fetch')
let neko = require('nekos.life')
let Neko = new neko()
     let handler  = async (m, { conn, args }) => {
if (!DATABASE.data.chats[m.chat].nsfw && m.isGroup) throw 'Feature Nsfw Disable\nType *!enable* *nsfw* to activate this feature'
     json = (await axios.get('https://meme-api.herokuapp.com/gimme/biganimetiddies')).data
   conn.sendFile(m.chat, json.url, 'boobs.jpg', '', m, false)
}
handler.help = ['boobs']
handler.tags = ['sange']
handler.command = /^boobs$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler