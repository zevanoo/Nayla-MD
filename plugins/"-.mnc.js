let handler = async (m, { conn, usedPrefix }) => {
		let __timer = (new Date - global.db.data.users[m.sender].lastfishing)
    let _timer = (500000 - __timer)
    let timer = clockString(_timer) 
    let user = global.db.data.users[m.sender]
	if (global.db.data.users[m.sender].fishingrod > 0) {
	if (global.db.data.users[m.sender].fishingroddurability > 99) {
    if (new Date - global.db.data.users[m.sender].lastfishing > 500000) {
let randomaku1 = `${Math.floor(Math.random() * 10)}`
let randomaku2 = `${Math.floor(Math.random() * 10)}`
let randomaku4 = `${Math.floor(Math.random() * 10)}`
let randomaku3 = `${Math.floor(Math.random() * 10)}`
let randompancing = `${Math.floor(Math.random() * 100)}`
let randomaku5 = `${Math.floor(Math.random() * 10)}`
let randomaku6 = `${Math.floor(Math.random() * 10)}`
let randomaku7 = `${Math.floor(Math.random() * 10)}`
let randomaku8 = `${Math.floor(Math.random() * 10)}`
let randomaku9 = `${Math.floor(Math.random() * 10)}`
let randomaku10 = `${Math.floor(Math.random() * 10)}`
let randomaku11 = `${Math.floor(Math.random() * 10)}`
let randomaku12 = `${Math.floor(Math.random() * 10)}`
.trim()

let rbrb1 = (randomaku1 * 1)
let rbrb2 = (randomaku2 * 1) 
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 1)
let rbrb = (randompancing * 1)
let rbrb5 = (randomaku5 * 1)
let rbrb6 = (randomaku6 * 1)
let rbrb7 = (randomaku7 * 1)
let rbrb8 = (randomaku8 * 1)
let rbrb9 = (randomaku9 * 1)
let rbrb10 = (randomaku10 * 1)
let rbrb11 = (randomaku11 * 1)
let rbrb12 = (randomaku12 * 1)

zero1 = `${rbrb1}`
zero2 = `${rbrb2}`
zero3 = `${rbrb3}`
zero = `${rbrb}`
zero4 = `${rbrb4}`
zero5 = `${rbrb5}`
zero6 = `${rbrb6}`
zero7 = `${rbrb7}`
zero8 = `${rbrb8}`
zero9 = `${rbrb9}`
zero10 = `${rbrb10}`
zero11 = `${rbrb11}`
zero12 = `${rbrb12}`

let perfect = (pickRandom(['Anjir GG', 'Mantap', 'Sempurna', 'Mancing Mania...', 'Besar Nih']))

hsl = `
*《 Hasil Memancing Kali Ini 》*
 *🦀 = [ ${zero2} ]*			*🐠 = [ ${zero6} ]*
 *🦞 = [ ${zero8} ]*			 *🐟 = [ ${zero11} ]*
 *🦐 = [ ${zero10} ]*			 *🐬 = [ ${zero7} ]*
 *🦑 = [ ${zero4} ]*			 *🐳 = [ ${zero12} ]*
 *🐙 = [ ${zero3} ]*			 *🦈 = [ ${zero9} ]*
  *🐡 = [ ${zero5} ]*			*🐋 = [ ${zero1} ]*
`
global.db.data.users[m.sender].paus += rbrb1
global.db.data.users[m.sender].fishingroddurability -= rbrb
global.db.data.users[m.sender].kepiting += rbrb2
global.db.data.users[m.sender].gurita += rbrb3
global.db.data.users[m.sender].cumi += rbrb4
global.db.data.users[m.sender].lastfishing = new Date * 1
global.db.data.users[m.sender].buntal += rbrb5
global.db.data.users[m.sender].dory += rbrb6
global.db.data.users[m.sender].lumba += rbrb7
global.db.data.users[m.sender].lobster += rbrb8
global.db.data.users[m.sender].hiu += rbrb9
global.db.data.users[m.sender].udang += rbrb10
global.db.data.users[m.sender].ikan += rbrb11
global.db.data.users[m.sender].orca += rbrb12

setTimeout(() => {
                     m.reply(`${hsl}`)
                     }, 20000) 

                     setTimeout(() => {
                     m.reply(`${perfect}`)
                      }, 18000)

                     setTimeout(() => {
                     m.reply('strike')
                     }, 15000) 

                     setTimeout(() => {
                     m.reply('menunggu')
                     }, 14000) 

                     setTimeout(() => {
                     m.reply('_Sedang Memancing..._')
                     }, 0) 
        } else conn.sendButton(m.chat, `*Sepertinya Anda Sudah Kecapekan*\n*Silahkan Istirahat Sejenak Sekitar ${timer}*\n*Untuk Bisa Melanjutkan Memancing Lagi*\n`, mess.wm, 'KOLAM', '#kolam', m )
     } else conn.reply(m.chat, 'Upgrade fishing rod dulu dah mau patah' ,m)
   } else conn.reply(m.chat, 'beli fishing rod dulu di .shop' ,m)
}
handler.help = ['mancing']
handler.tags = ['rpg']
handler.command = /^(memancing|mancing|fishing)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
  }
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
