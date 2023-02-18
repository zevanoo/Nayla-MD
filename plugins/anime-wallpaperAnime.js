const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    try {
        let res = await fetch(global.API('xteam', '/randomimage/wpmobile', {}, 'APIKEY'))
        let img = await res.buffer()
        conn.sendMessage(m.chat, img, MessageType.image, {
            quoted: m, caption: mess.wm
        })
    } catch (e) {
        console.log(e)
        throw '_*Error*_'
    }
}
handler.help = ['anime'].map(v => 'wallpaper', 'wp' + v)
handler.tags = ['anime']
handler.command = /^(wallpaper|wp)anime$/i
handler.limit = true

module.exports = handler
