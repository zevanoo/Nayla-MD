let { getBuffer } = require('../lib/functions')
let fetch = require('node-fetch')

let handler = async(m, { conn }) => {

 let thumb = await getBuffer(`http://docs-jojo.herokuapp.com/api/ssweb_full?url=https://tinyurl.com/29nt58wf&device=phone`)
 let caption = 'Nihh,, Orang2 yg baik keaku,, gk kek lu..'

  conn.sendFile(m.chat, thumb, 'gambar.jpg', caption, m)
}
handler.help = ['listdonasi']
handler.tags = ['rank']
handler.command = /^(listdona(te|si)|ld)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 100
handler.limit = false

module.exports = handler
