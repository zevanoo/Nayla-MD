let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap Masukan Query', m)

  await m.reply(wait) 
    let res = await fetch(`http://zekais-api.herokuapp.com/playstore?query=${text}`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let thumb = await (await fetch(json.logo)).buffer()
    let hasil = `*── 「 PLAY STORE 」 ──*\n\n➸ *Nama*: ${json.title}\n➸ *Developer*: ${json.developer.name}\n➸ *Size:* ${json.size}\n➸ *Rating:* ${json.star}\n➸ *Rate For:* ${json.contentRating}\n➸ *Viewers:* ${json.total_review}\n➸ *Updated:* ${json.updated}\n➸ *Downloads:* ${json.installs}\n➸ *Compatible:* ${json.requires}\n➸ *Version:* ${json.currentVersion}\n➸ *Url:* ${json.url}\n➸ *Deskripsi*: ${json.whats_new}`

    conn.sendFile(m.chat, thumb, 'playstore.jpg', hasil, m)
}
handler.help = ['playstore'].map(v => v + ' <query>')
handler.tags = ['search']
handler.command = /^(playstore)$/i
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
