let handler = async (m, { conn, text }) => {
  if (!text) throw 'Masukan teks yang akan ditirui oleh Bot!'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['say <teks>']
handler.tags = ['tools']

handler.command = /^say$/i

module.exports = handler
