const { createHash } = require('crypto')
const fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	let totalreg = Object.keys(global.db.data.users).length
    let user = global.db.data.users[m.sender]
	let sn = createHash('md5').update(m.sender).digest('hex')
	let { name, age } = global.db.data.users[m.sender]
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	if (user.registered === false) throw `Anda belum terdaftar silahkan daftar dengan cara\n${usedPrefix}daftar nama|umur*\nContoh : ${usedPrefix}daftar ` + mess.wm + `.16`
	let note = `
╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ *「 SERIAL NUMBER 」*
╰┬────────────┈ ⳹
┌┤◦➛ *Nama* : ${name}
││◦➛ *Nomor* : ${who.split`@`[0]}
││◦➛ *Umur* : ${age} Tahun
││◦➛ *SN* : ${sn}
││◦➛ *Total Reg* : ${totalreg} Orang
│╰────────────┈ ⳹
╰━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙

*「 ` + ext.body + ` 」*
`.trim()
   conn.reply(m.chat, note, 0, { thumbnail: await(await fetch(ext.thum)).buffer(), contextInfo: {
                  externalAdReply: {
                    mediaUrl: 'https://youtu.be/-tKVN2mAKRI',
                    title: 'Tuh serial number mu',
                    body: ext.body,
                    thumbnail: await(await fetch(ext.thum)).buffer()
                   }
                 }
               }
           )
}
handler.help = ['sn','serialnumber']
handler.tags = ['xp']
handler.command = /^sn|serialnumber$/i

module.exports = handler