let axios = require("axios");
let handler = async(m, { conn, text }) => {
response = args.join(' ')
  if (!args[0]) throw 'User Name'
  m.reply(wait)
	axios.get(`https://leyscoders-api.herokuapp.com/api/igstalk?user=${response}&apikey=demo`).then ((res) => {
	 	let hasil = `Nama :${res.data.result.fullName}\nUser Name :${res.data.result.userame}\nBio :{res.data.result.biography}\nFollower :${res.data.result.follower}\nFollowing :${res.data.result.following}\nPostingan :${res.data.result.postsCount}`               

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['internet']
handler.command = /^(igstalk)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler