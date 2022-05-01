let sortedexp = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].exp - a[1].exp)
let sortedlim = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].limit - a[1].limit)
let sortedmoney = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].money - a[1].money)
let sortedlevel = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].level - a[1].level)
let sorteddiamond = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
let sortedpotion = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].potion - a[1].potion)
let sortedsampah = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
let sortedcommon = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].common - a[1].common)
let sorteduncommon = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
let sortedmythic = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
let sortedlegendary = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
let sortedtigame = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].tigame - a[1].tigame)
let sortedcoin = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].coin - a[1].coin)
let usersexp = sortedexp.map(v => v[0])
let userslim = sortedlim.map(v => v[0])
let usersmoney = sortedmoney.map(v => v[0])
let usersdiamond = sorteddiamond.map(v => v[0])
let userspotion = sortedpotion.map(v => v[0])
let userssampah = sortedsampah.map(v => v[0])
let userslevel = sortedlevel.map(v => v[0])
let userscommon = sortedcommon.map(v => v[0])
let usersuncommon = sorteduncommon.map(v => v[0])
let usersmythic = sortedmythic.map(v => v[0])
let userslegendary = sortedlegendary.map(v => v[0])
let userstigame = sortedtigame.map(v => v[0])
let userscoin = sortedcoin.map(v => v[0])
let handler = async (m, { args, conn }) => {
	let len = args[0] && args[0].length > 0 ? Math.min(1000, Math.max(parseInt(args[0]), 5)) : Math.min(20, sortedexp.length)
	let lenexp = args[0] && args[0].length > 0 ? Math.min(1000, Math.max(parseInt(args[0]), 5)) : Math.min(20, sortedexp.length)
    let lenlim = args[0] && args[0].length > 0 ? Math.min(1000, Math.max(parseInt(args[0]), 5)) : Math.min(20, sortedlim.length)
    let lenmoney = args[0] && args[0].length > 0 ? Math.min(1000, Math.max(parseInt(args[0]), 5)) : Math.min(20, sortedmoney.length)
    let lendiamond = args[0] && args[0].length > 0 ? Math.min(1000, Math.max(parseInt(args[0]), 5)) : Math.min(20, sorteddiamond.length)
    let lenpotion = args[0] && args[0].length > 0 ? Math.min(1000, Math.max(parseInt(args[0]), 5)) : Math.min(20, sortedpotion.length)
    let lensampah = args[0] && args[0].length > 0 ? Math.min(1000, Math.max(parseInt(args[0]), 5)) : Math.min(20, sortedsampah.length)
    let lenlevel = args[0] && args[0].length > 0 ? Math.min(1000, Math.max(parseInt(args[0]), 5)) : Math.min(20, sortedlevel.length)
    let lencommon = args[0] && args[0].length > 0 ? Math.min(1000, Math.max(parseInt(args[0]), 5)) : Math.min(20, sortedcommon.length)
    let lenuncommon = args[0] && args[0].length > 0 ? Math.min(1000, Math.max(parseInt(args[0]), 5)) : Math.min(20, sorteduncommon.length)
    let lenmythic = args[0] && args[0].length > 0 ? Math.min(1000, Math.max(parseInt(args[0]), 5)) : Math.min(20, sortedmythic.length)
    let lenlegendary = args[0] && args[0].length > 0 ? Math.min(1000, Math.max(parseInt(args[0]), 5)) : Math.min(20, sortedlegendary.length)
    let lentigame = args[0] && args[0].length > 0 ? Math.min(1000, Math.max(parseInt(args[0]), 5)) : Math.min(20, sortedtigame.length)
    let lencoin = args[0] && args[0].length > 0 ? Math.min(1000, Math.max(parseInt(args[0]), 5)) : Math.min(20, sortedcoin.length)
	let text = `Gunakan format .lb [type]
Contoh .lb money

Type : 
Exp
Limit
Money
Diamond
Potion
Sampah
Level
Common
Uncommon
Mythic
Legendary
Tigame
Coin
`.trim()
    if(!args[0]) throw text
	switch (args[0].toLowerCase()) {
            case 'exp':
    conn.reply(m.chat, `
• *Leaderboard Top ${lenexp}* •
Kamu: *${usersexp.indexOf(m.sender) + 1}* dari *${usersexp.length}*

${sortedexp.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ': *' + data.exp + ' Exp*').join`\n`}
`.trim(), m, {
    contextInfo: {
      mentionedJid: [...usersexp.slice(0, len)]
    }
  })
   break
   case 'limit':
   conn.reply(m.chat, `
• *Leaderboard Top ${lenlim}* •
Kamu: *${userslim.indexOf(m.sender) + 1}* dari *${userslim.length}*

${sortedlim.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ': *' + data.exp + ' Limit*').join`\n`}
`.trim(), m)
   break
   case 'money':
   conn.reply(m.chat, `
• *Leaderboard Top ${lenmoney}* •
Kamu: *${usersmoney.indexOf(m.sender) + 1}* dari *${usersmoney.length}*

${sortedmoney.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ': *' + data.exp + ' Money*').join`\n`}
`.trim(), m)
   break
   case 'diamond':
   conn.reply(m.chat, `
• *Leaderboard Top ${lendiamond}* •
Kamu: *${usersdiamond.indexOf(m.sender) + 1}* dari *${usersdiamond.length}*

${sorteddiamond.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ': *' + data.exp + ' Diamond*').join`\n`}
`.trim(), m)
   break
     default:
     throw text
      }
}
handler.help = ['leaderboard', 'lb']
handler.tags = ['xp']
handler.command = /^(leaderboard|lb)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler