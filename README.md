[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)
<p align="center">
    <img src="https://telegra.ph/file/5859353a380d9b67be198.jpg" width="100%" style="margin-left: auto;margin-right: auto;display: block;">
</p>

</p>
<p align="center">
<a href="#"><img title="NayLa-B0TZ" src="https://img.shields.io/badge/NayLa-B0TZ-green?colorA=%23ff0000&colorB=%23017e40&style=for-the-badge"></a>
</p>
<p align="center">
<a href="https://github.com/zevanoo/Nayla-MD"><img title="Creator" src="https://img.shields.io/badge/Author-Zevano-red.svg?style=for-the-badge&logo=github"></a>
</p>
<p align="center">
<a href="https://github.com/zevanoo/followers"><img title="Followers" src="https://img.shields.io/github/followers/zevanoo ?color=red&style=flat-square"></a>
<a href="https://github.com/zevanoo/Nayla-MD/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/zevanoo/Nayla-MD?color=blue&style=flat-square"></a>
<a href="https://github.com/zevanoo/Nayla-MD/network/members"><img title="Forks" src="https://img.shields.io/github/forks/zevanoo/Nayla-MD?color=red&style=flat-square"></a>
<a href="https://github.com/zevanoo/Nayla-MD/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/zevanoo/Nayla-MD?label=Watchers&color=blue&style=flat-square"></a>
<a href="https://github.com/zevanoo/Nayla-MD"><img title="Open Source" src="https://badges.frapsoft.com/os/v2/open-source.svg?v=103"></a>
<a href="https://github.com/zevanoo/Nayla-MD/"><img title="Size" src="https://img.shields.io/github/repo-size/zevanoo/Nayla-MD?style=flat-square&color=green"></a>
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fzevanoo%2FNayla-MD&count_bg=%2379C83D&title_bg=%23555555&icon=probot.svg&icon_color=%2300FF6D&title=hits&edge_flat=false"/></a>
<a href="https://github.com/zevanoo/Nayla-MD/graphs/commit-activity"><img height="20" src="https://img.shields.io/badge/Maintained%3F-no-green.svg"></a>&nbsp;&nbsp;
</p>



# `Information`

> NayLa-B0TZ adalah bot yang saya buat dan kembangkan sendiri
> Jika kamu menemukan semacam bug, harap untuk dimaklumi hehe

---------

# Bugs and Tester

* Jika kamu menemukan bug jangan lupa buka Issues
* Info Lebih Lanjut, Chat [owner-nayla](https://wa.me/6289520306297)

---------

# Join Group NAYLA UPDATES & NOTIF
[![Grup WhatsApp](https://img.shields.io/badge/WhatsApp%20Group-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://chat.whatsapp.com/IS1V1LKUy16Fjd08uPtTdP) 

---------

# Edit file
* Change information on [this section](https://github.com/zevanoo/Nayla-MD/edit/Baileys/config.js)

---------

# Support Run
| Running | Check |
|--------|--------|
| **TERMUX** |[✔️](https://github.com/termux/termux-app) |
| **HEROKU** |[✔️](https://heroku.com) |
| **RDP** |[✔️](https://github.com/zevanoo) |
| **VPS** |[✔️](https://github.com/zevanoo) |
| **WINDOWS** |[✔️](https://github.com/zevanoo) |

---------

# Installations

## `For Termux User`
1. Type mentioned below given commands one by one in Termux.
```sh
$ pkg update && pkg upgrade
$ apt install git
$ apt install nodejs
$ apt install ffmpeg
$ apt install imagemagick
$ apt install yarn
$ git clone https://github.com/zevanoo/Nayla-MD
$ cd Nayla-MD
$ yarn
```
2. Wait for bot starting...
3. Scan QR code from 2nd device. (Go to whatsapp > Linked Devices > Click on link device)
4. Now your bot is ready to use.


## `For Heroku User`

### Deploy to Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/zevanoo/Nayla-MD)

### Heroku Buildpack
| BuildPack | LINK |
|--------|--------|
| **FFMPEG** |[here](https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest) |
| **IMAGEMAGICK** | [here](https://github.com/DuckyTeam/heroku-buildpack-imagemagick) |


## `FOR WINDOWS/VPS/RDP USER`

* Download And Install Git [`Click Here`](https://git-scm.com/downloads)
* Download And Install NodeJS [`Click Here`](https://nodejs.org/en/download)
* Download And Install FFmpeg [`Click Here`](https://ffmpeg.org/download.html) (**Don't Forget Add FFmpeg to PATH enviroment variables**)
* Download And Install ImageMagick [`Click Here`](https://imagemagick.org/script/download.php)

```bash
npm i -g yarn
git clone https://github.com/zevanoo/Nayla-MD
cd Nayla-MD
yarn
```

### Run

```bash
node .
```

---------

# Options for this script

## ```Arguments: node . [--options] [<session name>]```

## `--self`
* Activate self mode (Ignores other)

## `--pconly`
* If that chat not from private bot, bot will ignore

## `--gconly`
* If that chat not from group, bot will ignore

## `--swonly`
* If that chat not from status, bot will ignore

## `--restrict`
* Enables restricted plugins (which can lead your number to be **banned** if used too often)
* Group Administration `add, kick`

## `--autoread`
* If enabled, all incoming messages will be marked as read

## `--nyimak`
* No bot, just print received messages and add users to database

## `--clearsession`
* Clear folder session except creds.json

---------

# FAQ

## `How To Customize Button Message`
```js
conn.sendButton(
      jid, // send to where?
      text, // send text?
      footer, // send footer?
      buffer, // buffer to send (optional), if you want to send button image, location
      button, // send button?, example [['text1', 'id1'], ['text2', 'id2']]
      quoted, // quoted message to send (optional)
      options // options to send
)

// example
conn.sendButton(m.chat, 'Zevano', mess.wm, null, [
        ['text', 'id'], ['teXt', 'Id']
])

// example with image
conn.sendButtonImg(m.chat, 'Zevano', mess.wm, await(await fetch(global.ext.thum)).buffer(), [
        ['text', 'id'], ['teXt', 'Id']
])

// example with location
conn.sendButtonLoc(m.chat, 'Zevano', mess.wm, await(await fetch(global.ext.thum)).buffer(), [
        ['text', 'id'], ['teXt', 'Id']
])
```

## Troubleshooting

### Bad Session
1. apa yang harus dilakukan ketika
<a href="https://github.com/zevanoo"><img src="https://telegra.ph/file/cca8fcbd223bacb684e85.jpg" title="error"></a>
2. ketik cmd berikut
```bash
rm -rf session
```
3. setelah itu bisa scan qr kembali

### ERR_SERVER_ALREADY_LISTENED
1. apa yang harus dilakukan ketika
<a href="https://github.com/zevanoo"><img src="https://telegra.ph/file/c655da7517ab18eeaf8a1.jpg" title="error"></a>
2. maka restart consolemu itu dan start lagi script nya

---------

# Donate
- [Saweria](https://saweria.co/Scaff)

---------

# Thanks To 
* **Allah SWT**

* **Orang Tua**

* **Semua yang selalu mendukung**


### Special Thanks to

[![Zevano](https://github.com/zevanoo.png?size=100)](https://github.com/zevanoo)
[![Yusuf](https://github.com/yusup909.png?size=100)](https://github.com/yusup909)