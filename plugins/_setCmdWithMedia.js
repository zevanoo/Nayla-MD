let handler = async (m, { text }) => {
    if (!m.quoted) throw 'Reply Pesan!'
    if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
    if (!text) throw `Tidak ada teks`
    global.db.data.sticker[m.quoted.fileSha256.toString('hex')] = {
        text,
        mentionedJid: m.mentionedJid,
    }
    m.reply(`Done!`)
}

    handler.help = ['cmd'].map(v => 'set' + v + ' <text>'),
	handler.tags = ['database', 'owner'],
	handler.command = /^setcmd$/i
    
	handler.owner = true

module.exports = handler