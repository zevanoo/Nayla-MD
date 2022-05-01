let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
┏━━°❀❬ *USER PROFILE* ❭❀°━━┓
┃
┃•  *Nama :* ${username}
┃•  *Umur :* ${registered ? '' + age : ''}
┃•  *Exp :* ${exp}
┃[${max - exp} lagi untuk levelup]
┃•  *Limit :* ${limit}
┃•  *Level :* ${level}
┃•  *Nomor :* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
┃•  *Api Whatsapp :* wa.me/${who.split`@`[0]}
┃•  *Terdaftar :* ${registered ? 'Yes': 'No'}
┃
┣━━°❀❬ *MENU* ❭❀°━━┓
┃
┣➥ *${usedPrefix}Allmenu*
┣➥ *${usedPrefix}XPmenu*
┣➥ *${usedPrefix}HadiahMenu*
┣➥ *${usedPrefix}DewasaMenu*
┣➥ *${usedPrefix}GrupMenu*
┣➥ *${usedPrefix}CreatorMenu*
┣➥ *${usedPrefix}EditorMenu*
┣➥ *${usedPrefix}ConverterMenu*
┣➥ *${usedPrefix}VidioMenu*
┣➥ *${usedPrefix}ImageMenu*
┣➥ *${usedPrefix}SoundMenu*
┣➥ *${usedPrefix}RandomMenu*
┣➥ *${usedPrefix}PrombonMenu*
┣➥ *${usedPrefix}EducationMenu*
┣➥ *${usedPrefix}MusicMenu*
┣➥ *${usedPrefix}KerangMenu*
┣➥ *${usedPrefix}DownloaderMenu*
┣➥ *${usedPrefix}NewsMenu*
┣➥ *${usedPrefix}SpammerMenu*
┣➥ *${usedPrefix}SearchMenu*
┣➥ *${usedPrefix}ToolsMenu*
┣➥ *${usedPrefix}VirusMenu*
┣➥ *${usedPrefix}JadibotMenu*
┣➥ *${usedPrefix}PremiumMenu*
┣➥ *${usedPrefix}OwnerMenu*
┣➥ *${usedPrefix}InfoMenu*
┃ 
┣━━°❀❬ *TQTO* ❭❀°━━┓
┃ 
┣➥ *Zevano (author)*
┣➥ *Lolhuman*
┣➥ *Xteam*
┣➥ *Vhtear*
┣➥ *Nurutomo*
┣➥ *Layscode*
┣➥ *Zeks*
┣➥ *Dll
┗━━━━━━━━━━━━━━━━
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.command = ['smenu']
handler.tags = ['ki']
handler.command = /^(smengmu)$/i
handler.register = true
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
