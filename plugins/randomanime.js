let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {

  await m.reply(wait)
let items = ["anime girl", "anime cantik", "anime", "anime aesthetic"];
    let cewe = items[Math.floor(Math.random() * items.length)];
    let url = "http://fdciabdul.tech/api/pinterest/?keyword=" + cewe;
    let str = `
Nih Anime
Cantik Kan? 
`.trim()

    axios.get(url)
      .then((result) => {
        let b = JSON.parse(JSON.stringify(result.data));
        let cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
        .then(
            (response) => {
	let buf = Buffer.from(response, 'base64'); // Ta-da

    conn.sendFile(m.chat, buf, 'foto.jpg', str, m)
            }
        )
        .catch(
            (error) => {
                m.reply(error); // Logs an error if there was one
            }
        )
    
    });
    }
handler.help = ['randomanime']
handler.tags = ['anime']
handler.command = /^(randomanime)$/i
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