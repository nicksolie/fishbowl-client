const pickWordsTemplate = require('../templates/pick-words.handlebars')
const enterGameTemplate = require('../templates/game-page.handlebars')

const joinGameSuccess = function () {
  $('.main-container').html('')
  $('.main-container').html(pickWordsTemplate)
}

const enterGameSuccess = function () {
  $('.main-container').html('')
  $('.main-container').html(enterGameTemplate)
}

module.exports = {
  joinGameSuccess,
  enterGameSuccess
}
