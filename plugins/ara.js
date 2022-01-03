let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let ara = fs.readFileSync('./audio/Ara.mp3') 
conn.sendMessage(m.chat, ara, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
conn.fakeReply(m.chat, ara, '0@s.whatsapp.net', '*🎶 ARA ARA 🎶*', 'status@broadcast')
}

handler.customPrefix = ['ara'] 
handler.tags = ['audio'] 
handler.command = /^(ara)$/i

handler.owner = false
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler
