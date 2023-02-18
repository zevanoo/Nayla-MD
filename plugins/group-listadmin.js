let { getGroupAdmins } = require('../lib/functions')
let { MessageType, Presence } = require('@adiwajshing/baileys')

let handler = async(m, { conn, isGroup, isAdmin, participants, groupMetadata }) => {

  await conn.updatePresence(m.chat, Presence.composing)

 let member = await groupMetadata.participants
 let admin = await getGroupAdmins(member)

    conn.reply(m.chat, `┏━━°❀❬ *LIST ADMIN* ❭❀°━━┓\n┃\n${admin.map(v => '┃• @' + v.replace(/@.+/, '')).join('\n')}\n┗━━━━━━━━━━━━━━`, null, { contextInfo: { mentionedJid: admin } })
}
handler.help = ['listadmin']
handler.tags = ['group']
handler.command = /^(listadmin)$/i
handler.group = true

module.exports = handler
