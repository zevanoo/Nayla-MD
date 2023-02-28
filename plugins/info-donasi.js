let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *Dana:* global.donasi.dana
┣➥ *Pulsa:* global.donasi.pulsa
┣➥ *Gopay:* global.donasi.gopay
┣➥ *Saweria:* global.donasi.saweria
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
