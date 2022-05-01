let handler = async (m, { command, usedPrefix, text }) => {
    let which = command.replace(/get/i, '')
    if (!text) throw `Gunakan *${usedPrefix}list${which}* untuk melihat list nya`
    let msgs = global.DATABASE.data.msgs
    if (!text in msgs) throw `'${text}' tidak terdaftar di list pesan`
    delete msgs[text]
    m.reply(`Berhasil menghapus pesan di list pesan dengan nama '${text}'`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'del' + v + ' <text>')
handler.tags = ['database']
handler.command = /^del(vn|msg|video|audio|img|sticker)$/
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.refister = false
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
