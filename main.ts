let _1 = 0
let _2 = 0
let _3 = 0
let 不快指数 = 0
input.onButtonPressed(Button.A, function () {
    _1 = 0.81 * grove.aht20ReadTemperatureC()
    _2 = 0.01 * grove.aht20ReadHumidity()
    _3 = 0.99 * grove.aht20ReadTemperatureC()
    不快指数 = _1 + (_2 * _3 + 46.3)
    if (不快指数 <= 59) {
        katakana.showString("ｻﾑｲ")
    } else if (不快指数 >= 60 && 不快指数 <= 74) {
        katakana.showString("ｶｲﾃｷ")
    } else if (不快指数 >= 75 && 不快指数 <= 79) {
        katakana.showString("ﾔﾔｱﾂｲ")
    } else {
        katakana.showString("ﾄﾃﾓｱﾂｲ")
    }
})
