const { createHash } = require('crypto')
let PhoneNumber = require('awesome-phonenumber')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let totalreg = Object.keys(global.db.data.users).length
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Format salah\n*${usedPrefix}daftar nama|umur*\nContoh : ${usedPrefix}daftar ` + mess.wm + `.16`
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 50) throw 'Umur Terlalu Tua'
  if (age < 5) throw 'Bayi Bisa Ngetik Sesuai Format Bjir ._.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
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
│ *Silahkan Ketik ` + usedPrefix + `menu*
│ *Untuk melihat menu cmd*
│ *Silahkan ketik ` + usedPrefix + `sn*
│ *Untuk Melihat Serial Number mu*
╰━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙

*「 ` + global.botname + ` 」*
`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler