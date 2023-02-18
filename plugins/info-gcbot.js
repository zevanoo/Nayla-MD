let handler = async m => m.reply(`
*LIST GC BOT*

${(global.linkGC).map((v, i) => '*GROUP ' + (i + 1) + '*\n' + v).join`\n\n`}
`.trim())
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler
