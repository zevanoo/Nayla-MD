let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
┏━━°❀❬ *INFO* ❭❀°━━┓
┃
┃> Bot Recoded By :
┃• Zevano
┃
┃> Bot Dibuat Dengan :
┃• JavaScript via NodeJS
┃• FFmpeg
┃• ImageMagick
┃
┃> Thanks To :
┃• Nurutomo
┃• Zevano
┃• RC047/Kuhong
┃
┣━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *TRI:* [089520306297]
┣➥ *Dana:* [08818770766]
┣➥ *Gopay:* [08818770766]
┣➥ *LinkAja:* [08818770766]
┃ 「 *Chat OWNER* 」
┃ > *INGIN DOANSI ? https://wa.me/628818770766*
┗━━━━━━━━━━━━━━━━
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*NAYLABOTZ TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
