//=============『 Gosah diubah 』================== //
let fs = require('fs')
//=============『 Utama 』================== //
global.Owner = {
// use the phone number with the country code, for example Indonesia "62" America "1" etc
"6289520306297": { // 6289520306297
name: "Zevano",
isReport: true, // if true this number will send if user use command /report or /join
isCreator: true, // if true this number will send if user use command /owner or /creator
isDev: true
}
}
global.prems = []
global.mods = ["6283897390164"] // Want some help?

//=============『 Info Owner 』================== //
global.instagram = "https://instagram.com/zevoffc"
global.github = "https://github.com/zevoffc"
global.donasi = {
dana: "gada",
pulsa: "+62 895 2030 6297",
gopay: "gada",
saweria: "https://saweria.co/Scaff"
}

//=============『 Info Bot 』================== //
global.linkGC = ["https://chat.whatsapp.com/IS1V1LKUy16Fjd08uPtTdP"]
global.botname = "NAYLA-BOTZ"
global.sessionName = "nayla" // The Session name behind the .json example is nayla.json

//=============『 Tampilan & Lainnya 』================== //
global.ext = {
title: "Sabar sedang di proses",
body: "NayLa-B0TZ",
thum: "https://telegra.ph/file/5859353a380d9b67be198.jpg"
}
global.wm = '© nayla'
global.mess = {
wm: global.wm,
sukses: "Done Ya kawand",
wait: "*❏ WAIT TUNGGU*",
error: "*❏ ERROR CUK*",
    msg: {
owner: "Maaf fitur ini hanya bisa digunakan oleh *Owner*",
mods: "Maaf fitur ini hanya bisa digunakan oleh *Moderator*",
premium: "Maaf fitur ini hanya bisa digunakan oleh user *Premium*",
group: "Maaf fitur ini hanya bisa digunakan di *Group*",
private: "Maaf fitur ini hanya bisa digunakan di *Private*",
admin: "Maaf fitur ini hanya bisa digunakan *Admin*",
botAdmin: "Jadikan bot sebagai *Admin* untuk menggunakan fitur ini",
unreg: "── 「 NOT REGISTERED 」 ──\nSilakan Register Terlebih Dahulu Sebelum Menggunakan Bot. Dengan cara klik tombol dibawah untuk melakukan register",
},
    announce: {
wel: "Hai @user\n◪ Welcome in group:\n├─ @subject\n├─ Intro dulu\n├─ ❏ Nama: \n├─ ❏ Umur: \n├─ ❏ Asal kota: \n├─ ❏ Kelas: \n├─ ❏ Jenis kelamin:",
bye: "Selamat Tinggal @user!\nTerimakasih Telah Bergabung Di Grup\n\nKalo Balik Jangan Lupa Bawa Gorengan Buat Anggota Disini",
promote: "「 PROMOTE - DETECTED 」\nTarget : @user\nStatus : Member -> Admin\nSELAMAT KAMU JADI ADMIN",
demote: "「 DEMOTE - DETECTED 」\nTarget : @user\nStatus : Admin -> Member\nYAHAHA KASIAN KENA DEMOTE"
}
}
global.packname = "NayLa-B0TZ"
global.author = "Zevano"
global.mesreport = 50
global.expc = 15


//=============『 Adventure 』================== //
global.adven = {
	limit: 100,
	tigame: 100,
	money: 100000
}
global.multiplier = 36 // The higher, The harder levelup

//=============『 Apikey 』================== //
global.APIs = { // API Prefix
// name: "https://website"
nrtm: "https://nurutomo.herokuapp.com",
xteam: "https://api.xteam.xyz",
nzcha: "http://nzcha-apii.herokuapp.com",
bg: "http://bochil.ddns.net",
fdci: "https://api.fdci.se",
dzx: "https://api.dhamzxploit.my.id",
bsbt: "https://bsbt-api-rest.herokuapp.com",
zahir: "https://zahirr-web.herokuapp.com",
zeks: "https://api.zeks.xyz",
hardianto: "https://hardianto-chan.herokuapp.com",
pencarikode: "https://pencarikode.xyz", 
LeysCoder: "https://leyscoders-api.herokuapp.com"
}
global.APIKeys = { // Apikey Here
// "https://website": "apikey"
"https://api.xteam.xyz": "HIRO",
"https://zahirr-web.herokuapp.com": "zahirgans",
"https://bsbt-api-rest.herokuapp.com": "benniismael",
"https://api.zeks.xyz": "apivinz",
"https://hardianto-chan.herokuapp.com": "hardianto",
"https://pencarikode.xyz": "pais", 
"https://leyscoders-api.herokuapp.com": "MIMINGANZ" 
}

//=============『 Jangan Di Ubah 』================== //
global.botwm = global.wm
let chalk = require("chalk")
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyanBright("Update config.js"))
delete require.cache[file]
require(file)
})
