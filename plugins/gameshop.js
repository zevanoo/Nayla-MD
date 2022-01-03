let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
_Harga Diamonds Free Fire_
			*VIGEN SHOP*
			
⦿ 70 Diamonds = IDR 10.000

⦿ 100 Diamonds = IDR 15.000

⦿ 140 Diamonds = IDR 20.000

⦿ 210 Diamonds = IDR 30.000 

⦿ 355 Diamonds = IDR 50.000

⦿ 500 Diamonds = IDR 70.000

⦿ 720 Diamonds = IDR 100.000

⦿ 1000 Diamonds = IDR 140.000

⦿ 1080 Diamonds = IDR 150.000

⦿ 1440 Diamonds = IDR 200.000

⦿ 2005 Diamonds = IDR 270.000

⦿ 4005 Diamonds = IDR 535.000

⦿ M.MINGGUAN = IDR 30.000
⦿ M.BULANAN = IDR 118.000

Contoh Pembelian
355DM 8251936106

Cara Pembelian
Ketik *NEXT*

Note : Pastikan ID Mu Benar Karena 
Diamond Tidak Masuk Bukan 
Tanggung Jawab Kami

▌│█║▌║▌║║▌║▌║█│▌▌│█║▌║▌║
▌│█║▌║▌║║▌║▌║█│▌▌│█║▌║▌║
             T E R P E R C A Y A
                	       *©Ardi*
             
             ᴄᴏɴᴛᴀᴄᴛ ᴘᴇʀsᴏɴ
         wa.me/6288217066706
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 VIGEN SHOP TERPERCAYA 🔥*', 'status@broadcast')
}
handler.customPrefix = /^(LIST TOP UP)$/i
handler.command = new RegExp

module.exports = handler
