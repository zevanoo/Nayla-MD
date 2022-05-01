let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "Hayo liat - liat g beli, beli dunk itu tekan aj CLICK HERE nya",
                        "description": "Klik aja CLICK HERE nya ya",
                        "buttonText": "CLICK HERE",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                            	"rows": [{
                                     "title": `Premium`,
                                     "description": "\nUntuk mendapat fitur - fitur exlusive",
                                     "rowId": `.premium`
                                  }, {
                                     "title": "Sewa",
                                     "description": "\nJoin Group dengan cara sewa bot ini",
                                     "rowId": `.sewa`
                                   }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['beli']
handler.register = true
module.exports = handler
