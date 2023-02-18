
let fs = require('fs')
let handler = async (m, { conn, text, command }) => {
    m.reply(`Tunggu Sebentar, Proses Getting File ${command}.data.json`)
    let sesi = await fs.readFileSync(`./${command}.data.json`)
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: `${command}.data.json` }, { quoted: m })
}
handler.help = ['session']
handler.tags = ['owner']
handler.command = /^session$/i

handler.owner = true

module.exports = handler
