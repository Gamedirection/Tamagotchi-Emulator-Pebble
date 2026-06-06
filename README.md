# Tamagotchi Emulator 4 Pebble

Tamagotchi P1/P2 emulator for the Pebble watch, created for the Spring 2026 Pebble Contest.
Powered by [TamaLib](https://github.com/jcrona/tamalib/).

This fork is updated with StefanBauwens `master` and keeps the local watch-first features from this branch.

## Changes in this fork

- Merged the upstream v1.3 TamaLIB update, ROM handling changes, audio/vibration support, and timer-state format.
- Added automatic RTC time sync on start and every 2 hours when drift is above 30 seconds.
- Added auto-save every 5 minutes.
- Stores save state on the watch first, with phone/server save as a fallback path.
- Supports an embedded `tama_p1.bin` resource so the app can boot without fetching the ROM from the phone.
- Adds vibration when the Tamagotchi needs attention.
- Adds time, battery status, date, and Emery clock-frame display elements.
- Adds configurable text/hand colors and hand thickness through Clay settings.
- Keeps lower-CPU stepping and redraw throttling intended to reduce Pebble Time 2/Emery instability.
- Adds Docker Compose support to build the Pebble `.pbw` and serve it over HTTP.

Note: the ROM file is not distributed here. If you want embedded-ROM boot, put your compatible `tama_p1.bin` in `Tamagotchi/resources/data/tama_p1.bin` before building.

## Docker build server

The Docker setup builds the Pebble app with the Rebble SDK and serves the generated `.pbw` through nginx.

### Requirements

- Docker
- Docker Compose plugin or `docker compose`

### Start the server

```sh
docker compose up -d --build
```

Open or download the built package from:

```text
http://localhost:8080/Tamagotchi.pbw
```

The landing page is available at:

```text
http://localhost:8080/
```

### Use a different port

```sh
TAMAGOTCHI_PORT=9000 docker compose up -d --build
```

Then download from:

```text
http://localhost:9000/Tamagotchi.pbw
```

### Useful Docker commands

```sh
docker compose ps
docker compose logs --tail=80
docker compose down
docker compose up -d --build
```

`docker compose up -d --build` rebuilds the Pebble package after code or resource changes and restarts the nginx server.

## Local Pebble build

If you already have the Pebble/Rebble SDK installed locally:

```sh
cd Tamagotchi
npm ci
pebble build
```

The local build output is written under `Tamagotchi/build/`.

[Pebble Store Link](https://apps.repebble.com/216a0f62c6e44aac8f725e68)
[Rebble Store Link](https://apps.rebble.io/en_US/application/69e19d25cc376400090073d5)

![Tamagotchi watchapp screenshot basalt](Tamagotchi/screenshots/basalt.png)
![Tamagotchi watchapp screenshot basalt](Tamagotchi/screenshots/basalt1.png)
![Tamagotchi watchapp screenshot monochrome](Tamagotchi/screenshots/Duo2.png)
![Tamagotchi watchapp screenshot monochrome](Tamagotchi/screenshots/Duo3.png)

![Tamagotchi watchapp screenshot chalk](Tamagotchi/screenshots/chalk.png)
![Tamagotchi watchapp screenshot emery](Tamagotchi/screenshots/emery.png)
![Tamagotchi watchapp screenshot gabbro](Tamagotchi/screenshots/gabbro1.png)

## Features & Updates:
v1.3.:
- Bug fixes & Optimisations
- TamaLIB update (breaking change, requires upgrading to v1.1 of Tamagotchi API if you're self hosting the service!)

v1.2.:
- Add audio for Pebble watches with speaker
- Add vibrations for Pebble watches without speaker

v1.1.:
- Fix bug where loading state from the server would continually fail in some cases

v1.0.:
- Tamagotchi P1/P2 Emulation
- Support for external ROM integration (via Settings page)
- State saving & loading on closing/opening watchapp
- Support for [Tamagotchi API Server](https://github.com/StefanBauwens/Tamagotchi-API)
- Support for Time (Steel), Time Round, Pebble 2 (Duo), Time 2 and Round 2.

## Getting a ROM url
To run this Emulator it will need a Tamagotchi P1 or P2 rom in u12_t form in text format. I am not allowed to distribute this with the app, but it is possible for you to add a link to this in the app settings. Luckily for you it seems a link like that already has been created: https://pastebin.com/raw/iN0pfyr7 for P1 or https://pastebin.com/raw/TXkwnBZA for the (Japanese)P2.
Thank you to the kind person for creating these!

## Server for running in background (optional)
By default the Tamagotchi will save its state when quitting the app and restore it the next time you use it.

It works fine like this but if you would like your tamagotchi to continue working in the backround you can make use of my [Tamagotchi API Service](https://github.com/StefanBauwens/Tamagotchi-API) and run it on your own server.

Once set up, when you close the app your save state is sent to your server and continues to live on there. When you open the watch app next time, the save state is fetched from the server and runs on the Pebble again.

## How to use
You can look up the original instructions for the Tamagotchi P1 toy.
A, B and C buttons are mapped to UP, SELECT and DOWN buttons respectively.
Use A + C together to (un)mute audio/vibrations.
Pressing the BACK button saves the state and quits the app.

## Issues
I've created this with support for most Pebble watches, but have only tested this on a Pebble 2 Duo so far. The emulator on CloudPebble seemed to work fine and so I hope it's also the case with the actual watches. If any major bugs are noticed feel free to create an issue here on Github!

## Credits
This project implements [TamaLib](https://github.com/jcrona/tamalib/) by [jcrona](https://github.com/jcrona). I also want to point out that jcrona has created [PebbleGotchi](https://github.com/jcrona/pebblegotchi) about 5 years ago.

I believe my implementation to be significantly different to warrant my own publication in the store. In fact PebbleGotchi was never uploaded to the Pebble store as it required the end user to supply it with a ROM and recompile.
