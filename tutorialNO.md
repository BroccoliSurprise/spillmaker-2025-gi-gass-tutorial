# Spillmaker: Gi Gass! 
### @explicitHints true

## {Intro @showdialog}

Velkommen! I dag skal vi lage et bilspill som kommer til å se slik ut:

![En rød bil som kjører på veien](https://st-vilvite2022.nf.cdn.netflexapp.com/1749510963/gigass2025.gif "Wroom wroom!")

Underveis i veiledningen viser vi deg hvordan du kan endre på hvordan bilene ser ut, hvor fort de skal kjøre, og mye mer. 

PS! 👀 Det ligger litt kode inne i programmet allerede. Vi anbefaler at du lar den ligge i fred inntil videre, vi kommer til å få bruk for den.

## {Steg 2 - bakgrunnsbilde}

**Er du klar?**

Først trenger vi et fint bakgrunnsbilde.

- :tree: Klikk på ``||scene: Scene||`` kategorien  **i verktøyskrinet** og finn denne blokken
```block
scene.setBackgroundImage(assets.image`bakgrunn1`)
```
Klikk og dra den ut i programmet og sett den inni den grønne <br/>
``||loops(noclick): on start||`` <br/>
blokken. 

~hint Har du lyst på et annet bilde? 🖼

---

Klikker du på bildet inni den grå blokken kan du tegne din egen bakgrunn, men 
vi anbefaler at du venter med dette til du har laget spillet ferdig.

hint~

#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(assets.image`bakgrunn1`)
```


## {Steg 3 }

Nå skal vi legge til bilen vår.

- :paper plane: Klikk på ``||sprites: Sprite||`` kategorien  **i verktøyskrinet** og finn 
```block
mySprite = sprites.create(assets.image`redCar`, SpriteKind.Player)
```
Legg denne også inn i den grønne <br/>
``||loops(noclick): on start||`` <br/>
blokken. 

~hint Vil du tegne din egen bil? 🏎

---

Du kan klikke på den røde bilen og redesigne den akkurat slik du vil! Her er det nesten bare fantasien og tiden som setter grenser.


hint~

~hint Hva er en Sprite? 💡

---

I dataspill er **sprites** tegninger som kan programmeres. De kan flytte seg rundt på skjermen, og gjøre ulike ting når de berører hverandre.

Her er et eksempel:

![Super Mario Brothers på NES](https://upload.wikimedia.org/wikipedia/en/5/50/NES_Super_Mario_Bros.png "Pew pew!")

Mario, stjernen ⭐, ildkulene 🔥 og Goombaene 👿 er Sprites som er programmert ulikt. Mario-spriten kan beveges av spilleren, og når en 🔥 treffer en 👿 sier det PLOPP og du får poeng.

hint~

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`bakgrunn1`)
//@highlight
mySprite = sprites.create(assets.image`redCar`, SpriteKind.Player)

```


## {Steg 4 - Bevege bilen }

Det er ikke mye til bilspill om bilen bare står i ro. På tide å **ta kontroll!**

- :game pad: Klikk på ``||controller: Controller||`` kategorien og finn 
```block
controller.moveSprite(mySprite, 100, 0)
```
Denne må plasseres **nederst** i <br/>
``||loops(noclick): on start||`` <br/>
blokken. 

~hint Hva betyr vx 100 og vy 0?

---

vx betyr "Farten du kan bevege deg i X-aksen", altså "til venstre og høyre".

vy betyr "Farten du kan bevege deg i Y-aksen", altså "opp og ned". 

For enkelhets skyld har vi satt bilen til å kun bevege seg passe fort til venstre og høyre, men du kan forandre på tallene og bestemmer selv om du vil ha en sneglebil 🐌 eller en flygebil 🚀. 
hint~


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`bakgrunn1`)
mySprite = sprites.create(assets.image`redCar`, SpriteKind.Player)
//@highlight
controller.moveSprite(mySprite, 100, 0)

```

## {Steg 5 - Hold bilen på veien}

Du oppdaget kanskje i forrige steg at bilen kan kjøre utfor skjermen. Det kan vi ikke ha noe av.

- :paper plane: Klikk på ``||sprites: Sprite||`` kategorien og hent disse **to klossene:**
```block
let mySprite: Sprite = null
mySprite.setPosition(80, 100)
mySprite.setStayInScreen(true)
```
Legg de nederst i koden, som vanlig.

#### ~ tutorialhint

```blocks
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`bakgrunn1`)
mySprite = sprites.create(assets.image`redCar`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
//@highlight
mySprite.setPosition(80, 100)
//@highlight
mySprite.setStayInScreen(true)

```


## {Steg 6 - Hindringer i veibanen}

Nå skal vi legge til en blokk som skal ligge **utenfor** ``||loops(noclick): on start||``blokken. Dette er kode som skal gjenta seg igjen og igjen, i stedet for å bare skje 1 gang.


- :circle: Klikk på ``||game: Game||`` kategorien og finn 
```block
game.onUpdateInterval(500) {
})
```
Legg den hvor du vil, og klikk på tallet for å endre 500 til **2000**.


#### ~ tutorialhint


```blocks

let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`bakgrunn1`)
mySprite = sprites.create(assets.image`redCar`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.setPosition(80, 100)
mySprite.setStayInScreen(true)

//@highlight
game.onUpdateInterval(2000, function()) {
}


```



## {Steg 7 - Juksa litt}

Har du sett de to blå ``||functions(noclick): function||``-blokkene som vi nevnte i starten? Her har vi gjort klar litt kode for deg som vi nå skal bruke!

- :function: Klikk på ``||functions: Functions||`` kategorien og finn ``||functions(noclick):call createObstacle||``.
Legg denne inni ``||game(noclick): on game update ||``-blokken.

Se på horisonten. Dukker det opp blå biler?


~hint Hva er en funksjon?

---


For å ikke miste oversikten når man programmerer, er det lurt å dele opp koden i biter. En måte å gjøre dette på, er å lage FUNKSJONER. Det er litt som å lage små assistentprogrammer som du kan legge til side, og starte ved å rope på de med CALL-blokkene. 

Når man deler opp koden sin på denne måten, slipper du å måtte gjenta deg selv og kopiere de samme blokkene igjen og igjen. Flinke programmerere er kjempelate og finner alle de lure snarveiene 😎.


hint~

#### ~ tutorialhint


```blocks

let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`bakgrunn1`)
mySprite = sprites.create(assets.image`redCar`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.setPosition(80, 100)
mySprite.setStayInScreen(true)

game.onUpdateInterval(2000, function () {
    //@highlight
    createObstacle
})


```


## {Steg 8 - Fart}

For å få de blå bilene til å bevege seg, må vi tilbake til ``||loops(noclick): on start ||`` og legge til en verdi som bestemmer ``||variables(noclick): farten|``. 

- :list: I blokken vi nå skal hente, må vi endre på **2** ting.
Klikk på ``||variables: variables||`` og finn 
```block
mySprite = 0
```
Klikk på den lille hvite pilen og bytt til ``||variables(noclick): fart|``. Så kan du bytte ut tallet ``||variables(noclick): 0|`` med f.eks. 20.

~hint Variabler?

---

Variabler er en slags bokser du kan lagre forskjellige typer informasjon oppi. Når vi setter verdien til FART i starten av programmet, kan createObstacle-funksjonen lese denne verdien og bruke den for å sende de blå bilene avgårde. 

Hvis du senere har lyst til å programmere en gasspedal som lar deg kjøre fortere i spillet, trenger du bare noe som gjør "Når knapp A trykkes, gjør variabelen FART større"

hint~

#### ~ tutorialhint

```blocks
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`bakgrunn1`)
mySprite = sprites.create(assets.image`redCar`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.setPosition(80, 100)
mySprite.setStayInScreen(true)
//@highlight
let fart = 20
```

## {Steg 9 - Kræsj}
Nå kommer den spennende biten - kollisjoner i høy fart! (Ingen grunn til bekymring, alle de blå bilene er modellbiler laget av pappmasjé og teip.) 

- :paper plane: I ``||sprites: Sprites||`` har vi gjort klar koden som sjekker om en blå bil kommer borti din bil, og så gjør noe spennende. 
Legg denne blokken hvor som helst i programmet:
```block
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    sprites.destroy(sprite, effects.disintegrate, 500)
    scene.cameraShake(4, 500)
})
```

~hint Hva skjer her? 🤜🤛

---
Slik leser du denne kodesekvensen, linje for linje:

* Når en ENEMY-sprite berører en PLAYER-sprite, gir vi de de midlertidige navnene SPRITE og OTHERSPRITE for å holde styr på hvem som er hvem.

* endre score med -1 (Altså mister du 1 poeng)

* ødelegg Spriten som vi kaller for SPRITE med en oppløsnings-animasjon (altså Enemy-spriten)

* rist på skjermen. Større tall her blir større risting. Hva tror du skjer om du bruker variabelen FART her i stedet for 4?

hint~


## {Steg 10 - Animasjon}

Siste steg! 

For å gi en bedre illusjon av bevegelse, har vi laget klar litt en komplisert funksjon ``||functions(noclick):updateRoad||``  som endrer størrelsen på de blå bilene mens de beveger seg.

Alt du behøver å gjøre, er å legge til ``||functions(noclick): updateRoad||`` i en løkke som skal gå ``||game(noclick): uten pause||``. 

```blocks
game.onUpdate(function () {
    updateRoad()
})
function updateRoad= (){}


```
... Men er du nysgjerrig kan du lese litt om de ulike blokkene her:

~hint set sprite scale 🤏

---

Blokken set sprite scale lar oss forandre på størrelsen til en sprite. Dette er veldig praktisk om man f.eks. har tegnet en monstertruck som blir for stor for skjermen.

Inne i den grønne For-løkken leser vi spritens Y-verdi (hvor lavt den er på skjermen), og regner om dette tallet med de lilla matteblokkene slik at bilene er små når de er nært midten, og større når de nærmer seg bunnen. Prøv gjerne å endre på tallene og se hva som skjer!

hint~


~hint Arrays 📃 og FOR-løkker 🔁

---

"set list to array of sprites of kind Enemy" skriver en ryddig liste som inneholder alle sprites i spillet som er av typen Enemy. 

"for element value of list" er en løkke som går gjennom hele denne listen, og gjør noe med hvert enkelt element på listen. Altså bil nr 1, bil nr 2, bil nr 3 osv til listen er tom.



hint~

## Kjempebra!

Da er vi i mål, gratulerer!

Når du trykker på ☑ DONE avsluttes denne veiledningen, og du får opp et vindu som lar deg laste opp spillet ditt på internett slik at du kan dele det med andre. Du kan til og med scanne en QR-kode og spille det på mobiltelefonen din! 

Du får også tilgang til **alle** blokkene i MakeCode, så det går an å gjøre spillet *enda kulere... *

~hint Forslag til forbedring av spillet:

---

* Tegn dine egne sprites
* En klokke som teller ned tiden
* Multiplayer: to spillere på samme skjerm. 
* Natt og dag-level
* Gass- og bremsepedal på f.eks. PIL OPP&NED eller A og B

hint~




```blockconfig.global
let fart = 0
fart = 20
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`redCar`, SpriteKind.Player)
mySprite.setPosition(80, 100)
controller.moveSprite(mySprite, 100, 0)
mySprite.setStayInScreen(true)
sprites.allOfKind(SpriteKind.Enemy)
scene.setBackgroundImage(assets.image`bakgrunn1`)
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    sprites.destroy(sprite, effects.disintegrate, 500)
    scene.cameraShake(4, 500)
})
game.onUpdateInterval(2000) {}

```

```template


let list: Sprite[] = []
let mySprite2: Sprite = null



function createObstacle () {
    mySprite2 = sprites.create(assets.image`blueCar`, SpriteKind.Enemy)
    mySprite2.setPosition(randint(40, 120), 70)
    if (fart) {
        mySprite2.setVelocity(randint(-20, 20), fart)
    }
}
function updateRoad () {
    list = sprites.allOfKind(SpriteKind.Enemy)
    for (let value of list) {
        value.setScale(Math.map(value.y, 60, 100, 0.2, 1), ScaleAnchor.Middle)
        if (value.y > 120) {
            sprites.destroy(value)
            info.changeScoreBy(1)
        }
    }
}


```

```ghost

function createObstacle () {
    mySprite2 = sprites.create(assets.image`blueCar`, SpriteKind.Enemy)
    mySprite2.setPosition(randint(40, 120), 70)
    if (fart) {
        mySprite2.setVelocity(randint(-20, 20), fart)
    }
}
function updateRoad () {
    list = sprites.allOfKind(SpriteKind.Enemy)
    for (let value of list) {
        value.setScale(Math.map(value.y, 60, 100, 0.2, 1), ScaleAnchor.Middle)
        if (value.y > 120) {
            sprites.destroy(value)
            info.changeScoreBy(1)
        }
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    sprites.destroy(sprite, effects.disintegrate, 500)
    scene.cameraShake(4, 500)
})

let mySprite: Sprite = null
let list: Sprite[] = []
let mySprite2: Sprite = null
let fart = 0
scene.setBackgroundImage(assets.image`bakgrunn1`)
createPlayer()
fart = 20
game.onUpdate(function () {
    updateRoad()
})
game.onUpdateInterval(2000, function () {
    createObstacle()
})
```


```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"image1\": {\n        \"data\": \"hwSgAHgAAAAREREREREREREREREREREREdHd3d2ZmZmZmZmZmZmZmZlpZnd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d9cRERERERERERERERERERER3d3d3d2dmZmZmZmZmZmZmZZpZnd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d90REREREREREREREREREdHd3d3d3d2dmZmZmZmZmZaWaWZmZnd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3190RERERERERERERERER0d3d3d3d3d3dmZmZmZmZZmZmZmZmZnd3d3d3d3d3d3d3d3d3d3d3d3d3d3fX3d0RERERERERERERERHR3d3d3d3d3d3dnZmZmZmZaWlmZmZmZnd3d3d3d3d3d3d3d3d3d3d3d3d3d3fd3d0REREREREREREREdHd3d3d3d3d3d3d3ZmZmZmZmZlmZmZmZnd3d3d3d3d3d3d3d3d3d3d3d3d3d9fd3d0REREREREREREREd3d3d3d3d3d3d3d3Z2ZmZmZmZlmZmZmZnd3d3d3d3d3d3d3d3d3d3d3d3d3d93d3d0REREREREREREREd3d3d3d3d3d3d3d3Z2ZlpmZlmlmZmZmZnd3d3d3d3d3d3d3d3d3d3d3d3d3193d3d0RERERERERERER0d3d3d3d3d3d3d3d3ZmZlmlplmZmZmZmZnd3d3d3d3d3d3d3d3d3d3d3d3fX3d3d3d0RERERERERERER0d3d3d3d3d3d3d3d1plpZmZplmZmZmZmZnd3d3d3d3d3d3d3d3d3d3d3d3fd3d3d3d0RERERERERERER0d3d3d3d3d3d3d3d1pZmZpZmZmZmZmZmZnd3d3d3d3d3d3d3d3d3d3d3d9fd3d3d3d0RERERERERERER3d3d3d3d3d3dbd1tZpZmZmZmZmZmZmZmZnd3d3d3d3d3d3d3d3d3d3d3d93d3d3d3d0RERERERERERER3d3d3d3d3d3dbW1mZmZmZmZmZmZmZmZmZnd3d3d3d3d3d3d3d3d3d3d3193d3d3d3d0RERERERERERER3d3d3d3d3d3dZmZmZmZmZmZmZmZmZmZmZnd3d3d3d3d3d3d3d3d3d3fX3d3d3d3d3d0RERERERERERER3d3d3d3d3d1mZmZmZmZmZmZmZmZmZmZmZnd3d3d3d3d3d3d3d3d3d3fd3d3d3d3d3d0RERERERERERER3d3d3d3d3W1mZmZmZmZmZmZmZmZmZmZmZnd3d3d3d3d3d3d3d3d3d9fd3d3d3d3d3d0RERERERERERER3d3d3d3d3d3d1m1mZmZmZmlmZmZmZmZmZnd3d3d3d3d3d3d3d3d3d93d3d3d3d3d3d0RERERERERERHR3d3d3d3d3d3d3d3WZm1mZmlmZmZmZmZmZnd3d3d3d3d3d3d3d3d3193d3d3d3d3d3d0RERERERERERHR3d3d3d3d3d3d3d3Wbd1mmWlmZmZmZmZmZnd3d3d3d3d3d3d3d3fX3d3d3d3d3d3d3d0RERERERERERHR3d3d3d3d3d3d3d3d3d1tmZmWaWZmZmZmZnd3d3d3d3d3d3d3d3fd3d3d3d3d3d3d3d0RERERERERERHR3d3d3d3d3d3d3d3d3d2dmZmZZmZmZmZmZnd3d3d3d3d3d3d3d9fd3d3d3d3d3d3d3d0RERERERERERER3d3d3d3d3d3d3d3d3d2ZmWlpZmZmZmZmZnd3d3d3d3d3d3d3d93d3d3d3d3d3d3d3d0RERERERERERERERHR3d3d3d3d3d3d3Z2ZmWZpZmZmZmZmZnd3d3d3d3d3d3d3193d3d3d3d3d3d3d3d0RERERERERERERERERERERERER0d3d3ZlpaWZmZmZmZmZmZnd3d3d3d3d3d3fX3d3d3d3d3d3d3d3d3d0RERERERERERERERERERERERER0d3dnWlmZmZmZmZmZmZmZnd3d3d3d3d3d3fd3d3d3d3d3d3d3d3d3d0RERERERERERERERERERERERER0d3dmZmZlmZpZmZmZmZmZnd3d3d3d3d3d9fd3d3d3d3d3d3d3d3d3d0RERERERERERERERERERERERER0d2dmZmZmWlplmZmZmZmZnd3d3d3d3d3d93d3d3d3d3d3d3d3d3d3d0REREREREREREREREREREREd3d3d2dmZmZmZmZlmZpZmZmZnd3d3d3d3d3193d3d3d3d3d3d3d3d3d3d0REREREREREREREREREd3d3d3d3d2ZmZmZmZmZmWlplmZmZnd3d3d3d3fX3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERER0d3d3d3d3Z2ZmZmZmZmZmZmZlmZmZnd3d3d3d3fd3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERER0d3d3d3d3Z2ZmZmZmZmZmZmZmWlpZnd3d3d3d9fd3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERER0d3d3d3d3ZmZmZmZmZmZmZmZmZmZZnd3d3d3d93d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREREREd3d3d3d3ZmZmZmZmZmZmZmZmZZmZnd3d3d3193d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERERERHR3d3d3ZmZmZmZmZmZmZmZlmZmZnd3d3fX3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERERERERERHR3ZmZmZmZmZmZmWlpZmZmZnd3d3fd3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERERERERERER3ZmZmZmZmZmZlmZmZmZmZnd3d9fd3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERERERERERHd3ZmZmZmZmZlmZmZmZmZmZnd3d93d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERERERERERHd3ZmZmZmZmZmZZmlmZmZmZnd3193d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREREREREREdHd3Z2ZmZmZmZmZmZmWlmZmZnfX3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREREREREREdHd3Z2ZmZmZmZmZmZmZmWlmZnfd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREREREREREdHd3d2ZmZmZmZmZmZmZmZlpZtfd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERERERER3d3d3d2dmZmZmZmZmZmZmZZpZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREREREdHd3d3d3d2dmZmZmZmZmZaWaWZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERER0d3d3d3d3d3dmZmZmZmZZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERHR3d3d3d3d3d3dnZmZmZmZaWlmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREdHd3d3d3d3d3d3d3ZmZmZmZmZlmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREd3d3d3d3d3d3d3d3Z2ZmZmZmZlmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREd3d3d3d3d3d3d3d3Z2ZlpmZlmlmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERER0d3d3d3d3d3d3d3d3ZmZlmlplmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERER0d3d3d3d3d3d3d3d1plpZmZplmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERER0d3d3d3d3d3d3d3d1pZmZpZmZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERER3d3d3d3d3d3dbd1tZpZmZmZmZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERER3d3d3d3d3d3dbW1mZmZmZmZmZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERER3d3d3d3d3d3dZmZmZmZmZmZmZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERER3d3d3d3d3d1mZmZmZmZmZmZmZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERER3d3d3d3d3W1mZmZmZmZmZmZmZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERER3d3d3d3d3d3d1m1mZmZmZmlmZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERHR3d3d3d3d3d3d3d3WZm1mZmlmZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERHR3d3d3d3d3d3d3d3Wbd1mmWlmZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERHR3d3d3d3d3d3d3d3d3d1tmZmWaWZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERHR3d3d3d3d3d3d3d3d3d2dmZmZZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERER3d3d3d3d3d3d3d3d3d2ZmWlpZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERHR3d3d3d3d3d3d3Z2ZmWZpZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERERERERERER0d3d3ZlpaWZmZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERERERERERER0d3dnWlmZmZmZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERERERERERER0d3dmZmZlmZpZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERERERERERER0d2dmZmZmWlplmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREREREREREd3d3d2dmZmZmZmZlmZpZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREREREd3d3d3d3d2ZmZmZmZmZmWlplmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERER0d3d3d3d3Z2ZmZmZmZmZmZmZlmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERER0d3d3d3d3Z2ZmZmZmZmZmZmZmWlpZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERER0d3d3d3d3ZmZmZmZmZmZmZmZmZmZZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREREREd3d3d3d3ZmZmZmZmZmZmZmZmZZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERERERHR3d3d3ZmZmZmZmZmZmZmZlmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERERERERERHR3ZmZmZmZmZmZmWlpZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERERERERERER3ZmZmZmZmZmZlmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERERERERERHd3ZmZmZmZmZlmZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERERERERERHd3ZmZmZmZmZmZZmlmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREREREREREdHd3Z2ZmZmZmZmZmZmWlmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREREREREREdHd3Z2ZmZmZmZmZmZmZmWlmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREREREREREdHd3d2ZmZmZmZmZmZmZmZlpZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERERERER3d3d3d2dmZmZmZmZmZmZmZZpZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREREREdHd3d3d3d2dmZmZmZmZmZaWaWZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERER0d3d3d3d3d3dmZmZmZmZZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERHR3d3d3d3d3d3dnZmZmZmZaWlmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREdHd3d3d3d3d3d3d3ZmZmZmZmZlmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREd3d3d3d3d3d3d3d3Z2ZmZmZmZlmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREd3d3d3d3d3d3d3d3Z2ZlpmZlmlmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERER0d3d3d3d3d3d3d3d3ZmZlmlplmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERER0d3d3d3d3d3d3d3d1plpZmZplmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERER0d3d3d3d3d3d3d3d1pZmZpZmZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERER3d3d3d3d3d3dbd1tZpZmZmZmZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERER3d3d3d3d3d3dbW1mZmZmZmZmZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERER3d3d3d3d3d3dZmZmZmZmZmZmZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERER3d3d3d3d3d1mZmZmZmZmZmZmZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERER3d3d3d3d3W1mZmZmZmZmZmZmZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERER3d3d3d3d3d3d1m1mZmZmZmlmZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERHR3d3d3d3d3d3d3d3WZm1mZmlmZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERHR3d3d3d3d3d3d3d3Wbd1mmWlmZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERHR3d3d3d3d3d3d3d3d3d1tmZmWaWZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERHR3d3d3d3d3d3d3d3d3d2dmZmZZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERER3d3d3d3d3d3d3d3d3d2ZmWlpZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERHR3d3d3d3d3d3d3Z2ZmWZpZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERERERERERER0d3d3ZlpaWZmZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERERERERERER0d3dnWlmZmZmZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERERERERERER0d3dmZmZlmZpZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERERERERERER0d2dmZmZmWlplmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREREREREREd3d3d2dmZmZmZmZlmZpZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREREREd3d3d3d3d2ZmZmZmZmZmWlplmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERER0d3d3d3d3Z2ZmZmZmZmZmZmZlmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERER0d3d3d3d3Z2ZmZmZmZmZmZmZmWlpZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERER0d3d3d3d3ZmZmZmZmZmZmZmZmZmZZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREREREd3d3d3d3ZmZmZmZmZmZmZmZmZZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERERERHR3d3d3ZmZmZmZmZmZmZmZlmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERERERERERHR3ZmZmZmZmZmZmWlpZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERERERERERER3ZmZmZmZmZmZlmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERERERERERHd3ZmZmZmZmZlmZmZmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERERERERERHd3ZmZmZmZmZmZZmlmZmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREREREREREdHd3Z2ZmZmZmZmZmZmWlmZmZt3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREREREREREdHd3Z2ZmZmZmZmZmZmZmWlmZtfd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREREREREREdHd3d2ZmZmZmZmZmZmZmZlpZnfd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERERERER3d3d3d2dmZmZmZmZmZmZmZZpZnfX3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREREREdHd3d3d3d2dmZmZmZmZmZaWaWZmZnd3193d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERER0d3d3d3d3d3dmZmZmZmZZmZmZmZmZnd3d93d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERERERHR3d3d3d3d3d3dnZmZmZmZaWlmZmZmZnd3d9fd3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREdHd3d3d3d3d3d3d3ZmZmZmZmZlmZmZmZnd3d3fd3d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREd3d3d3d3d3d3d3d3Z2ZmZmZmZlmZmZmZnd3d3d33d3d3d3d3d3d3d3d3d3d3d3d3d0REREREREREREREd3d3d3d3d3d3d3d3Z2ZlpmZlmlmZmZmZnd3d3d3193d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERER0d3d3d3d3d3d3d3d3ZmZlmlplmZmZmZmZnd3d3d3d93d3d3d3d3d3d3d3d3d3d3d3d0RERERERERERER0d3d3d3d3d3d3d3d1plpZmZplmZmZmZmZnd3d3d3d9fd3d3d3d3d3d3d3d3d3d3d3d0RERERERERERER0d3d3d3d3d3d3d3d1pZmZpZmZmZmZmZmZnd3d3d3d3fX3d3d3d3d3d3d3d3d3d3d3d0RERERERERERER3d3d3d3d3d3dbd1tZpZmZmZmZmZmZmZmZnd3d3d3d3d33d3d3d3d3d3d3d3d3d3d3d0RERERERERERER3d3d3d3d3d3dbW1mZmZmZmZmZmZmZmZmZnd3d3d3d3d3193d3d3d3d3d3d3d3d3d3d0RERERERERERER3d3d3d3d3d3dZmZmZmZmZmZmZmZmZmZmZnd3d3d3d3d3d93d3d3d3d3d3d3d3d3d3d0RERERERERERER3d3d3d3d3d1mZmZmZmZmZmZmZmZmZmZmZnd3d3d3d3d3d9fd3d3d3d3d3d3d3d3d3d0RERERERERERER3d3d3d3d3W1mZmZmZmZmZmZmZmZmZmZmZnd3d3d3d3d3d3fX3d3d3d3d3d3d3d3d3d0RERERERERERER3d3d3d3d3d3d1m1mZmZmZmlmZmZmZmZmZnd3d3d3d3d3d3d33d3d3d3d3d3d3d3d3d0RERERERERERHR3d3d3d3d3d3d3d3WZm1mZmlmZmZmZmZmZnd3d3d3d3d3d3d3193d3d3d3d3d3d3d3d0RERERERERERHR3d3d3d3d3d3d3d3Wbd1mmWlmZmZmZmZmZnd3d3d3d3d3d3d3d93d3d3d3d3d3d3d3d0RERERERERERHR3d3d3d3d3d3d3d3d3d1tmZmWaWZmZmZmZnd3d3d3d3d3d3d3d3fd3d3d3d3d3d3d3d0RERERERERERHR3d3d3d3d3d3d3d3d3d2dmZmZZmZmZmZmZnd3d3d3d3d3d3d3d3fX3d3d3d3d3d3d3d0RERERERERERER3d3d3d3d3d3d3d3d3d2ZmWlpZmZmZmZmZnd3d3d3d3d3d3d3d3d33d3d3d3d3d3d3d0RERERERERERERERHR3d3d3d3d3d3d3Z2ZmWZpZmZmZmZmZnd3d3d3d3d3d3d3d3d3193d3d3d3d3d3d0RERERERERERERERERERERERER0d3d3ZlpaWZmZmZmZmZmZnd3d3d3d3d3d3d3d3d3d9fd3d3d3d3d3d0RERERERERERERERERERERERER0d3dnWlmZmZmZmZmZmZmZnd3d3d3d3d3d3d3d3d3d3fd3d3d3d3d3d0RERERERERERERERERERERERER0d3dmZmZlmZpZmZmZmZmZnd3d3d3d3d3d3d3d3d3d3fX3d3d3d3d3d0RERERERERERERERERERERERER0d2dmZmZmWlplmZmZmZmZnd3d3d3d3d3d3d3d3d3d3d33d3d3d3d3d0REREREREREREREREREREREd3d3d2dmZmZmZmZlmZpZmZmZnd3d3d3d3d3d3d3d3d3d3d3193d3d3d3d0REREREREREREREREREd3d3d3d3d2ZmZmZmZmZmWlplmZmZnd3d3d3d3d3d3d3d3d3d3d3d9fd3d3d3d0RERERERERERERERER0d3d3d3d3Z2ZmZmZmZmZmZmZlmZmZnd3d3d3d3d3d3d3d3d3d3d3d3fd3d3d3d0RERERERERERERERER0d3d3d3d3Z2ZmZmZmZmZmZmZmWlpZnd3d3d3d3d3d3d3d3d3d3d3d3fX3d3d3d0RERERERERERERERER0d3d3d3d3ZmZmZmZmZmZmZmZmZmZZnd3d3d3d3d3d3d3d3d3d3d3d3d33d3d3d0REREREREREREREREREd3d3d3d3ZmZmZmZmZmZmZmZmZZmZnd3d3d3d3d3d3d3d3d3d3d3d3d3d93d3d0RERERERERERERERERERHR3d3d3ZmZmZmZmZmZmZmZlmZmZnd3d3d3d3d3d3d3d3d3d3d3d3d3d9fd3d0RERERERERERERERERERERERHR3ZmZmZmZmZmZmWlpZmZmZnd3d3d3d3d3d3d3d3d3d3d3d3d3d3fd3d0RERERERERERERERERERERERER3ZmZmZmZmZmZlmZmZmZmZnd3d3d3d3d3d3d3d3d3d3d3d3d3d3fX3d0RERERERERERERERERERERERHd3ZmZmZmZmZlmZmZmZmZmZnd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3190RERERERERERERERERERERERHd3ZmZmZmZmZmZZmlmZmZmZnd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d90REREREREREREREREREREREdHd3Z2ZmZmZmZmZmZmWlmZmZnd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d9cREREREREREREREREREREREdHd3Z2ZmZmZmZmZmZmZmWlmZnd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3c=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"bakgrunn1\"\n    },\n    \"image2\": {\n        \"data\": \"hwQgABAAAAAAAAAAAAAAAAAAAAAA////AAAAAAD///8AAAAAAP///wAAAAAA////AAAAAAAA/wAAAAAAAAD/IgAAAPD/ACIiAAAA8P8gIiIAAAAADyIiIgAAAAAiIiIiAAAAICIiIiIAAAAiEiIiIgAAABIRIiIiAAAAEhEiIiIAAAASESIiIgAAABIRIiIiAAAAEhEiIiIAAAASESIiIgAAABIRIiIiAAAAIhIiIiIAAAAgIiIiIgAAAAAvIiIiAAAA8P8gIiIAAADw/wAiIgAAAAAAAP8iAAAAAAAA/wAAAAAAAPD//wAAAAAA8P//AAAAAADw//8AAAAAAPD//wAAAAAAAAAA\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"redCar\"\n    },\n    \"image3\": {\n        \"data\": \"hwQgABAAAAAAAAAAAAAAAAAAAAAA////AAAAAAD///8AAAAAAP///wAAAAAA////AAAAAAAA/wAAAAAAAAD/iAAAAPD/AIiIAAAA8P+AiIgAAAAAD4iIiAAAAACIiIiIAAAAgIiIiIgAAACIGIiIiAAAABgRiIiIAAAAGBGIiIgAAAAYEYiIiAAAABgRiIiIAAAAGBGIiIgAAAAYEYiIiAAAABgRiIiIAAAAiBiIiIgAAACAiIiIiAAAAACPiIiIAAAA8P+AiIgAAADw/wCIiAAAAAAAAP+IAAAAAAAA/wAAAAAAAPD//wAAAAAA8P//AAAAAADw//8AAAAAAPD//wAAAAAAAAAA\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"blueCar\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image1\":\n            case \"bakgrunn1\":return img`\n1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111\n1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111\n1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111\n1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111\n1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111\n1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111\n1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111\n1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111\n1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111\n1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111\n1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111\n1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111\n1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111\n1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111\n1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111\n1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111\n1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111\n1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111\n1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111\n11111111111111111dddd111111111111111111111111111111111111dddd111111111111111111111111111111111111dddd111111111111111111111111111111111111dddd1111111111111111111\n11111111111ddddddddddd11111111111111111111111111111ddddddddddd11111111111111111111111111111ddddddddddd11111111111111111111111111111ddddddddddd111111111111111111\n11111111dddddddddddddd11111111111111111111111111dddddddddddddd11111111111111111111111111dddddddddddddd11111111111111111111111111dddddddddddddd111111111111111111\n111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111\n11111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd111111111111111111\n11111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd111111111111111111\n1111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd11111111111111111\n1111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd11111111111111111\n111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111\n111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111\n11ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd1111111\n11ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd1111111\n11ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd111111\n1dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd111111\n1dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd111111\n1dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd111111\nddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111dd\ndddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddd\ndddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddd\nddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111ddddddddddddd\nddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666dddddddddddddddddddddddd\nddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999dd\ndddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999\n9ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd999999999999\n999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999\n9999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd999999999999999\n99999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd9999999999999999\n999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999\n999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999\n9999999999666666666dd99969999999999999999999999999666666666dd99969999999999999999999999999666666666dd99969999999999999999999999999666666666dd9996999999999999999\n9999999996666666666699966999999999999999999999999666666666669996699999999999999999999999966666666666999669999999999999999999999996666666666699966999999999999999\n9999999666666666669999996699999999999999999999966666666666999999669999999999999999999996666666666699999966999999999999999999999666666666669999996699999999999999\n9999999996666666669999966999999999999999999999999666666666999996699999999999999999999999966666666699999669999999999999999999999996666666669999966999999999999999\n9999999996666666999999666699999999999999999999999666666699999966669999999999999999999999966666669999996666999999999999999999999996666666999999666699999999999999\n9999999966966666666996666669999999999999999999996696666666699666666999999999999999999999669666666669966666699999999999999999999966966666666996666669999999999999\n9999999999666666666699966999999999996999999999999966666666669996699999999999699999999999996666666666999669999999999969999999999999666666666699966999999999996999\n9999999966666666666996666669999999996999999999996666666666699666666999999999699999999999666666666669966666699999999969999999999966666666666996666669999999996999\n9996999666666666666966666666999999966699999699966666666666696666666699999996669999969996666666666669666666669999999666999996999666666666666966666666999999966699\n9996699999666666666666666699999999996699999669999966666666666666669999999999669999966999996666666666666666999999999966999996699999666666666666666699999999996699\n9966999966666666666666666666999999966999996699996666666666666666666699999996699999669999666666666666666666669999999669999966999966666666666666666666999999966999\n9996699666666666666666666666699999666699999669966666666666666666666669999966669999966996666666666666666666666999996666999996699666666666666666666666699999666699\n9966666666666666666666666669999999966669996666666666666666666666666999999996666999666666666666666666666666699999999666699966666666666666666666666669999999966669\n9996666666666666666666666666699999666699999666666666666666666666666669999966669999966666666666666666666666666999996666999996666666666666666666666666699999666699\n9996666666666666666666666666669996666669999666666666666666666666666666999666666999966666666666666666666666666699966666699996666666666666666666666666669996666669\n9966666666666666666666666666999999666699996666666666666666666666666699999966669999666666666666666666666666669999996666999966666666666666666666666666999999666699\n9666666666666666666666666666669966666669966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669966666669\n9966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669966666669966666666666666666666666666666996666666\n9966666666666666666666666666669966666666996666666666666666666666666666996666666699666666666666666666666666666699666666669966666666666666666666666666669966666666\n6666666666666666666666666666666966666666666666666666666666666666666666696666666666666666666666666666666666666669666666666666666666666666666666666666666966666666\n6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666\n6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666\n77777777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777777777777777777777\n7777777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd7777777777777777777777777777777777777777\n777777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd777777777777777777777777777777777777777\n77777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777777777777777777\n77777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777777777777777777\n7777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd7777777777777777777777777777777777777\n777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd777777777777777777777777777777777777\n77777777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777777777777777\n7777777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd7777777777777777777777777777777777\n777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd7777777777777777777777777777777777\n777777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd777777777777777777777777777777777\n77777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777777777777\n7777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd7777777777777777777777777777777\n777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd777777777777777777777777777777\n77777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd777777777777777777777777777777\n7777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777777777\n7777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd7777777777777777777777777777\n777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd777777777777777777777777777\n77777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777777\n7777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd7777777777777777777777777\n777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd7777777777777777777777777\n77777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd777777777777777777777777\n77777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777\n7777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd7777777777777777777777\n777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd777777777777777777777\n77777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd777777777777777777777\n7777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd77777777777777777777\n777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd7777777777777777777\n777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd777777777777777777\n77777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd77777777777777777\n7777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd77777777777777777\n777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd7777777777777777\n77777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd777777777777777\n7777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd77777777777777\n7777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd7777777777777\n777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd777777777777\n77777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd777777777777\n7777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd77777777777\n777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd7777777777\n77777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd777777777\n77777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd77777777\n7777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd77777777\n777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd7777777\n77777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd777777\n7777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd77777\n777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd7777\n777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd7777\n77ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd777\n7ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd77\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd7\n`;\n            case \"image2\":\n            case \"redCar\":return img`\n................................\n................................\n................................\n................................\n................................\n................................\n............222222222...........\n.......ff..22111111122.ff.......\n.......fff222111111122fff.......\n.......ff.2211111111122ff.......\n.ffff....22222222222222.........\n.ffff...2222222222222222...ffff.\n.ffffff222222222222222222ffffff.\n.ffffff222222222222222222ffffff.\n.ffff.22222222222222222222.ffff.\n.ffff.22222222222222222222.ffff.\n`;\n            case \"image3\":\n            case \"blueCar\":return img`\n................................\n................................\n................................\n................................\n................................\n................................\n............888888888...........\n.......ff..88111111188.ff.......\n.......fff888111111188fff.......\n.......ff.8811111111188ff.......\n.ffff....88888888888888.........\n.ffff...8888888888888888...ffff.\n.ffffff888888888888888888ffffff.\n.ffffff888888888888888888ffffff.\n.ffff.88888888888888888888.ffff.\n.ffff.88888888888888888888.ffff.\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables></variables><block type=\"pxt-on-start\" x=\"0\" y=\"0\"></block></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"justAssets\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v2.0.56\",\n        \"tag\": \"v2.0.56\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/2e47d3464cf6ea715ec6e630834bbe15bc2f6feb\",\n        \"target\": \"2.0.56\",\n        \"pxt\": \"11.3.59\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n"
}

```