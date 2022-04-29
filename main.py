_4digit = 0

def on_forever():
    global _4digit
    _4digit = grove.measure_in_centimeters(DigitalPin.P0)
    music.set_volume(51)
    if _4digit <= 15:
        music.play_tone(880, music.beat(BeatFraction.QUARTER))
basic.forever(on_forever)
