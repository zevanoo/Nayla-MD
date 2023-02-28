
let fs = require('fs')
let handler = async (m, { conn, text, command }) => {
    m.reply(`Tunggu Sebentar, Proses Getting File ${command}.js`)
    let sesi = await fs.readFileSync(`./${command}.js`)
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: `${command}.js` }, { quoted: m })
}
handler.help = ['main','app','handler','config','index']
handler.tags = ['owner']
handler.command = /^(main|app|handler|config|index)$/i

handler.owner = true

module.exports = handler
