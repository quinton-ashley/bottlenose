Nostlan is an open source _high quality_ front-end launcher for video game emulators! Available on Linux, macOS, and Windows. Supports Dolphin, Cemu, Yuzu, mGBA, melonDS, Citra, MAME, PCSX2, RPCS3, and Xenia.

[Download the latest version of Nostlan](https://github.com/quinton-ashley/nostlan/releases) and if you enjoy the app [please make a donation](https://www.paypal.me/qashto/20), any amount of money is appreciated. [Support the development of Nostlan on patreon](https://www.patreon.com/qashto) to gain access to premium features!

This update log covers changes made in v1.8.x. Unfamiliar with Nostlan? [Read the full overview.](https://github.com/quinton-ashley/nostlan/blob/master/README.md)

<p><a href="https://www.patreon.com/qashto">
<img src="https://raw.githubusercontent.com/quinton-ashley/nostlan-screenshots/master/banner.png">
</a></p>

## Update Summary for v1.8.x

#### Emulators

- bsnes support (SNES emulator)
- Ryujinx support (alt Switch emulator that can run 32bit games)
- running Yuzu without a game will run the maintenancetool updater

#### User Interface

- fixed scroll stuttering!
- mouse hides automatically when using a controller, reappears when moved
- improved error checking
- unidentified games and games with no cover art will now be shown with handwritten labels that can be edited!
- On the game library view, clicking "Systems" will open a submenu where you can choose to load another system's game library. "Play" starts the emulator with the game that the cursor is on. "Setup" will start the emulator without a game so you can update the emulator, setup controllers, etc.

#### Development

- updated open source license to GNU GPLv3
- contro-ui (my controller ui framework) now uses numbered submenus

## Coming Soon

#### Emulators

- PPSSPP support (PSP emulator)
- snes9x support (alt SNES emulator)

#### User Interface

- users will be able to manually identify games that could not be automatically identified from Nostlan's game databases and then Nostlan will load cover art for that game
- users will be able to identify game mods (not found in Nostlan's game database), they'll use the cover art of the original game with a label sticker describing the mod.

## Supporting Multiple Emulators per System

When users launch a game, a menu will appear prompting users to choose which emulator they want to play the game with!

When you load this update Nostlan will attempt to reorganize the default paths to your emulators and games. This update breaks compatibility with all older versions of Nostlan. The folders for game images and user game list files have been moved into their respective system folder in `emu`.

    📁 emu (root folder can have any name)
    ├─┬ 📁 nostlan
    │ └── 📁 themes
    ├─┬ 📁 arcade
    │ └─┬ 📁 mame
    │   ├─┬ 📁 roms
    │   │ ├── 💿 1942.zip
    │   │ └── 💿 spang.zip
    │   └── 🎮 mame64.exe
    ├─┬ 📁 ds
    │ ├─┬ 📁 melonds
    │ │ └── 🎮 melonDS.exe
    │ └─┬ 📁 games
    │   ├── 💿 Mario & Luigi - Partners in Time.nds
    │   └── 💿 Mario & Luigi - Partners in Time.sav
    ├─┬ 📁 gba
    │ ├─┬ 📁 mgba
    │ │ └── 🎮 mGBA.exe
    │ └─┬ 📁 games
    │   ├── 💿 Mario & Luigi - Superstar Saga.gba
    │   └── 💿 Mario & Luigi - Superstar Saga.sav
    ├─┬ 📁 n3ds
    │ ├─┬ 📁 citra
    │ │ └─┬ 📁 nightly-mingw
    │ │   └── 🎮 citra-qt.exe
    │ └─┬ 📁 games
    │   └── 💿 Super Mario 3D Land.3ds
    ├─┬ 📁 ps2
    │ ├─┬ 📁 pcsx2
    │ │ └── 🎮 pcsx2.exe
    │ └─┬ 📁 games
    │   └── 💿 Bully.iso
    ├─┬ 📁 ps3
    │ └─┬ 📁 rpcs3
    │   ├─┬ 📁 dev_hdd0
    │   │ └─┬ 📁 game
    │   │   ├── 💿 BLES00760/USRDIR/EBOOT.BIN
    │   │   └── 💿 BLUS30591/USRDIR/EBOOT.BIN
    │   └── 🎮 rpcs3.exe
    ├─┬ 📁 snes
    │ ├─┬ 📁 bsnes
    │ │ └── 🎮 bsnes.exe
    │ └─┬ 📁 games
    │   └── 💿 Super Mario World.sfc
    ├─┬ 📁 switch
    │ ├── 📁 yuzu
    │ └─┬ 📁 games
    │ 	└── 💿 Super Mario Odyssey.xci
    ├─┬ 📁 wii
    │ ├─┬ 📁 dolphin
    │ │ ├── 📁 User
    │ │ ├── 📄 portable.txt
    │ │ └── 🎮 Dolphin.exe
    │ └─┬ 📁 games
    │   ├── 💿 Super Mario Sunshine.gcz
    │   ├── 💿 Super Smash Bros Melee.iso
    │   └── 💿 sm64.wad
    ├─┬ 📁 wiiu
    │ ├─┬ 📁 cemu
    │ │ └── 🎮 Cemu.exe
    │ └─┬ 📁 games
    │   └── 💿 Mario Kart 8/code/Turbo.rpx
    └─┬ 📁 xbox360
    	├─┬ 📁 xenia
    	│ └── 🎮 xenia.exe
    	└─┬ 📁 games
      	├── 💿 Halo 4 (disc a).iso
      	└── 💿 Halo 4 (disc b).iso

## Let me know what you think about Nostlan

Nostlan is an experimental project but I want to make it intuitive and useful for the general public! If something is wrong with the app or if you have any questions please email me <mailto:qashto@gmail.com> or write up an issue report on Github. What do you think of the premium features I have planned?

## Premium Features

Support the development of Nostlan on [Patreon](https://www.patreon.com/qashto) to gain access to these premium features!

- backup/sync all your save data to the cloud or local storage device
- custom ui themeing (coming soon)

Features that might be offered in the future:

- support for PC games, making Nostlan able to launch all your games
- single click to install emulators/updates
- database of Dolphin texture packs
- batch install and auto-update texture packs for Dolphin
- easy way to mix and swap texture packs for Dolphin

## If you like using Nostlan please donate!

Hi my name is Quinton and this is the part where I beg you for money! Even though I decided to make this project open source and free to use, it still took a lot of work and a long time to develop. If you appreciate my work so far and will continue to use Nostlan please [donate](https://www.paypal.me/qashto/10) an amount of your choosing. If everyone that downloads this update gave me even $1 I would really appreciate it. Cloud saving is coming soon for Patreon supporters. Thank you!

Support on Patreon:  
<https://www.patreon.com/qashto>

Donate via Paypal:  
<https://www.paypal.me/qashto/20>

<p><a href="https://www.patreon.com/qashto">
<img src="https://raw.githubusercontent.com/quinton-ashley/nostlan-screenshots/master/banner.png">
</a></p>