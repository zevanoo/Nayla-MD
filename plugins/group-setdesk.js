let { GroupSettingChange, mentionedJid } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, usedPrefix }) => {

 if (!text) return conn.reply(m.chat, 'Teks Deskripsinya apa?', m)

    let id = m.key.remoteJid
    let desk = `${text}`;
    let idgrup = `${id.split("@s.whatsapp.net")[0]}`;
    conn.groupUpdateDescription(idgrup, desk)
conn.reply(m.chat, 'Sukses mengganti Deskripsi Group!', m)
}
handler.help = ['setdesk <teks>']
handler.tags = ['group']
handler.command = /^(setdesk)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
