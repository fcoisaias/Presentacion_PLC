def on_forever():
    for index in range(4):
        basic.show_icon(IconNames.HEART)
        basic.pause(100)
        basic.clear_screen()
    if True:
        pass
basic.forever(on_forever)
