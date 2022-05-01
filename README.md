</p>
<p align="center">
<a href="#"><img title="NayLa-B0TZ" src="https://img.shields.io/badge/NayLa-B0TZ-green?colorA=%23ff0000&colorB=%23017e40&style=for-the-badge"></a>
</p>
<p align="center">
<a href="https://github.com/zevoffc/nayla"><img title="Recorde" src="https://img.shields.io/badge/Recode-Zevano-red.svg?style=for-the-badge&logo=github"></a>
</p>
<p align="center">
<a href="https://github.com/zevoffc/followers"><img title="Followers" src="https://img.shields.io/github/followers/zevoffc ?color=red&style=flat-square"></a>
<a href="https://github.com/zevoffc/nayla/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/zevoffc/nayla?color=blue&style=flat-square"></a>
<a href="https://github.com/zevoffc/nayla/network/members"><img title="Forks" src="https://img.shields.io/github/forks/zevoffc/nayla?color=red&style=flat-square"></a>
<a href="https://github.com/zevoffc/nayla/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/zevoffc/nayla?label=Watchers&color=blue&style=flat-square"></a>
<a href="https://github.com/zevoffc/nayla"><img title="Open Source" src="https://badges.frapsoft.com/os/v2/open-source.svg?v=103"></a>
<a href="https://github.com/zevoffc/nayla/"><img title="Size" src="https://img.shields.io/github/repo-size/zevoffc/nayla?style=flat-square&color=green"></a>
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fzevoffc%2Fnayla&count_bg=%2379C83D&title_bg=%23555555&icon=probot.svg&icon_color=%2300FF6D&title=hits&edge_flat=false"/></a>
<a href="https://github.com/zevoffc/nayla/graphs/commit-activity"><img height="20" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg"></a>&nbsp;&nbsp;
</p>

<p align="center">
  <a href="https://github.com/zevoffc/nayla#requirements">Requirements</a> •
  <a href="https://github.com/zevoffc/nayla#instalasi">Installation</a> •
  <a href="https://github.com/zevoffc/nayla#donate">Donate</a>
</p>
</div>



---


## Information

> NayLa-B0TZ adalah bot yang saya buat sendiri mengambil dari youtube lalu saya perbaiki dan tambah kan fiture nya
> Jika kamu menemukan semacam bug, harap untuk dimaklumi hehe


---------

## Bugs and Tester

* Jika kamu menemukan bug jangan lupa buka Issues
* Info Lebih Lanjut, Chat [owner-nayla](https://wa.me/628818770766)


---------

# Requirements
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [FFmpeg](https://github.com/BtbN/FFmpeg-Builds/releases/download/autobuild-2020-12-08-13-03/ffmpeg-n4.3.1-26-gca55240b8c-win64-gpl-4.3.zip) (for sticker command)
* [Modules](https://www.mediafire.com/file/ssmuu3pwhj6vgnu/node_modules.zip/file)


---------

# Instalasi

## For Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/zevoffc/nayla)

### Buildpack

```bash
 heroku/nodejs
 https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest
 https://github.com/DuckyTeam/heroku-buildpack-imagemagick.git
```


## For Windows/RDP

```bash
git clone https://github.com/zevoffc/nayla.git
cd nayla
npm install
node main
```


## Installing the FFmpeg for Windows

* Unduh salah satu versi FFmpeg yang tersedia dengan mengklik [di sini](https://www.gyan.dev/ffmpeg/builds/).
* Extract file ke `C:\` path.
* Ganti nama folder yang telah di-extract menjadi `ffmpeg`.
* Run Command Prompt as Administrator.
* Jalankan perintah berikut::

```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```

Jika berhasil, akan memberikanmu pesan seperti: `SUCCESS: specified value was saved`.
* Sekarang setelah Anda menginstal FFmpeg, verifikasi bahwa itu berhasil dengan menjalankan perintah ini untuk melihat versi:

```cmd
> ffmpeg -version
```


## For Termux

```bash
termux-setup-storage
apt update && apt upgrade
pkg install nodejs && pkg install git && pkg install ffmpeg && pkg install imagemagick
git clone https://github.com/zevoffc/nayla.git
cd nayla
npm install
npm update
node . (option)
```


## For Replit
[![Run on Repl.it](https://repl.it/badge/github/zevoffc/nayla)](https://repl.it/github/zevoffc/nayla)

* klik button
* buka console

```bash
npm i
npm update
node . (option)
```
---------

## Edit file

- Change information on [this section](https://github.com/zevoffc/nayla/edit/V3/config.js)


---------

## command `node . [--options] [<session name>]`

#### Contoh: `node . --self --restrict --autoread session.data.json`

### `--self`

Aktifkan mode self (Mengabaikan yang lain)

### `--prefix <prefixes>`

* `prefixes` dipisahkan oleh masing-masing karakter
Setel awalan

### `--server`

Digunakan untuk [heroku](https://heroku.com/) atau pindai melalui situs web

### `--db <json-server-url>`

Gunakan db eksternal alih-alih db lokal, 
Contoh Server `https://json-server.nurutomo.repl.co/`
Code: `https://repl.it/@Nurutomo/json-server`

`node . --db 'https://json-server.nurutomo.repl.co/'`

Server harus memiliki spesifikasi seperti ini

#### GET

```http
GET /
Accept: application/json
```

#### POST

```http
POST /
Content-Type: application/json

{
 data: {}
}
```

### `--big-qr`

Jika qr unicode kecil tidak mendukung

### `--restrict`

Mengaktifkan plugin terbatas (yang dapat menyebabkan nomor Anda **diblokir** jika digunakan terlalu sering)

* Administrasi Grup `add, kick, promote, demote`

### `--img`

Aktifkan pemeriksa gambar melalui terminal

### `--autoread`

Jika diaktifkan, semua pesan masuk akan ditandai sebagai telah dibaca

### `--nyimak`

Tidak ada bot, cukup cetak pesan yang diterima dan tambahkan pengguna ke database

### `--test`

**Development** Testing Mode

### `--trace`

```js
conn.logger.level = 'trace'
```

### `--debug`

```js
conn.logger.level = 'debug'
```

---------

## Donate

- [Saweria](https://saweria.co/Scaff)
