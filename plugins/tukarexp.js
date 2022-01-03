const money = 2 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^tukarxp/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.DATABASE.data.users[m.sender].exp / money) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.DATABASE.data.users[m.sender].exp >= money * count) {
    global.DATABASE.data.users[m.sender].exp -= money * count
    global.DATABASE.data.users[m.sender].money += count
    conn.reply(m.chat, `-${money * count} XP\n+ Rp.${count}`, m)
  } else conn.reply(m.chat, `XP tidak mencukupi untuk menukar Rp. ${count}`, m)
}
handler.help = ['tukarxp <Jumlah>', 'tukarxp <jumlah>', 'tukarsemua']
handler.tags = ['rpg']
handler.command = /^tukarxp([0-9]+)|tukarxp|tukarsemua$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

