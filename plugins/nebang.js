let handler = async (m, { conn }) => {
    let __timers = (new Date - global.DATABASE.data.users[m.sender].lastclaim)
    let _timers = (43200000 - __timers)
    let timers = clockString(_timers) 
    let user = global.DATABASE.data.users[m.sender]
    if (new Date - global.DATABASE.data.users[m.sender].lastclaim > 43200000) {
    conn.reply(m.chat, `Kamu Menjadi Penebang Pohon Dan Kamu Mendapat *2000* MONEY & *1000* EXP`, m)
    user.money += 2000
        user.exp += 1000
        user.lastclaim = new Date * 0
    } else conn.reply(m.chat, `Silahkan Menunggu *${timers}* Lagi Untuk Bisa Bekerja Lagi`, m)
}
handler.help = ['nebang']
handler.tags = ['rpg']
handler.command = /^(nebang)$/i

handler.fail = null

module.exports = handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
