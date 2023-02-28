console.log('Starting......')
let cluster = require('cluster')
let path = require('path')
let fs = require('fs')
let { spawn } = require('child_process')
const { color } = require('./system/lib/color')
const { tahun, bulan, tanggal, hari, jams, jamNow, menitNow, detikNow, time } = require('./system/lib/timedate')
const CFonts = require('cfonts')
const Readline = require('readline')
const yargs = require('yargs/yargs')
const rl = Readline.createInterface(process.stdin, process.stdout)

var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
var tampilWaktu =  "Jam : " + jamNow + " " + menitNow + " " + detikNow;
var tampilHari = "" + jams + " Hari";

console.log(color(tampilTanggal, "pink"));
console.log(color(tampilWaktu, "pink"));
console.log(color(tampilHari, "pink"));

CFonts.say('NayLa B0TZ', {
  font: 'simple',
  align: 'left',
  colors: ['cyan']
})

var isRunning = false
/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
  if (isRunning) return
  isRunning = true
  let args = [path.join(__dirname, file), ...process.argv.slice(2)]
/*  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })*/
  cluster.setupMaster({
    exec: path.join(__dirname, file),
    args: args.slice(1),
  })
  let p = cluster.fork()
  p.on('message', data => {
    console.log('[RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.process.kill()
        isRunning = false
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', (_, code) => {
    isRunning = false
    console.error('Exited with code:', code)
    if (code === 0) return
    fs.watchFile(args[0], () => {
      fs.unwatchFile(args[0])
      start(file)
    })
  })
  let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
  if (!opts['test'])
    if (!rl.listenerCount()) rl.on('line', line => {
      p.emit('message', line.trim())
    })
  // console.log(p)
}

start('./main')
