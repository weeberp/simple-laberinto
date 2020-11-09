controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.right.isPressed()) {
        CasoMirar = 1
    } else if (controller.left.isPressed()) {
        CasoMirar = 2
    } else if (controller.up.isPressed()) {
        CasoMirar = 3
    } else if (controller.down.isPressed()) {
        CasoMirar = 4
    } else {
        CasoMirar = 0
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CasoMirar == 1) {
        Disparo = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Hero, 200, 0)
    } else if (CasoMirar == 2) {
        Disparo = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Hero, -200, 0)
    } else if (CasoMirar == 3) {
        Disparo = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Hero, 0, -200)
    } else if (CasoMirar == 4) {
        Disparo = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Hero, 0, 200)
    } else {
        Disparo = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Hero, 0, 0)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.over(true)
})
let Disparo: Sprite = null
let CasoMirar = 0
let Hero: Sprite = null
Hero = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Hero, 100, 100)
tiles.setTilemap(tiles.createTilemap(hex`0a0008000101010101010101010101000001000000000001010000010000010000010100000101000100000101010000000001000001010000010101010100010100000000000102000101010101010101010101`, img`
    2 2 2 2 2 2 2 2 2 2 
    2 . . 2 . . . . . 2 
    2 . . 2 . . 2 . . 2 
    2 . . 2 2 . 2 . . 2 
    2 2 . . . . 2 . . 2 
    2 . . 2 2 2 2 2 . 2 
    2 . . . . . 2 . . 2 
    2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.builtin.brick,sprites.dungeon.stairLarge], TileScale.Sixteen))
// Mejora, que el personaje no salga arriba del muro y que le siga la camara.
tiles.placeOnRandomTile(Hero, myTiles.transparency16)
scene.cameraFollowSprite(Hero)
