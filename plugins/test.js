let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    let caption = `
Test
`.trim()
    conn.siapakahaku[id] = [
        await conn.sendButton(m.chat, caption, '© nayla', 'Menu', '.menu'),
    ]
}
handler.help = ['test']
handler.tags = ['info']
handler.command = /^test$/i

module.exports = handler
