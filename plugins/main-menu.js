let { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let levelling = require('../system/lib/levelling')
let fs = require('fs')
const util = require('util')
const os = require('os')
let path = require('path')
let { createHash} = require('crypto')
let fetch = require('node-fetch')
let { perfomance } = require('perf_hooks')
let moment = require('moment-timezone')
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;

const defaultMenu = {
  before:`
┏━━━━━━─────┈ ⳹
┃╔━─⟢⟨ ${global.botname} ⟩⟣
┇┃ ➯𝙊𝙬𝙣𝙚𝙧 : Zevano
┃║ ➯𝘽𝙊𝙏 : ${global.botname}
┇┃ ➯𝙐𝙥𝙩𝙞𝙢𝙚 : %uptime
┃║ ➯𝘿𝙖𝙩𝙖𝙗𝙖𝙨𝙚 : %rtotalreg
┃❏
┗┳━━◩
┍┛
┆➯📝𝘼𝙡𝙡 𝙁𝙞𝙩𝙪𝙧 : ${totalf}
└─┈⟅
┍━━━──┈❏➢ Profile
┆𝙽𝚊𝚖𝚎 : %name
┆𝙻𝚒𝚖𝚒𝚝 : %limit
┆𝙻𝚎𝚟𝚎𝚕 : %level
┆𝙴𝚡𝚙   : %exp
┆𝚁𝚘𝚕𝚎   : %role
└──┈┈⟢
%readmore`.trimStart(), 
  header: '⳼────❪ %category ❫\n┃╭─❏ ',
  body: '┃│❖ %cmd %islimit %isPremium',
  footer: '┃╰───────────────❏\n✇────✪\n',
  after: ``,
}

let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'absen', 'xp', 'rpg', 'hadiah', 'database', 'group', 'anime', 'panik', 'editor', 'internet', 'sticker', 'game', 'fun', 'image', 'anony', 'audio', 'sound', 'quotes', 'primbon', 'belajar', 'nulis', 'music', 'video', 'quran', 'vote', 'kerang', 'downloader', 'news', 'spam', 'tools', 'jadibot', 'premium', 'owner', 'host', 'info']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
      'main': 'Start Bot',
      'daftar': 'Daftar',
      'abs': 'Absensi Menu', 
      'xp': 'Exp & Limit',
      'rpg': 'Adventure Menu', 
      'tutor': 'Tutorial Buat Install bot wa',
      'hadiah': 'Hadiah',
      'database': 'Database',
      'group': 'Group Menu',
      'anime': 'Anime Menu',
      'panik': 'Prank Menu',
      'editor': 'Editor Menu',
      'internet': 'Browser Menu',
      'sticker': 'Creator Menu',
      'game': 'Game Menu',
      'fun': 'Fun Menu',
      'image': 'Image Menu',
      'anony': 'Anonymous Chat',
      'audio': 'Audio Menu', 
      'sound': 'Sound Menu',
      'quotes': 'Random Menu',
      'primbon': 'Primbon Menu',
      'belajar': 'Education Menu',
      'nulis': 'Nulis Menu',
      'music': 'Music Menu',
      'video': 'Video Menu',
      'quran': 'Islamic Menu',
      'vote': 'Vote Menu',
      'kerang': 'Kerang Menu',
      'downloader': 'Downloader Menu',
      'news': 'News Menu',
      'spam': 'Spammer Menu',
      'tools': 'Tools Menu',
      'jadibot': 'Bot Numpang',
      'premium': 'Premium & VIP Menu',
      'owner': 'Owner Menu',
      'host': 'Host Menu',
      'info': 'Information',
      'thnks': 'THANKS TO',
  }
  if (teks == 'absen') tags = {
    'absen': 'Absensi Menu',
    'thnks': 'THANKS TO',
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit',
    'thnks': 'THANKS TO',
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Adventure Menu',
    'thnks': 'THANKS TO',
  }
  if (teks == 'hadiah') tags = {
    'hadiah': 'Hadiah',
    'thnks': 'THANKS TO',
  }
  if (teks == 'database') tags = {
    'database': 'Database',
    'thnks': 'THANKS TO',
  }
  if (teks == 'group') tags = {
    'group': 'Group Menu',
    'thnks': 'THANKS TO',
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime Menu',
    'thnks': 'THANKS TO',
  }
 if (teks == 'panik') tags = {
    'panik': 'Prank Menu',
    'thnks': 'THANKS TO',
  }
  if (teks == 'editor') tags = {
    'editor': 'Editor Menu',
    'thnks': 'THANKS TO',
  }
  if (teks == 'internet') tags = {
    'internet': 'Browser Menu',
    'thnks': 'THANKS TO',
  }
  if (teks == 'sticker') tags = {
    'sticker': 'Creator Menu',
    'thnks': 'THANKS TO',
  }
  if (teks == 'game') tags = {
    'game': 'Game Menu',
    'thnks': 'THANKS TO',
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun Menu',
    'thnks': 'THANKS TO',
  }
  if (teks == 'image') tags = {
    'image': 'Image Menu',
    'thnks': 'THANKS TO',
  }
  if (teks == 'anony') tags = {
    'anony': 'Anonymous Chat',
    'thnks': 'THANKS TO',
  }
  if (teks == 'audio') tags = {
    'audio': 'Audio Menu',
    'thnks': 'THANKS TO',
  }
  if (teks == 'sound') tags = {
    'sound': 'Sound Menu',
    'thnks': 'THANKS TO',
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Random Menu',
    'thnks': 'THANKS TO',
  }
  if (teks == 'primbon') tags = {
    'primbon': 'Primbon Menu',
    'thnks': 'THANKS TO',
  }
  if (teks == 'belajar') tags = {
    'belajar': 'Education Menu',
    'thnks': 'THANKS TO',
  }
  if (teks == 'nulis') tags = {
    'nulis': 'Nulis Menu',
    'thnks': 'THANKS TO',
  }
  if (teks == 'music') tags = {
    'music': 'Music Menu',
    'thnks': 'THANKS TO',
  }
  if (teks == 'video') tags = {
    'video': 'Video Menu',
    'thnks': 'THANKS TO',
  }
  if (teks == 'quran') tags = {
    'quran': 'Islamic Menu',
    'thnks': 'THANKS TO',
  }
  if (teks == 'vote') tags = {
    'vote': 'Vote Menu',
    'thnks': 'THANKS TO',
  }
  if (teks == 'kerang') tags = {
    'kerang': 'Kerang Menu',
    'thnks': 'THANKS TO',
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader Menu',
    'thnks': 'THANKS TO',
  }
  if (teks == 'news') tags = {
    'news': 'News Menu',
    'thnks': 'THANKS TO',
  }
  if (teks == 'spam') tags = {
    'spam': 'Spammer Menu',
    'thnks': 'THANKS TO',
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools Menu',
    'thnks': 'THANKS TO',
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Bot Numpang',
    'thnks': 'THANKS TO',
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium Menu',
    'thnks': 'THANKS TO',
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner Menu',
    'host': 'Owner Menu2',
    'thnks': 'THANKS TO',
  }
  if (teks == 'info') tags = {
    'info': 'Info Menu',
    'thnks': 'THANKS TO',
  }
  
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(m.sender)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let premium = global.db.data.users[m.sender].premium
    let user = global.db.data.users[who]
    let { exp, limit, level, money, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let tag = `wa.me/${m.sender.split('@')[0]}`
 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let waktuwib = moment.tz('Asia/Jakarta').format('HH:mm:ss')

let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
    return {
      help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
      prefix: 'customPrefix' in plugin,
      limit: plugin.limit,
      premium: plugin.premium,
      enabled: !plugin.disabled,
    }
  })

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
const ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `Hai Kak ${name}!`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch(global.ext.thum)).buffer(),
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
const fdoc = {
   key : {
   remoteJid: 'status@broadcast',
   participant : '0@s.whatsapp.net'
   },
   message: {
   documentMessage: {
   title: wm, 
   }
   }
   }

if (teks == '404') {
let menuu = `SILAHKAN CEK MENU DI BAWAH`
const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        listMessage: {
            title: `${ucapan()} ${name}`,
            description: menuu,
            buttonText: 'LIST MENU',
            listType: 1,
            footerText: `┌────「 *${global.botname}* 」───⬣
│⬡ Aktif selama ${uptime}
│⬡ ${Object.keys(global.db.data.users).length} Pengguna
│⬡ Mode : ${global.opts['self'] ? 'Self' : 'publik'}
│⬡ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} Chat Terbanned
│⬡ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} Pengguna Terbanned
╰──────⬣
┌────「 *${name}* 」───⬣
│⬡ Api : ${tag}
│⬡ Limit : ${limit}
│⬡ Role : ${role}
│⬡ Premium : ${global.prem ? 'Yes' : 'No'}
│⬡ Date : ${week} ${date}
│⬡ Time : ${wib}
╰──────────────⬣`,
            mtype: 'listMessage',
            sections: [
              {
                "rows": [{
                  "title": `Status Bot`,
                  "description": "Informasi dan Status bot",
                  "rowId": `${_p}status`
                },{
                  "title": "Rules",
                  "description": "User yang Pintar pasti mematuhi",
                  "rowId": `${_p}rules`
                },{
                  "title": "Group Official",
                  "description": "Official gc Dari " + global.botname,
                  "rowld": `${_p}gcbot`
                }],
                "title": "INFORMASI BOT"
              }, {
                "rows": [{
                  "title": `Allmenu`,
                  "description": "Menampilkan Menu All",
                  "rowId": `${_p}? all`
                  }, {
                  "title": "AbsenMenu",
                  "description": "Menampilkan Menu Absen",
                  "rowId": `${_p}? absen`
                }, {
                  "title": "ExpMenu",
                  "description": "Menampilkan Menu Exp",
                  "rowId": `${_p}? xp`
                }, {
                  "title": "AdventureMenu",
                  "description": "Menampilkan Menu Adventure",
                  "rowId": `${_p}? rpg`
                }, {
                  "title": "HadiahMenu",
                  "description": "Menampilkan Menu Hadiah",
                  "rowId": `${_p}? hadiah`
                }, {
                  "title": "DatabaseMenu",
                  "description": "Menampilkan Menu Database",
                  "rowId": `${_p}? database`
                }, {
                  "title": "GroupMenu",
                  "description": "Menampilkan Menu Group",
                  "rowId": `${_p}? group`
                }, {
                  "title": "AnimeMenu",
                  "description": "Menampilkan Menu Anime",
                  "rowId": `${_p}? anime`
                }, {
                  "title": "PrankMenu",
                  "description": "Menampilkan Menu Prank",
                  "rowId": `${_p}? panik`
                }, {
                  "title": "EditorMenu",
                  "description": "Menampilkan Menu Editor",
                  "rowId": `${_p}? editor`
                }, {
                  "title": "BrowserMenu",
                  "description": "Menampilkan Menu Browser",
                  "rowId": `${_p}? internet`
                }, {
                  "title": "CreatorMenu",
                  "description": "Menampilkan Menu Creator",
                  "rowId": `${_p}? sticker`
                }, {
                  "title": "GameMenu",
                  "description": "Menampilkan Menu Game",
                  "rowId": `${_p}? game`
                }, {
                  "title": "FunMenu",
                  "description": "Menampilkan Menu Fun",
                  "rowId": `${_p}? fun`
                }, {
                  "title": "ImageMenu",
                  "description": "Menampilkan Menu Image",
                  "rowId": `${_p}? image`
                }, {
                  "title": "AnonymousChat",
                  "description": "Menampilkan Menu Anonymous",
                  "rowId": `${_p}? anony`
                }, {
                  "title": "AudioMenu",
                  "description": "Menampilkan Menu Audio",
                  "rowId": `${_p}? audio`
                }, {
                  "title": "SoundMenu",
                  "description": "Menampilkan Menu Sound",
                  "rowId": `${_p}? sound`
                }, {
                  "title": "RandomMenu",
                  "description": "Menampilkan Menu Random",
                  "rowId": `${_p}? quotes`
                }, {
                  "title": "PrimbonMenu",
                  "description": "Menampilkan Menu Primbon",
                  "rowId": `${_p}? primbon`
                }, {
                  "title": "EducationMenu",
                  "description": "Menampilkan Menu Education",
                  "rowId": `${_p}? belajar`
                }, {
                  "title": "NulisMenu",
                  "description": "Menampilkan Menu Nulis",
                  "rowId": `${_p}? nulis`
                }, {
                  "title": "MusicMenu",
                  "description": "Menampilkan Menu Music",
                  "rowId": `${_p}? music`
                }, {
                  "title": "VideoMenu",
                  "description": "Menampilkan Menu Video",
                  "rowId": `${_p}? video`
                }, {
                  "title": "IslamicMenu",
                  "description": "Menampilkan Menu Islamic",
                  "rowId": `${_p}? quran`
                }, {
                  "title": "VoteMenu",
                  "description": "Menampilkan Menu Vote",
                  "rowId": `${_p}? vote`
                }, {
                  "title": "KerangMenu",
                  "description": "Menampilkan Menu Kerang",
                  "rowId": `${_p}? kerang`
                }, {
                  "title": "DownloaderMenu",
                  "description": "Menampilkan Menu Downloader",
                  "rowId": `${_p}? downloader`
                }, {
                  "title": "NewsMenu",
                  "description": "Menampilkan Menu News",
                  "rowId": `${_p}? news`
                }, {
                  "title": "SpammerMenu",
                  "description": "Menampilkan Menu Spammer",
                  "rowId": `${_p}? spam`
                }, {
                  "title": "ToolsMenu",
                  "description": "Menampilkan Menu Tools",
                  "rowId": `${_p}? tools`
                }, {
                  "title": "Jadibot Numpang",
                  "description": "Menampilkan Menu Jadibot",
                  "rowId": `${_p}? jadibot`
                }, {
                  "title": "PremiumMenu",
                  "description": "Menampilkan Menu Premium",
                  "rowId": `${_p}? premium`
                }, {
                  "title": "OwnerMenu",
                  "description": "Menampilkan Menu Owner",
                  "rowId": `${_p}? owner`
                }, {
                  "title": "InfoMenu",
                  "description": "Menampilkan Info",
                  "rowId": `${_p}? info`
                }
                  ],
                "title": "LIST MENU"
              }, {
              	"rows": [{
                  "title": `Owner Bot`,
                  "description": "Owner dari" + global.botname,
                  "rowId": `${_p}owner`
                },{
                  "title": "Donasi",
                  "description": "Donasi Agar bot selalu online",
                  "rowId": `${_p}rules`
                }],
                "title": "PENUTUP"
              }
            ], "contextInfo": {
              "stanzaId": m.key.id,
              "participant": m.sender,
              "quotedMessage": m.message
            }
    }}), { userJid: m.participant || m.key.remoteJid, quoted: fkontak });
    return await conn.relayMessage(
        m.key.remoteJid,
        template.message,
        { messageId: template.key.id }
    )
    }
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
        before,
        ...Object.keys(tags).map(tag => {
          return header.replace(/%category/g, tags[tag]) + '\n' + [
            ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
              return menu.help.map(help => {
                return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                  .replace(/%islimit/g, menu.limit ? '(Ⓛ)' : '')
                  .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                  .trim()
              }).join('\n')
            }),
            footer
          ].join('\n')
        }),
        after
      ].join('\n')
      text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name,
      ucapan: ucapan(),
      level, limit, money, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    let message = await prepareWAMessageMedia({ image: await (await fetch(global.ext.thum)).buffer()}, { upload: conn.waUploadToServer }) 
      const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
          hydratedTemplate: {
            imageMessage: message.imageMessage, 
            hydratedContentText: text, 
            hydratedFooterText: wm2, 
            hydratedButtons: [{
             urlButton: {
               displayText: 'Group Bot', 
               url: gcbot
             }

           },
               {
             quickReplyButton: {
               displayText: 'Owner',
               id: '.owner',
             }

           },
               {
             quickReplyButton: {
               displayText: 'Donasi',
               id: '.donasi',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
     //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
} catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = ['menu', 'help', '?']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat DiniHari"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time > 10) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 18) {
    res = "Selamat Malam"
  }
  return res
}
