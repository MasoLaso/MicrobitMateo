input.onButtonPressed(Button.A, function () {
    strip.shift(-1)
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    strip.shift(1)
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 11, NeoPixelMode.RGB)
let range = strip.range(0, 4)
range.showColor(neopixel.colors(NeoPixelColors.Red))
strip.show()
basic.forever(function () {
    for (let index = 0; index < 7; index++) {
        strip.shift(1)
        strip.show()
        basic.pause(100)
    }
    for (let index = 0; index < 7; index++) {
        strip.shift(-1)
        strip.show()
        basic.pause(100)
    }
})
