function createObstacle () {
    let fart = 0
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
let list: Sprite[] = []
let mySprite2: Sprite = null
scene.setBackgroundImage(assets.image`bakgrunn1`)
