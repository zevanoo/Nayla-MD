let fs = require('fs')
let handler = async (m, { conn, text }) => {
    m.reply('Tunggu Sebentar, Proses Getting File session.data.json')
    let sesi = await fs.readFileSync('./' ,+ global.sessionName + '.data.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: sesi }, { quoted: m })
}
handler.help = ['getsessi']
handler.tags = ['owner']
handler.command = /^(g(et)?ses?si(on)?(data.json)?)$/i

handler.owner = true

module.exports = handler
