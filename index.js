const { spawn } = require('child_process')
const path = require('path')
const fs = require('fs')
const CFonts = require('cfonts')
const { clearF } = require('./system/lib/function')
const chalk = require('chalk')
const Readline = require('readline')
const yargs = require('yargs/yargs')
const rl = Readline.createInterface(process.stdin, process.stdout)

CFonts.say('NayLa B0TZ', {
  font: 'simple',
  align: 'left',
  colors: ['cyan']
})

function start() {
	let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
	try {
    console.log(chalk.rgb(12, 235, 23)('Starting autoclear...'))
    clearF("./system/tmp/")
    console.log(chalk.rgb(12, 216, 235)('Clearing folder in path ./system/tmp/ has been completed'))
    } catch {
	console.log(chalk.rgb(255, 38, 0)("can't clear file!"))
    }
	let p = spawn(process.argv[0], args, { stdio: ['inherit', 'inherit', 'inherit', 'ipc'] })
	.on('message', data => {
		if (data == 'reset') {
			console.log('Restarting Bot...')
			p.kill()
			start()
			delete p
		}
	})
	.on('exit', code => {
		console.error('Exited with code:', code)
		if (code == "." || code == 1 || code == 0) start()
	})
}
start()

let sessionPath = path.join(__dirname, 'session')
let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
  if (opts['clearsession']) {
fs.readdir(sessionPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory session because ' + err);
  }
  files.forEach(file => {
    if (file !== 'creds.json') {
      fs.unlink(path.join(sessionPath, file), err => {
        if (err) {
          console.log('Unable to delete file: ' + err);
        } else {
          console.log('All file has been deleted except creds.json successfully!');
        }
      });
    }
  });
});
}