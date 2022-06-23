let handler = async m => m.reply(`
┏━━°❀❬ *LIST VN * ❭❀°━━┓
┃• anjay
┃• ara
┃• bila
┃• baby
┃• bambam
┃• booma
┃• bernyanyi
┃• cidro
┃• enak
┃• iri
┃• masha
┃• padepap
┃• papale
┃• pota
┃• kiminoto
┃• kokoro
┃• siul
┃• tapi
┃• umbrella
┃• wes
┗━━━━━━━━━━━━━━━━

Contoh : *!getvn papale*
`.trim()) // List Voice Notes
handler.help = ['listvn']
handler.tags = ['sound','music']
handler.command = /^(listvn)$/i

module.exports = handler

// 31caf10e4a64e86c1a92bcba
