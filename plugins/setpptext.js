let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {

  if (!text) throw `Teksnya Mana?`
  if (text > 10) throw `Teks Kepanjangan untuk dijadikan PP!`
  let res = await fetch('https://api.areltiyan.site/sticker_maker?text=' + encodeURIComponent(text))
  let json = await res.json()
  let icon = Buffer.from(json.base64.split`,`[1], 'base64')

 await conn.updateProfilePicture(m.chat, icon)
  await m.reply(`Berhasil mengubah PP Grup menjadi *${text}*!`)
}
handler.help = ['setpptext','seticontext']
handler.tags = ['group']
handler.command = /^set(icon|pp)text$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
