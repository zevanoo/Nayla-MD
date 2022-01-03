let { GroupSettingChange, mentionedJid } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, usedPrefix }) => {

 if (!text) return conn.reply(m.chat, 'Teks Namanya apa?', m)

    let id = m.key.remoteJid
    let nama = `${text}`;
    let idgrup = `${id.split("@s.whatsapp.net")[0]}`;
    conn.groupUpdateSubject(idgrup, nama);
conn.reply(m.chat, 'Sukses mengganti Nama Group!', m)
}
handler.help = ['setname <nama>']
handler.tags = ['group']
handler.command = /^(setname)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
