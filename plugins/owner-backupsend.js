let fs = require('fs')
let handler = async (m, { conn, usedPrefix }) => {
conn.sendFile(global.owner[0] + '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
}     
handler.help = ['sdb']
handler.tags = ['owner']
handler.command = ['sdb']

handler.owner = true


module.exports = handler