const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Kamu sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SERIAL NUMBER>`
  if (!Reg.test(text)) throw `contoh:\n*${usedPrefix + command} nama.umur*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 60) throw 'Umur terlalu tua'
  if (age < 5) throw 'Bayi bisa ngetik sesuai format bjir ._.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let totalreg = Object.keys(global.db.data.users).length
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ *「 VERIFICATION SUKSES 」*
│ *Terimakasih Sudah*
│ *Mendaftarkan Diri*
│ *Dalam Database*
╰┬────────────┈ ⳹
┌┤◦➛ *Nama* : ${name}
││◦➛ *Nomor* : ${who.split`@`[0]}
││◦➛ *Umur* : ${age} Tahun
││◦➛ *SN* : ${sn}
││◦➛ *FreeGift* : km3IpW93frlM
││◦➛ *Total Reg* : ${totalreg} Orang
││◦➛ *Status :* ☑️ Terverifikasi
│╰────────────┈ ⳹
│ *Silahkan Ketik ${usedPrefix}menu*
│ *Untuk melihat menu cmd*
│ *Silahkan ketik ${usedPrefix}sn*
│ *Untuk Melihat Serial Number mu*
╰━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙

*「 ${global.botname} 」*
`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp', 'daftar']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler