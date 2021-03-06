const pickWordsTemplate = require('../templates/pick-words.handlebars')
const enterGameTemplate = require('../templates/game-page.handlebars')
// const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store')


const joinGameSuccess = function () {
  $('.main-container').html('')
  $('.main-container').html(pickWordsTemplate)
}

const enterGameSuccess = function (data) {
  $('.main-container').html('')
  $('.content').html('')
  const enterGameHTML = enterGameTemplate({game: store.game})
  $('.main-container').html(enterGameHTML)
  console.log('enterGame data', data.words)
  // $('.game-stats').text(store.data.team)
}

module.exports = {
  joinGameSuccess,
  enterGameSuccess
}
