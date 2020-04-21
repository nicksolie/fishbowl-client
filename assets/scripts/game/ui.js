const pickWordsTemplate = require('../templates/indexWords.handlebars')

const joinGameSuccess = function () {
  $('.main-container').html('')
  $('.main-container').html(pickWordsTemplate)
}

module.exports = {
  joinGameSuccess
}
