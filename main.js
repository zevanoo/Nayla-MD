require('./config')
const {
  useMultiFileAuthState,
  makeInMemoryStore,
  fetchLatestBaileysVersion,
  DisconnectReason
} = require('@adiwajshing/baileys')
const { Boom } = require('@hapi/boom')
const WebSocket = require('ws')
const path = require('path')
const pino = require('pino')
//const { prettifier } = require('pino-pretty')
const fs = require('fs')
const yargs = require('yargs/yargs')
const cp = require('child_process')
const _ = require('lodash')
const check = require('syntax-error')
const P = require('pino')
const os = require('os')
const { y2mateA, y2mateV } = require('./system/lib/y2mate')
const moment = require("moment-timezone")
const time = moment.tz('Asia/Jakarta').format("HH:mm:ss")
const { color } = require('./system/lib/color')
let simple = require('./system/lib/simple')
const { toBuffer } = require('qrcode')
var low
try {
  low = require('lowdb')
} catch {
  low = require('./system/lib/lowdb')
}
const { Low, JSONFile } = low
const mongoDB = require('./system/lib/mongoDB')
const express = require('express')
let app = express()
const {
    createServer
} = require('http')
let server = createServer(app)
let _qr = 'invalid'
let PORT = 3000 || 8000 || 8080

const startNayla = async () => {
	
	const store = makeInMemoryStore({
        logger: pino().child({
            level: 'silent',
            stream: 'store'
        })
    })
global.owner = Object.keys(global.Owner)
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
// global.Fn = function functionCallBack(fn, ...args) { return fn.call(global.conn, ...args) }
global.timestamp = {
  start: new Date
}

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.prefix = new RegExp('^[' + (opts['prefix'] || 'â€ŽxzXZ/i!#$%+Â£Â¢â‚¬Â¥^Â°=Â¶âˆ†Ã—Ã·Ï€âˆšâœ“Â©Â®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')


global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/i.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`)
)

global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
  users: {},
  chats: {},
  stats: {},
  msgs: {},
  sticker: {},
  settings: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

global.authFile = './session'
global.isInit = !fs.existsSync(authFile)
const { 
        state, 
        saveCreds 
     } = await useMultiFileAuthState(global.authFile)
const {
        version,
        isLatest
    } = await fetchLatestBaileysVersion()


const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      levelFirst: true, 
      ignore: 'hostname', 
      translateTime: true
    }
  }
}).child({ class: 'baileys'})

const connectionOptions = ({
  version,
        logger: pino({
            level: 'silent'
        }),
        printQRInTerminal: true,
        patchMessageBeforeSending: (message) => {
            const requiresPatch = !!(
                message.buttonsMessage ||
                message.templateMessage ||
                message.listMessage
            );
            if (requiresPatch) {
                message = {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadataVersion: 2,
                                deviceListMetadata: {},
                            },
                            ...message,
                        },
                    },
                };
            }
            return message;
        },
        browser: ['Nayla Multi Device', 'Safari', '1.0.0'],
        auth: state,
        qrTimeout: 15000
    })

global.conn = simple.makeWASocket(connectionOptions)
conn.isInit = false

store.bind(conn.ev)

if (!opts['test']) {
  setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 60 * 1000)
}
if (opts['big-qr']) conn.on('qr', qr => generate(qr, { small: false }))

let isInit = true, handler = require('./system/handler')
global.reloadHandler = function (restatConn) {
  let Handler = require('./system/handler')
  if (Object.keys(Handler || {}).length) handler = Handler
  if (restatConn) {
    try { global.conn.ws.close() } catch { }
    global.conn = {
      ...global.conn, ...simple.makeWASocket(connectionOptions)
    }
  }

  conn.welcome = mess.announce.wel
  conn.bye = mess.announce.bye
  conn.spromote = mess.announce.promote
  conn.sdemote = mess.announce.demote
  conn.handler = handler.handler
  conn.onParticipantsUpdate = handler.participantsUpdate
  conn.onDelete = handler.delete
  conn.onCall = handler.onCall
  
  conn.ev.on('messages.upsert', conn.handler)
  conn.ev.on('call', conn.onCall)
  conn.ev.on('group-participants.update', conn.onParticipantsUpdate)
  conn.ev.on('message.delete', conn.onDelete)
  
  conn.ev.process(
        async (events) => {
            if (events['presence.update']) {
                await conn.sendPresenceUpdate('available')
            }
            if (events['creds.update']) {
                await saveCreds()
            }
        }
    )
  
  conn.ev.on('connection.update', async (update) => {
        const {
            connection,
            lastDisconnect,
            qr
        } = update
        if (qr) {
            app.use(async (req, res) => {
                res.setHeader('content-type', 'image/png')
                res.end(await toBuffer(qr))
            })
            app.use(express.static(path.join(__dirname, 'views')))
            server.listen(PORT, () => {
                console.log('App listened on port', PORT)
            })
        }
        if (connection === 'close') {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) {
                conn.logger.error(`Bad Session File, Please Delete Session and Scan Again`);
                conn.logout();
            } else if (reason === DisconnectReason.connectionClosed) {
                conn.logger.warn("Connection closed, reconnecting....");
                startNayla();
            } else if (reason === DisconnectReason.connectionLost) {
                conn.logger.warn("Connection Lost from Server, reconnecting...");
                startNayla();
            } else if (reason === DisconnectReason.connectionReplaced) {
                conn.logger.error("Connection Replaced, Another New Session Opened, Please Close Current Session First");
                conn.logout();
            } else if (reason === DisconnectReason.loggedOut) {
                conn.logger.error(`Device Logged Out, Please Scan Again And Run.`);
                conn.logout();
            } else if (reason === DisconnectReason.restartRequired) {
                conn.logger.warn("Restart Required, Restarting...");
                startNayla();
            } else if (reason === DisconnectReason.timedOut) {
                conn.logger.error("Naylaection TimedOut, Reconnecting...");
                startNayla();
            } else conn.end(`Unknown DisconnectReason: ${reason}|${connection}`)
        }
        if (update.connection == "open" || update.receivedPendingNotifications == "true") {
            console.log('Connect, welcome owner!')
            console.log(`Connected to = ` + JSON.stringify(conn.user, null, 2))
        }
    })
  isInit = false
  return true
}

let pluginFolder = path.join(__dirname, 'plugins')
let pluginFilter = filename => /\.js$/.test(filename)
global.plugins = {}
for (let filename of fs.readdirSync(pluginFolder).filter(pluginFilter)) {
  try {
    global.plugins[filename] = require(path.join(pluginFolder, filename))
  } catch {
  	let dir = path.join(pluginFolder, filename)
    let err = check(fs.readFileSync(dir), filename)
    conn.logger.error(`error plugins file while loading '${filename}'`)
    console.error(err)
    delete global.plugins[filename]
  }
}

console.log(Object.keys(global.plugins))
global.reload = (_ev, filename) => {
  if (pluginFilter(filename)) {
  	let dir = path.join(pluginFolder, filename)
    if (dir in require.cache) {
      delete require.cache[dir]
      if (fs.existsSync(dir)) conn.logger.info(`re - require plugin '${filename}'`)
      else {
        conn.logger.warn(`deleted plugin '${filename}'`)
        return delete global.plugins[filename]
      }
    } else conn.logger.info(`requiring new plugin '${filename}'`)
    let err = check(fs.readFileSync(dir), filename)
    if (err) { 
   conn.logger.error(`error while loading '${filename}'`)
   console.error(err)
   }
    else try {
      global.plugins[filename] = require(dir)
    } catch (e) {
      conn.logger.error(`error require plugin '${filename}\n${e}'`)
    } finally {
      global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)))
    }
  }
}
Object.freeze(global.reload)
fs.watch(path.join(__dirname, 'plugins'), global.reload)
global.reloadHandler()

// Quick Test
async function _quickTest() {
  let test = await Promise.all([
    cp.spawn('ffmpeg'),
    cp.spawn('ffprobe'),
    cp.spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
    cp.spawn('convert'),
    cp.spawn('magick'),
    cp.spawn('gm'),
    cp.spawn('find', ['--version'])
  ].map(p => {
    return Promise.race([
      new Promise(resolve => {
        p.on('close', code => {
          resolve(code !== 127)
        })
      }),
      new Promise(resolve => {
        p.on('error', _ => resolve(false))
      })
    ])
  }))
  let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test
  console.log(test)
  let s = global.support = {
    ffmpeg,
    ffprobe,
    ffmpegWebp,
    convert,
    magick,
    gm,
    find
  }
  // require('./system/lib/sticker').support = s
  Object.freeze(global.support)

  if (!s.ffmpeg) conn.logger.warn('Please install ffmpeg for sending videos (pkg install ffmpeg)')
  if (s.ffmpeg && !s.ffmpegWebp) conn.logger.warn('Stickers may not animated without libwebp on ffmpeg (--enable-ibwebp while compiling ffmpeg)')
  if (!s.convert && !s.magick && !s.gm) conn.logger.warn('Stickers may not work without imagemagick if libwebp on ffmpeg doesnt isntalled (pkg install imagemagick)')
}

_quickTest()
  .then(() => conn.logger.info('Quick Test Done'))
  .catch(console.error)
}
startNayla()
