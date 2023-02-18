let handler = m => m

handler.all = async function (m) {
    this.spam = this.spam ? this.spam : {}
    if (!(m.sender in this.spam)) {
        let spaming = {
        jid: await m.sender, 
        spam: 0,
        lastspam: 0
            
        }
        this.spam[spaming.jid] = spaming
    } else try {
        this.spam[m.sender].spam += 1
        if (new Date - this.spam[m.sender].lastspam > 4000) {
            if (this.spam[m.sender].spam > 20) {
                this.spam[m.sender].spam = 0
                this.spam[m.sender].lastspam = new Date * 1
                await this.blockUser(m.sender, 'add')
                m.reply('*Maaf Kamu Akan Diblokir*')
            } else {
                this.spam[m.sender].spam = 0
                this.spam[m.sender].lastspam = new Date * 1
            }
        }
    } catch (e) {
        console.log(e)
    }
}
handler.private = true

module.exports = handler
