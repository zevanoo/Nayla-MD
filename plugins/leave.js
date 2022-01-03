let handler = async function(m, { conn, args, isPrems, isOwner }) {

const bot = m.key.remoteJid
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
      this.reply(m.chat, 'Bye Semuaa 😞', m)
      await sleep(5000)
  await conn.groupLeave(bot)
}
handler.help = ['leave', 'keluar']
handler.tags = ['group']
handler.command = /^(leave|keluar)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
