let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let fetch = require('node-fetch')
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
    let items = ["meme indonesia","meme indo","foto lucu","meme spongebob"];
    let nime = items[Math.floor(Math.random() * items.length)];
    let url = "http://fdciabdul.tech/api/pinterest/?keyword=" + nime;
    
    axios.get(url)
      .then((result) => {
        let b = JSON.parse(JSON.stringify(result.data));
        let nime =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(nime) // Path to the image
        .then(
            (response) => {
	let buf = Buffer.from(response, 'base64'); // Ta-da

    conn.sendFile(m.chat, buf, 'foto.jpg', mess.sukses, m)
            }
        )
        .catch(
            (error) => {
                m.reply(mess.error); // Logs an error if there was one
            }
        )
    
    });
    }
handler.help = ['mem']
handler.tags = ['image']
handler.command = /^(mem)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler