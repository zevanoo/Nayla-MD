let handler  = async (m, { conn, text }) => {
let time = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

 if (!text) throw 'Masukan nama orang yang akan dicari!'

 await conn.fakeReply(m.chat, wait, '6281111111111@s.whatsapp.net', 'Powered By Indihome')
  let nomor = `${pickRandom(global.nomor)}`
  let nama = `${text}`

 await time(3500)
   conn.sendContact(m.chat, nomor, nama, m)
}
handler.help = ['cari <query>']
handler.tags = ['game']
handler.command = /^(cari)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.nomor = [
'+628818770766',
'+20101954224723',
'+919423791379',
'+6282187197952',
'+6281315877678',
'+905075569972',
'+6287760839248',
'+6285333365900',
'+2348168140694',
'+919423791379',
'+919422117777',
'+6285669320956',
'+6282348421996',
'+491629407779',
'+60198028586',
'+6283890378164',
'+6282380094116',
'+96895791684',
'+919984706368',
'+6287738286425',
'+6282348317051',
'+6289643242229',
'+628118303113',
'+967772975516',
'+6287794762070',
'+6289683466367',
'+6282319799197',
'+6289648026475',
'+6285349363381',
'+6283846488938',
'+6281367248010',
'+6281310151424',
'+6287773014236',
'+6289661202808',
'+6289621336533',
'+6283894243552',
'+6283811265710',
'+6283811265710',
'+6289679139044',
'+628979139004',
'+6285710307855',
'+6282351893642',
'+85265847725',
'+6281259480570',
'+6287860341577',
'+628975052792',
'+6281317985878',
'+6287736922348',
'+6288802105384',
'+628989031500',
]
