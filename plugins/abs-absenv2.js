let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "Silahkan Klik Menu Dibawah Untuk Absen",
                        "description": "©AbsenGroup",
                        "buttonText": "Menu disini",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                        "title": `ABSEN`,
                                        "rowId": ".absen1"
                                    },{
                                        "title": "CEK ABSEN",
                                        "rowId": ".cekabsen"                 
                                    },{
                                        "title": "HAPUS ABSEN",
                                        "rowId": ".hapusabsen"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.command = ['absen']
handler.register = true
module.exports = handler