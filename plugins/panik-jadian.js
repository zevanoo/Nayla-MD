let R = Math.random
let Fl = Math.floor
let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.jid)
    let a = ps[Fl(R() * ps.length)]
    let b
    do b = ps[Fl(R() * ps.length)]
    while (b === a)
    m.reply(`${toM(a)} ❤️ ${toM(b)}`, null, {
        contextInfo: {
            mentionedJid: [a, b]
        }
    })
conn.reply(m.reply, 'Cie Jodoh Nih Nikah Trs Buat Anak Sana:)', m)
} 
handler.help = ['jodohin']
handler.tags = ['panik']
handler.command = ['jodohin']

module.exports = handler
