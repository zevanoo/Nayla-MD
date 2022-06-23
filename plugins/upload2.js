const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
 msg = m
encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await conn.downloadAndSaveMediaMessage(encmedia)
hasil = await require('ra-api').UploadFile(media)
m.reply(JSON.stringify(hasil, null, 2))
}
handler.help = ['upload2 (caption|reply media)']
handler.tags = ['tools']
handler.command = /^upload2$/i

module.exports = handler