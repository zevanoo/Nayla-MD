let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {

                    "listMessage":  {

                        "title": "Berikut ini adalah Daftar menu\n" + global.botname + " Sebelum menggunakan bot",

                        "description": "lebih baik membaca rules terlebih dahulu\n",
                        "footerText": mess.wm,
                        "buttonText": "PILIH MENU",

                        "listType": "SINGLE_SELECT",

                        "sections": [

                            {

                             "rows": [

                                    {

                                        "title": `Status Bot`,

                                        "description": "\nInformasi dan Status bot",

                                        "rowId": ".status"

                                        

                                        

                                      

                                    },{

                                        "title": "Rules",

                                        "description": "\nUser yang Pintar pasti mematuhi",

                                        "rowId": ".rules"

                                          

                                          

                                                                                                                                            

                                    },{

                                        "title": "Group Official",

                                        "description": "\nOfficial gc Dari " + global.botname,

                                        "rowId": ".gcbot"







                                   }

                                ],

                                "title": "──────────────────────〔 INFORMATION 〕──────────────────────"

                            }, {

                             "rows": [

                                    {

                                        "title": `Allmenu`,

                                        "description": "\nSemua menu dalam 1 chat",

                                        "rowId": ".allmenu"

                                        

                                        

                                      

                                    },{

                                        "title": "AbsenMenu",

                                        "description": "\nUntuk meng absen orang-orang yang ada di gc",

                                        "rowId": ".absenmenu"

                                          

                                          

                                                                                                                                            

                                    },{

                                        "title": "XpMenu",

                                        "description": "\nCek Level dan Limit",

                                        "rowId": ".xpmenu"

                                                  

                                                  

                                                                                                              

                                    },{

                                    	"title": "AdvenMenu",

                                        "description": "\nBerpetualang bersama bot",

                                        "rowId": ".advenmenu"

                                                                                          

                                                                          

                                   

                                    },{

                                    	"title": "HadiahMenu",

                                        "description": "\nHadiah untuk seseorang",

                                        "rowId": ".hadiahmenu"                                        

                                      

                                      

                                                                            

                                                                    

                                    },{

                                        "title": "DewasaMenu",

                                        "description": "\nBuat yg ..... bisa di coba",

                                        "rowId": ".dewasamenu"

                                                                                             

                       

                                                                    

                                    },{

                                        "title": "DatabaseMenu",

                                        "description": "\nMenu Data",

                                        "rowId": ".databasemenu"

                                        

                                        

                                        

                                    },{

                                        "title": "GroupMenu",

                                        "description": "\nMenu untuk group setting",

                                        "rowId": ".groupmenu"       

                                     

                                                             

                                                             

                                    },{

                                        "title": "AnimeMenu",

                                        "description": "\nWibu pasti suka",

                                        "rowId": ".animemenu"                 

                                        

                                       

                                       

                                    },{

                                    	"title": "RandomMenu",

                                        "description": "\nMenu G jelas klo mau di pake gpp",

                                        "rowId": ".randommenu"                            

     

     

     

                                    },{

                                        "title": "CreatorMenu",

                                        "description": "\nBerkreasi dengan menggunakan bot",

                                        "rowId": ".creatormenu"

                                                                             

       

     

                                    },{

                                        "title": "FunnMenu",

                                        "description": "\nMenu Candaan",

                                        "rowId": ".funnmenu"      

                                                                                     

     

     

                                    },{

                                        "title": "ImageMenu",

                                        "description": "\nMengubah-ubah gambar menggunakan bot",

                                        "rowId": ".imagemenu"

                                             

                                             

     

                                    },{

                                        "title": "VideoMenu",

                                        "description": "\nMenu Video",

                                        "rowId": ".vidiomenu"

                                  

                                              

                                              

                                    },{        

                                        "title": "SoundMenu",

                                        "description": "\nMenu Suara ....",

                                        "rowId": ".hadiahmenu"

                                                                         

                                                                         

                                               

                                    },{             

                                        "title": "PrimbonMenu",

                                        "description": "\nTer .....",

                                        "rowId": ".primbonmenu"



                                                                              

                                          

                                    },{

                                        "title": "EducationMenu",

                                        "description": "\nSemua kunci jawaban soal dan penjelasan",

                                        "rowId": ".educationmenu" 

                                                                                                                     

                                                             

                                                             

                                    },{

                                        "title": "MusicMenu",

                                        "description": "\nBuat kalian yg suka dengerin musik",

                                        "rowId": ".musicmenu"

                                    

                                                                                    

                                                               

                                    },{

                                        "title": "SimiMenu",

                                        "description": "\nSimisimi Hehe",

                                        "rowId": ".simimenu"
                                        
                                    

                                                                                    

                                                               

                                    },{

                                        "title": "VoteMenu",

                                        "description": "\nVotings menggunakan bot",

                                        "rowId": ".votemenu"

                                                                  

                

                                                                                                                                                        

                                    },{

                                        "title": "KerangMenu",

                                        "description": "\nKerang ajaib seperti spongebob",

                                        "rowId": ".kerangmenu"

                                                                                                                          

                                                                             

                                                                           

                                    },{

                                        "title": "DownloaderMenu",

                                        "description": "\nYg suka download bisa di coba",

                                        "rowId": ".downloadermenu"

                                        

                                                                                                                          

                                                                                                                                                        

                                    },{

                                        "title": "NewsMenu",

                                        "description": "\nMenu berita terkini",

                                        "rowId": ".newsmenu"

                                        

                                                                                                                          

                                                                                                                                                        

                                    },{

                                        "title": "SpammerMenu",

                                        "description": "\nYg bisa pakai hanya prems user",

                                        "rowId": ".spammermenu"

                                                                                

                                                                                                                          

                                                                                                                                                        

                                    },{

                                        "title": "ToolsMenu",

                                        "description": "\nBeberapa alat yang bisa digunakan",

                                        "rowId": ".toolsmenu"

                                                                                

                                        

                                    

                                    },{

                                        "title": "JadibotMenu",

                                        "description": "\nJadibot only prems",

                                        "rowId": ".ownermenu"

                                          

                                                                                                                                                        

                                    

                                    },{

                                        "title": "PremiumMenu",

                                        "description": "\nPremium List",

                                        "rowId": ".premiummenu"

                                     

                                     

                                     

                                   },{

                                        "title": "OwnerMenu",

                                        "description": "\nMenu Khusus Owner",

                                        "rowId": ".ownermenu"

                                        

                                        

                                        

                                    },{

                                        "title": "InfoMenu",

                                        "description": "\nMengetahui info dari " + global.botname,

                                        "rowId": ".infomenu"

                                    }

                                ],

                                "title": "──────────────────────〔 SUB-MENU 〕────────────────────────"

                            }, {

                             "rows": [

                                    {

                                        "title": `Owner`,

                                        "description": "\nPemilik " + global.botname,

                                        "rowId": ".owner"

                                        

                                        

                                      

                                    },{

                                        "title": "Donasi",

                                        "description": "\nDonasi agar bot selalu online",

                                        "rowId": ".donasi"

                                          

                                          

                                                                                                                                            

                                    },{

                                        "title": "Premium - Sewa",

                                        "description": "\nMelihat Daftar harga prem dan sewa",

                                        "rowId": ".beli"







                                   }

                                ],

                                "title": "──────────────────────〔 PENUTUP 〕─────────────────────────"

                            }

          ], "contextInfo": {

            "stanzaId": m.key.id,

            "participant": m.sender,

            "quotedMessage": m.message

          }

        }

      }, {}), { waitForAck: true })
handler.command = ['menu', 'help', '?']
handler.register = true
module.exports = handler