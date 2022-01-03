const { GroupSettingChange } = require('@adiwajshing/baileys')

let handler = async (m, { conn, args, usedPrefix }) => {
    if (args[0] === 'open') {
        conn.reply(m.chat, `Done!`, m)
        conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
    } else if (args[0] === 'close') {
        conn.reply(m.chat, `Done!`, m)
        conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
    } else if (args[0] === 'buka') {
        conn.reply(m.chat, `Done!`, m)
        conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
    } else if (args[0] === 'tutup') {
        conn.reply(m.chat, `Done!`, m)
        conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
    } else {
        throw `*Contoh : ${usedPrefix}group open*`
    }
}

handler.help = ['group <open/close>']
handler.tags = ['group']
handler.command = /^(group|grup)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler