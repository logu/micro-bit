input.onButtonPressed(Button.A, function () {
    if (PositionX < 0) {
        PositionX = 4
    } else {
        PositionX = PositionX - 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (PositionX > 4) {
        PositionX = 0
    } else {
        PositionX = PositionX + 1
    }
})
let PositionX = 0
PositionX = 0
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    led.plot(PositionX, 2)
})
