let axios = require('axios')
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {

   await conn.reply(m.chat, mess.wait, 0, { thumbnail: await(await fetch(ext.title)).buffer(), contextInfo: {
                  externalAdReply: {
                    mediaUrl: 'https://youtu.be/-tKVN2mAKRI',
                    title: ext.title,
                    body: ext.body,
                    thumbnail: await(await fetch(ext.thum)).buffer()
                   }
                 }
               }
           )
     axios.get(`https://arugaz.herokuapp.com/api/corona?country=${teks}`).then((res) => {
    let hasil = `Negara : ${res.data.result.country}\n\nActive : ${res.data.result.active}\nCasesPerOneMillion : ${res.data.result.casesPerOneMillion}\nCritical : ${res.data.result.critical}\nDeathsPerOneMillion : ${res.data.result.deathsPerOneMillion}\nRecovered : ${res.data.result.recovered}\nTestPerOneMillion : ${res.data.result.testPerOneMillion}\nTodayCases : ${res.data.result.todayCases}\nTodayDeath : ${res.data.result.todayDeath}\nTotalCases : ${res.data.result.totalCases}\nTotalTest : ${res.data.result.totalTest}`
   
    conn.reply(m.chat, hasil, m)
    })
}
handler.help = ['coronacountry']
handler.tags = ['tools']
handler.command = /^(coronacountry)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 100

module.exports = handler