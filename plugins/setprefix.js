let handler = async(m, { conn, text }) => {

  if (!text) throw `Prefix Tidak Boleh Kosong Kek Otak Mu:) `

  global.prefix = new RegExp('^[' + (opts['prefix'] || `${text}`) + ']')
    await m.reply(`Prefix Berhasil Diubah Menjadi *${text}*`)
}
handler.help = ['setprefix <prefix>']
handler.tags = ['owner']
handler.command = /^(setprefix)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
