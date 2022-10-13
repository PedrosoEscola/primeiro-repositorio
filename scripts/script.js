$(function () {
  setTimeout('desaparecer()', 1000)
  setTimeout('aparecer()', 3000)
  setTimeout('fim()', 21000)
})

$(function () {
  setTimeout('desaparecer()', 5000)
  setTimeout('aparecer()', 7000)
})

$(function () {
  setTimeout('desaparecer()', 9000)
  setTimeout('aparecer()', 11000)
})

$(function () {
  setTimeout('desaparecer()', 13000)
  setTimeout('aparecer()', 15000)
})

$(function () {
  setTimeout('desaparecer()', 19000)
})

$(function () {
  setTimeout('ingles()', 3000)
  setTimeout('espanhol()', 7000)
  setTimeout('frances()', 11000)
  setTimeout('alemao()', 15000)
})

function desaparecer() {
  $('h1').fadeOut(2000)
}

function aparecer() {
  $('h1').fadeIn(2000)
}

function ingles() {
  $('h1').html('Welcome to my first repository')
}

function espanhol() {
  $('h1').html('Bienvenidos a mi primer repositorio')
}

function frances() {
  $('h1').html('Bienvenue dans mon premier dépôt')
}

function alemao() {
  $('h1').html('Willkommen in meinem ersten Repository')
}
