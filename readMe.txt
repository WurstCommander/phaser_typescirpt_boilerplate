Installation
  IDE
    Code: https://code.visualstudio.com/

  Dev-Programme
    NodeJs:         https://nodejs.org/dist/v6.9.5/node-v6.9.5-x64.msi
    
    Über eine Shell (cmd oder powershell, ...) im Ordner des Projekt-Root-Ordners folgende Befehle absetzen:
    * npm install
    * npm install -g typescript
    * npm install -g tslint
    * npm install -g grunt
	
	Proxy bei Nodejs/npm (falls man einen nutzt):
	
	"npm config list" sollte folgendes Ergebnis bringen:

	http-proxy = "http://USER:MYPASS@PROXY.DE:80"
	https-proxy = "http://USER:MYPASS@PROXY.DE:80"
	strict-ssl = false

	Wird gesetzt mit: npm config set https-proxy "http://USER:MYPASS@PROXY.DE:80" & npm config set strict-ssl false
	Mehr dazu: http://superuser.com/questions/347476/how-to-install-npm-behind-authentication-proxy-on-windows
	

    Server mit einem der beiden Befehle starten
    * grunt
    * phonegap serve (Bedingung: Build-Programme sind installiert!)

    Typescript
    * Autobuild in VS Code mit Strg+Shift+B Starten/Stoppen (nicht mehr noetig, bei Save sollten die Dateien gebaut werden)

  Build-Programme
    Installation
    * Android Studio: https://developer.android.com/studio/index.html
        * Android Nougat 7.0 (Android SDK - API Level 24) unter Studio Konfiguration SDK nachinstallieren.
          Den Installationsordner habe ich im Homeverzeichnis installiert, da PhoneGab probleme mit Schreibrechten hatte.
        * Umgebungsvariablen/Systemvariablen ANDROID_HOME ergänzen und auf den SDK Root-Ordner setzen.

    Über eine Shell (cmd oder powershell, ...) im Ordner des Projekt-Root-Ordners folgende Befehle absetzen:
    * npm install phonegap -g
    * npm install cordova -g
    * cordova platform add --save android (Bedingung: Android SDK ist installiert, Umgebungsvariable ANROID_HOME für auf das SDK gesetzt.)

  Erprobte Versionen
    * Nodejs 6.9.5
    * typescript 2.1.6
    * Phonegap-CLI 6.4.3
        * Android-Phonegap 6.1.2
        * IOS-Phonegap 4.3.0
        * Windows-Phonegap 4.4.3
    * Android Studio 2.2.3 (Komplett-Installation)
        * Android Nougat 7.0 (Android SDK - API Level 24)

-------------------------------------------------------------------------------------------------------------

Tutorials
    * https://www.udemy.com/making-games-with-phaser/

Grafik-Tools
    Sprites
    * http://www.piskelapp.com/  - Desktop-Version https://github.com/juliandescottes/piskel/wiki/Desktop-applications
    * https://sketch.io/

    Tiles
    * http://www.mapeditor.org/

Sound-Tools
    * http://www.audacityteam.org

Asset-Quellen
    * http://OpenGameArt.org
    * http://OpenClipArt.org
    * http://kenney.nl