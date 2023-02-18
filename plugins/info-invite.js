let handler = m => m.reply(`Gunakan !join untuk memasukan Bot`)

handler.customPrefix = /^Undangan/i
handler.command = new RegExp
handler.premium = true

module.exports = handler
