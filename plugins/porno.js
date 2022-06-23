let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let fetch = require('node-fetch');
let handler = async(m, { conn, text }) => {

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
    axios.get('https://freerestapi.herokuapp.com/api/v1/randomp')
    .then((res) => {
      imageToBase64(res.data.url)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')

     conn.sendFile(m.chat, buf, 'porno.jpg', mess.sukses, m)
        })
    })
}
handler.help = ['porno']
handler.tags = ['dewasa']
handler.command = /^(porno)$/i
handler.off = true
handler.private = true

handler.limit = 10

module.exports = handler
