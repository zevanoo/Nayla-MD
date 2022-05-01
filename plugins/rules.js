let handler = async m => m.reply(`
❀━━━━━[ Rules ]━━━━━❀
📘 Semua yang di katakan owner adalah mutlak

📃¹ Dilarang Call/Vid Call Bot langsung di banned jika tidak sengaja hubungi owner
📃² Dilarang spam chat/command/button/clickbutton apalagi spam RPG g ngotak, jika ada yg melakukan nya akan di warn oleh owner
📃³ Dilarang mengirim virus/virtex dan semacam nya akan langsung di warn
📃⁴ Dilarang Send request/report main"
📃⁵ Kami Tidak bertanggung jawab atas segala sesuatu yang user lakukan terhadap bot
📃⁶ Bot akan menyimpan informasi di database nya
📃⁷ Kami tidak pernah membocorkan data pribadi para user
📃⁸ Dilarang menyalin desain pada bot kami (Mikir sendiri)
📃⁹ Rules bot dapat berubah sewaktu-waktu demi keamanan dan kenyamanan
❀━━━━━━━━━━━━━━━❀
`.trim()) // Tambah sendiri kalo mau
handler.help = ['rules'] 
handler.tags = ['info'] 
handler.command = /^(rules)$/i

module.exports = handler