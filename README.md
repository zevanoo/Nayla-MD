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
  <a href="https://github.com/zevoffc/nayla#Requirements">Requirements</a> •
  <a href="https://github.com/zevoffc/nayla#Instalasi">Installation</a> •
  <a href="https://github.com/zevoffc/nayla#Donate">Donate</a>
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
* [FFmpeg](https://ffmpeg.org/download.html)
* [Imagemagick](https://imagemagick.org/script/download.php)

---------

# Instalasi

## For Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/zevoffc/nayla)

### Buildpack

```bash
 heroku/nodejs
 https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
 https://github.com/DuckyTeam/heroku-buildpack-imagemagick.git
```


## For Windows/RDP

```bash
git clone https://github.com/zevoffc/nayla.git
cd nayla
npm install
node .
```


## Installing the FFmpeg for Windows

* Unduh salah satu versi FFmpeg yang tersedia dengan mengklik [di sini](https://ffmpeg.org/download.html).
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

Untuk termux hilangkan fitur yg menggunakan canvas

```bash
termux-setup-storage
pkg update && pkg upgrade
apt install nodejs
apt install git
apt install ffmpeg 
apt install imagemagick
apt install yarn
git clone https://github.com/zevoffc/nayla.git
cd nayla
yarn
node .
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

- Change information on [this section](https://github.com/zevoffc/nayla/edit/main/config.js)


---------

## Donate

- [Saweria](https://saweria.co/Scaff)
