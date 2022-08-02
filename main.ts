let veces = 0
function contar () {
    while (veces >= 0) {
        basic.showNumber(veces)
        veces = veces - 1
    }
}
basic.forever(function () {
    veces = 5
    contar()
    for (let index = 0; index < 20; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(500)
    }
    basic.clearScreen()
    contar()
    for (let index = 0; index < 20; index++) {
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
        basic.showIcon(IconNames.Asleep)
        basic.pause(500)
        basic.showIcon(IconNames.Angry)
        basic.pause(500)
        basic.showIcon(IconNames.Sad)
        basic.pause(500)
    }
})
