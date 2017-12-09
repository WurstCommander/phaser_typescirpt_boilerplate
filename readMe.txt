Installation
  IDE
    Code: https://code.visualstudio.com/

  Dev-Programme
    NodeJs:         https://nodejs.org/dist/v6.9.5/node-v6.9.5-x64.msi (or newer)
    
    Use Powershell or cmd to execute the following commands:
    * npm install
    * npm install -g typescript
    * npm install -g tslint
    * npm install -g grunt
	
	If you have to use a proxy for Nodejs/npm:
	
	"npm config list" should contain these settings:

	http-proxy = "http://USER:MYPASS@PROXY.DE:80"
	https-proxy = "http://USER:MYPASS@PROXY.DE:80"
	strict-ssl = false

	You can set these with: npm config set https-proxy "http://USER:MYPASS@PROXY.DE:80" & npm config set strict-ssl false
	More Infos: http://superuser.com/questions/347476/how-to-install-npm-behind-authentication-proxy-on-windows
	
    Start the Server with:
    * grunt

    Typescript
    * Start autobuild of Typescript Code mit Strg+Shift+B starten/stoppen

  Used Versions
    * Nodejs 6.9.5
    * Typescript 2.1.6

-------------------------------------------------------------------------------------------------------------

Tutorials
    * https://www.udemy.com/making-games-with-phaser/

Graphic tools
    Sprites
    * http://www.piskelapp.com/  - Desktop-Version https://github.com/juliandescottes/piskel/wiki/Desktop-applications
    * https://sketch.io/

    Tiles
    * http://www.mapeditor.org/

Sound-tools
    * http://www.audacityteam.org

Assets
    * http://OpenGameArt.org
    * http://OpenClipArt.org
    * http://kenney.nl