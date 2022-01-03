let handler = async(m, { conn, text, usedPrefix }) => {

  if (!text) throw 'Masukan Nama Grupnya'

  let bot = `${conn.user.jid.split("@s.whatsapp.net")[0]}` + `@s.whatsapp.net`
  let user = `${m.sender.split("@s.whatsapp.net")[0]}` + `@s.whatsapp.net`
  let nameGC = await conn.getName(m.sender)
  let group = await conn.groupCreate(text, [bot, user])
  let linkgc = await conn.groupInviteCode(group.gid)

 await m.reply(`Berhasil membuat Grup dengan nama *${nameGC}*!\n\nLink Group :\nhttps://chat.whatsapp.com/${linkgc}`)
  await conn.reply(group.gid, `Halo Grup *${conn.getName(group.gid)}!*\n\nGrup Ini telah dibuat oleh *${name}*`)
}
handler.help = ['create <nama|nomor>']
handler.tags = ['tools']
handler.command = /^(create)$/i

handler.limit = true

module.exports = handler
