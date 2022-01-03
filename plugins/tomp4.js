const cheerio = require('cheerio');
const FormData = require('form-data')
const { default: Axios } = require('axios');
const { exec } = require('child_process');
const fs = require('fs');

function webp2gifFile(path) {
     return new Promise((resolve, reject) => {
          const bodyForm = new FormData()
          bodyForm.append('new-image-url', '')
          bodyForm.append('new-image', fs.createReadStream(path))
          Axios({
               method: 'post',
               url: 'https://s6.ezgif.com/webp-to-mp4',
               data: bodyForm,
               headers: {
                    'Content-Type': `multipart/form-data; boundary=${bodyForm._boundary}`
               }
          }).then(({ data }) => {
               const bodyFormThen = new FormData()
               const $ = cheerio.load(data)
               const file = $('input[name="file"]').attr('value')
               const token = $('input[name="token"]').attr('value')
               const convert = $('input[name="file"]').attr('value')
               const gotdata = {
                    file: file,
                    token: token,
                    convert: convert
               }
               bodyFormThen.append('file', gotdata.file)
               bodyFormThen.append('token', gotdata.token)
               bodyFormThen.append('convert', gotdata.convert)
               Axios({
                    method: 'post',
                    url: 'https://ezgif.com/webp-to-mp4/' + gotdata.file,
                    data: bodyFormThen,
                    headers: {
                         'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
                    }
               }).then(({ data }) => {
                    const $ = cheerio.load(data)
                    const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
                    resolve({
                         status: true,
                         message: "Created By MRHRTZ",
                         result: result
                    })
               }).catch(reject)
          }).catch(reject)
     })
}
let handler = async (m, { conn, text, command}) => {
if (!m.quoted) throw 'Reply Stickernya um!'
let q = m.quoted
let mime = q.mtype
if (/sticker/.test(mime)) {
if (!m.quoted.isAnimated) throw 'Reply Sticker Yang Berbentuk Gif!!'
m.reply('Please Wait.....')
let image = await conn.downloadAndSaveMediaMessage(await m.getQuotedObj())
webp2gifFile('undefined.webp')
  .then(async buffer => {
command == 'togif' ? conn.sendMessage(m.chat, await require('node-fetch')(buffer.result).then(n => n.buffer()), 'videoMessage', { mimetype: 'video/gif', quoted: m}) : conn.sendMessage(m.chat, await require('node-fetch')(buffer.result).then(n => n.buffer()), 'videoMessage', { quoted: m})
  }) 
  } else throw 'Reply Stikernya um!'
}
handler.help = ['togif']
handler.tags = ['convert']
handler.command = /^togif|tovideo$/i
handler.limit = true
handler.owner = false
handler.mods = false
handler.premium = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler