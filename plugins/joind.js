let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i



let handler = async (m, { conn, text }) => {

    let [_, code] = text.match(linkRegex) || []

    if (!code) throw 'Link invalid'

    let res = await conn.acceptInvite(code)

    m.reply(`Berhasil Join Grup ${res.gid}`)

}

handler.help = ['autojoin <link gc>']

handler.tags = ['premium']



handler.command = /^autojoin$/i



handler.prems = true



module.exports = handler

