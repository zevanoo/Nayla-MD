let handler = m => m.reply('والسلام عليكم ورحمة الله وبركاته')

handler.customPrefix = /assalamualaikum|Assalamualaikumi/i
handler.command = new RegExp

module.exports = handler
