const fetch = require('node-fetch')


async function fetchJson(url) {
ffs = await fetch(url)
js = await ffs.json()
return js
}

 let handler  = async (m, { conn }) => {
      ss = await fetchJson('https://leyscoders-api.herokuapp.com/api/cersex?apikey=MIMINGANZ')
      conn.sendFile(m.chat, ss.gambar, '', `Cerita : ${ss.result}`.trim(), m)
}
handler.help = ['cersex']
handler.tags = ['dewasa']
handler.command = /^(cersex)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler