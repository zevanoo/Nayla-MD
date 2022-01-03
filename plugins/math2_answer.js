let handler = m => m

handler.before = async function (m) {

  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/「 MATH 2 」/i.test(m.quoted.text)) return
  global.math2 = global.math2 ? global.math2 : {}
  if (!(id in global.math2)) return m.reply('Soal itu telah berakhir')
  if (m.quoted.id == global.math2[id][0].id) {
    let json = JSON.parse(JSON.stringify(global.math2[id][1]))
    if (m.text == json.answer) {
      global.db._data.users[m.sender].exp += global.math2[id][2]
      global.db._data.users[m.sender].limit += 5
      m.reply(`*Jawaban Benar!*\n+${global.math2[id][2]} XP`)
      clearTimeout(global.math2[id][3])
      delete global.math2[id]
    } else m.reply(`*Jawaban Salah!*`)
  }
}
handler.exp = 0

module.exports = handler
