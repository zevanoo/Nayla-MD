let axios = require("axios");
let handler = async(m, { conn, text }) => {

   await m.reply(wait)
      axios.get(`https://arugaz.herokuapp.com/api/infogempa`).then ((res) =>{
         let hasil = ` *Info Gempa* \n\ *Lokasi* : _${res.data.lokasi}_ \n *Kedalaman* : _${res.data.kedalaman}_ \n *Koordinat* : _${res.data.koordinat}_ \n *Magnitude* : _${res.data.magnitude}_ \n *Waktu* : _${res.data.waktu}_ `
  
    conn.reply(m.chat, hasil, m)
    })
}
handler.help = ['infogempa']
handler.tags = ['tools']
handler.command = /^(infogempa)$/i
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