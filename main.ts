let veces = 0
let X = 0
let Y = 0
function contar () {
    veces = 3
    while (veces >= 0) {
        basic.showNumber(veces)
        veces = veces - 1
    }
    veces = 3
}
function basico1 () {
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(500)
        basic.clearScreen()
    }
}
function CAMINITO () {
    X = 0
    Y = 0
    while (Y <= 4) {
        for (let X = 0; X <= 4; X++) {
            led.plot(X, Y)
            basic.pause(100)
        }
        Y += 1
        basic.clearScreen()
    }
    Y = 0
    for (let index = 0; index < 4; index++) {
        while (Y <= 4) {
            for (let X = 0; X <= 4; X++) {
                led.plot(X, Y)
                basic.pause(100)
            }
            Y += 1
        }
    }
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
}
function _0Y1 () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
    }
}
function basico2 () {
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
        basic.showIcon(IconNames.Asleep)
        basic.pause(500)
        basic.showIcon(IconNames.Angry)
        basic.pause(500)
        basic.showIcon(IconNames.Sad)
        basic.pause(500)
        basic.clearScreen()
    }
}
basic.forever(function () {
    basico1()
    contar()
    basico2()
    contar()
    CAMINITO()
    contar()
    _0Y1()
    contar()
    music.playMelody("B A G A G F A C5 ", 500)
})
