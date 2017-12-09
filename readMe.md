# Phaser Boilerplate Typescript with Webserver (grunt, nodejs, tslint)

## Requirements

- Install nodejs + npm (<https://nodejs.org/en/download/)>
- Open cmd in project directory then:
  - "npm install"
  - "npm install grunt -g"
  - "npm install typescript -g"
  - "grunt"

Your webbrowser should open the index.html file and the phaser logo will shine in it's glory.

Inside Visual Studio Code:

- start/stopp autobuild of Typescript Code mit Strg+Shift+B

## Tutorials

- <https://www.udemy.com/making-games-with-phaser/>

### Graphic tools
### Sprites
- <http://www.piskelapp.com/>  - Desktop-Version https://github.com/juliandescottes/piskel/wiki/Desktop-applications
- <https://sketch.io/>

### Tiles
- http://www.mapeditor.org/

### Sound tools

- <http://www.audacityteam.org>

### Assets

- <http://OpenGameArt.org>
- <http://OpenClipArt.org>
- <http://kenney.nl>

## Tips and workarounds

Install node-modules global:

Use Powershell or cmd to execute the following commands:
- npm install
- npm install -g typescript
- npm install -g tslint
- npm install -g grunt

If you have to use a proxy for Nodejs/npm:

"npm config list" should contain these settings:

http-proxy = "http://USER:MYPASS@PROXY.DE:80"
https-proxy = "http://USER:MYPASS@PROXY.DE:80"
strict-ssl = false

You can set these with: npm config set https-proxy "http://USER:MYPASS@PROXY.DE:80" & npm config set strict-ssl false
More Infos: http://superuser.com/questions/347476/how-to-install-npm-behind-authentication-proxy-on-windows
