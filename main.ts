input.onButtonPressed(Button.A, function () {
    voeden += 5
})
input.onButtonPressed(Button.B, function () {
    knuffelen += 5
})
let knuffelen = 20
let voeden = 20
let dood = 0
basic.forever(function () {
    knuffelen += -1
    voeden += -1
    basic.pause(1000)
})
basic.forever(function () {
    if (dood == 0) {
        if (voeden >= 10 && knuffelen >= 10) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
        } else if (voeden <= 0 || knuffelen <= 0) {
            dood = 1
        } else if (voeden < 10 || knuffelen < 10) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
        }
    }
})
basic.forever(function () {
    if (dood == 1) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})
