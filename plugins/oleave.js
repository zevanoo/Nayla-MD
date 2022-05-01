let handler = async function(m, { conn, args, isPrems, isOwner }) {

const from = m.key.remoteJid
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
      this.reply(m.chat, 'Bye Semuaa', m)
      await sleep(5000)
  await conn.groupLeave(from)
}
handler.help = ['oleave', 'okeluar']
handler.tags = ['owner']
handler.command = /^(oleave|okeluar)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
