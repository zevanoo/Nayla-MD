let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "Khusus Setting Group, Admin Group Only",
                        "description": "©GroupSetting",
                        "buttonText": "Menu disini",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                        "title": `BUKA GROUP`,
                                        "rowId": ".group open"
                                    },{
                                        "title": "TUTUP GROUP",
                                        "rowId": ".group close"                 
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.command = ['groupset']
module.exports = handler
