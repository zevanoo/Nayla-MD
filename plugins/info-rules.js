let handler = m => m.reply(`

Rules
# Semua yang dikatakan owner adalah mutlak

1) Dilarang Call/Vid Call bot secara langsung jika melakukan maka akan dibanned
2) Dilarang spamchat/command/button/clickbutton apalagi spam RPG ga ngotak
3) Dilarang mengirim Virus/Virtext
4) Dilarang send request/report main-main
5) Kami tidak akan bertanggung jawab atas segala sesuatu yang user lakukan terhadap bot
6) Bot akan menyimpan informasi di database nya
7) Kami tidak pernah menbocorkan data pribadi user
8) Dilarang copas design bot kami
9) Rules bot dpt berubah sewaktu-waktu demi keamanan dan kenyamanan
`.trim())

handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules)$/i

module.exports = handler