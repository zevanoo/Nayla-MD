let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/megumin')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', '@Daeho', m)
}
handler.help = ['.megumin']
handler.tags = ['anime']
handler.command = ['.megumin']
//anjay
module.exports = handler