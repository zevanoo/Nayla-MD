let { getBuffer, succes } = require('../lib/functions.js')
let uploadImage = require('../lib/uploadImage')
let imgbb = require('imgbb-uploader')
let { MessageType, Presence, MimeType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let ftype = require('file-type')
let fs = require('fs')
let { exec } = require('child_process')

let handler = async(m, { conn, text, args, usedPrefix }) => {
let caption = `
Nihh Cuyy
`.trim()

  if (!text) return conn.reply(m.chat, 'Teksnya mana?', m)

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
  let pp = await (await fetch('https://i.ibb.co/wpWpVNd/avatar-contact.png')).buffer()

 try {
    pp = await (await fetch(await conn.getProfilePicture(m.sender))).buffer()

} catch (e) {

 } finally {
     let foto = await uploadImage(pp)
     let hasil = await getBuffer('http://api.lolhuman.xyz/api/welcomeimage?apikey=onichan&img=' + foto + '&text=' + text)

         conn.sendFile(m.chat, hasil, 'banner.jpg', mess.sukses, m)
     }
}
handler.help = ['banner <text>','logo <text>']
handler.tags = ['sticker']
handler.command = /^(banner|logo)$/i
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
