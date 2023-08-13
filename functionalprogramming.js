function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = 'color: ${color};'
    style += `background: ${background};`
    style += 'front-size: ${fontSize}'
    console.log(message, style)
}

consoleStyler();