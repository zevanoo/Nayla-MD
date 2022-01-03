const { createHash } = require('crypto')

let handler = async function (m, { args }) {
  if (!args[0]) throw 'Serial Number tidak boleh kosong!'
  let user = global.DATABASE._data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Serial Number tidak valid'
  user.registered = false
  m.reply(`Anda telah membatalan Pendaftaran!`)
}
handler.help = ['unreg <sn>','unregister <sn>']
handler.tags = ['xp']

handler.command = /^unreg(ister)?$/i
handler.register = true

module.exports = handler
