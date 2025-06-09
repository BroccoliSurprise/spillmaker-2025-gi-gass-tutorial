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
function createPlayer () {
    mySprite = sprites.create(assets.image`redCar`, SpriteKind.Player)
    mySprite.setPosition(80, 100)
    controller.moveSprite(mySprite, 100, 0)
    mySprite.setStayInScreen(true)
}
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
