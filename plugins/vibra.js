let { MessageType, Presence, mimetype } = require('@adiwajshing/baileys')
let ffmpeg = require('fluent-ffmpeg');
let fetch = require('node-fetch');
let ftype = require('file-type');
let fs = require('fs');
let { exec } = require('child_process');

let handler = async(m, { conn, text, args }) => {
if (!text) throw 'masukan angka!!, Contoh #vibration 10'
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
          if (!m.quoted) return conn.reply(m.chat, 'Tag Audionya!', m)
          let type = Object.keys(m.message)[0]
          let content = JSON.stringify(m.message)
          let isMedia = (type === 'imageMessage' || type === 'videoMessage')
          let isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
                  if (!isQuotedAudio) return m.reply('Itu Audio?')
                                let encmedia = JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                let media = await conn.downloadAndSaveMediaMessage(encmedia)
                                  let ran = getRandom('.mp3')
                                    exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${text}" ${ran}`, (err, stderr, stdout) => {
                                      fs.unlinkSync(media)
                                      if (err) return m.reply(error)
                                      let tupai = fs.readFileSync(ran)
                                      conn.sendFile(m.chat, tupai, 'tupai.mp3', '', m, false, { ptt: true })
                                      fs.unlinkSync(ran)
           })
}
handler.help = ['vibration (reply audio)']
handler.tags = ['convert']
handler.command = /^(vibration)$/i
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

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`
}