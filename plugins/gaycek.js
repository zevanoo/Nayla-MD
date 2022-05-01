let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.gay)}”`, m)
}
handler.help = ['gaycek']
handler.tags = ['game']
handler.command = /^(gaycek)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.gay = [
'Gay Level : 4%\n\nAMAN BANGET!',
'Gay Level : 7%\n\nMasih Aman',
'Gay Level : 12%\n\nAman Kok',
'Gay Level : 22%\n\nHampir Aman',
'Gay Level : 27%\n\nGay dikit',
'Gay Level : 35%\n\nGay ¼',
'Gay Level : 41%\n\nDah lewat dri Aman',
'Gay Level : 48%\n\nSetengah gay',
'Gay Level : 56%\n\nLu gay juga',
'Gay Level : 64%\n\numayan gay',
'Gay Level : 71%\n\nHebatnya kegayan lu',
'Gay Level : 1%\n\n99% LU GAK GAY!',
'Gay Level : 77%\n\nGak akan Salah Lagi dah gaynya lu',
'Gay Level : 83%\n\nDijamin gay nya!',
'Gay Level : 89%\n\nGay Banget!',
'Gay Level : 94%\n\nTOBAT WOEE,, GAY LU UDH MELEWATI BATAS!😂',
'Gay Level : 100%\n\nLU ORANG TERGAY YANG PERNAH ADA!!!',
'Gay Level : 100%\n\nLU ORANG TERGAY YANG PERNAH ADA!!!',
'Gay Level : 100%\n\nLU ORANG TERGAY YANG PERNAH ADA!!!',
'Gay Level : 100%\n\nLU ORANG TERGAY YANG PERNAH ADA!!!',
]