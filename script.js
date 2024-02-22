const fundo = document.getElementById('body')
let hue = 0

let fundo_intervalo = setInterval(function () {
    fundo.style.backgroundColor = `hsl(${hue}, 60%, 40%)`
    hue += 0.1
}, 10)