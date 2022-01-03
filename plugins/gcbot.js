let handler = async m => m.reply(`
*LIST GC BOT*

*GROUP 1*
https://chat.whatsapp.com/JgFOfu182li7kG6dlKcwzD
`.trim()) // Tambah sendiri kalo mau
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler
