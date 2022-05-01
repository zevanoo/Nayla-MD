let PhoneNumber = require('awesome-phonenumber')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let kai = await(await fetch(await conn.getProfilePicture(who))).buffer()
  let poi = await(await fetch(await conn.getProfilePicture(who))).buffer()
  let pp = './src/avatar_contact.png'
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age, money, healt, role } = global.db.data.users[m.sender]
    let username = conn.getName(who)
    let str = `
*Username:* ${username}
*Money:* Rp.${money}
*Xp:* ${exp}
*Limit:* ${limit}
*Health:* ${healt}
*Role:* ${role}
`.trim()
    let mentionedJid = [who]
    conn.reply(m.chat, str, 0, { thumbnail: kai, contextInfo: {
                  mentionedJid: [who],
                  externalAdReply: {
                    mediaUrl: 'https://youtu.be/-tKVN2mAKRI',
                    title: `${username}`,
                    body: ext.body,
                    thumbnail: poi
                   }
                 }
               }
           )
  }
}
handler.help = ['dompet', 'bank', 'my', 'wallet']
handler.tags = ['xp']
handler.command = /^dompet|bank|my|wallet|peti$/i
module.exports = handler