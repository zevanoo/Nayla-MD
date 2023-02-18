let handler = async(m, { conn }) => {
conn.sendFile(m.chat, global.API('xteam', '/asupan/darkjoke', {}, 'APIKEY'), '', mess.sukses,m)
}
handler.help = ['darkjokes']
handler.tags = ['internet']
handler.command = /^(dragjoles|darkjokes)$/i

module.exports = handler
