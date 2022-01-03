let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
    let __timers = (new Date - global.DATABASE.data.users[m.sender].as)
    let _timers = (500000 - __timers)
    let timers = clockString(_timers) 
    let user = global.DATABASE.data.users[m.sender]
    let buttons = [
{buttonId: 'id1', buttonText: {displayText: 'kolam'}, type: 1}, 
]
const buttonMessage = {
    contentText: `\n*Sepertinya Anda Sudah Kecapekan*\n*Silahkan Istirahat Dulu sekitar ${timers}*\n*Untuk bisa melanjutkan Memancing*\n`,
    footerText: '©RakuChan', 
    buttons: buttons,
    headerType: 1
}
    if (new Date - global.DATABASE.data.users[m.sender].as > 500000) {
let randomaku1 = `${Math.floor(Math.random() * 10)}`
let randomaku2 = `${Math.floor(Math.random() * 10)}`
let randomaku4 = `${Math.floor(Math.random() * 10)}`
let randomaku3 = `${Math.floor(Math.random() * 10)}`
let randomaku5 = `${Math.floor(Math.random() * 10)}`
let randomaku6 = `${Math.floor(Math.random() * 10)}`
.trim()

let rbrb1 = (randomaku1 * 1)
let rbrb2 = (randomaku2 * 1) 
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 1)
let rbrb5 = (randomaku5 * 1)
let rbrb6 = (randomaku6 * 1)

zero1 = `${rbrb1}`
zero2 = `${rbrb2}`
zero3 = `${rbrb3}`
zero4 = `${rbrb4}`
zero5 = `${rbrb5}`
zero6 = `${rbrb6}`

hsl = `
*《 Hasil Panen Kali Ini 》*

 *🍎 = [ ${zero1} ]*
 *🍊 = [ ${zero2} ]*
 *🍑 = [ ${zero3} ]*
 *🍓 = [ ${zero4} ]*
 *🍉 = [ ${zero5} ]*
 *🍌 = [ ${zero6} ]*


©ZEROBOT
`
global.DATABASE.data.users[m.sender].apel += rbrb1
global.DATABASE.data.users[m.sender].jeruk += rbrb2
global.DATABASE.data.users[m.sender].mangga += rbrb3
global.DATABASE.data.users[m.sender].stroberi += rbrb4
global.DATABASE.data.users[m.sender].semangka += rbrb5
global.DATABASE.data.users[m.sender].pisang += rbrb6

setTimeout(() => {
                     m.reply(`${hsl}`)
                     }, 30000) 
               
                     setTimeout(() => {
                     m.reply(`*_Mulai Memanen_*`)
                      }, 25000)
                    
                     setTimeout(() => {
                     m.reply('_Mulai Berbuah_')
                     }, 12000) 
                    
                     setTimeout(() => {
                     m.reply('_Sedang Menyiram Tanaman_')
                     }, 5000) 
                     
                     setTimeout(() => {
                     m.reply('_Sedang Menanam_')
                     }, 0) 
  user.as = new Date * 1
    } else conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage ,m )
}
handler.help = ['menanam']
handler.tags = ['rpg']
handler.command = /^(menanam)$/i
handler.register = true

module.exports = handler
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
} 