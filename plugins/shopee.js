let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap Masukan Query', m)

  await conn.reply(m.chat, mess.wait, 0, { thumbnail: await(await fetch(ext.thum)).buffer(), contextInfo: {
                  externalAdReply: {
                    mediaUrl: 'https://youtu.be/-tKVN2mAKRI',
                    title: ext.title,
                    body: ext.body,
                    thumbnail: await(await fetch(ext.thum)).buffer()
                   }
                 }
               }
           )
    let res = await fetch(`https://api.zeks.xyz/api/shopee?apikey=apivinz&q=${text}`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let thumb = await (await fetch(`http://lolhuman.herokuapp.com/api/gimage?apikey=lolapikey&query=${text}`)).buffer()
    let data = json.data
    let index = Math.floor(Math.random() * data.length)
    let object = data[index]
    let hasil = `*── 「 SHOPEE 」 ──*\n\n➸ *Nama*: ${object.name}\n➸ *Harga*: ${object.harga}\n➸ *Terjual*: ${object.terjual}\n➸ *Lokasi*: ${object.location}\n➸ *Stock:* ${object.stock}\n➸ *Info:* ${object.information}\n➸ *Link produk*: ${object.url}\n➸ *Deskripsi*: ${object.desc}`

    conn.sendFile(m.chat, thumb, 'shopee.jpg', hasil, m)
}
handler.help = ['shopee'].map(v => v + ' <query>')
handler.tags = ['search']
handler.command = /^(shopee)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
