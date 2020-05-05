const pickWordsTemplate = require('../templates/pick-words.handlebars')
const enterGameTemplate = require('../templates/game-page.handlebars')
// const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store')


const joinGameSuccess = function () {
  $('.main-container').html('')
  $('.main-container').html(pickWordsTemplate)
}

const enterGameSuccess = function () {
  // $('.main-container').html('')
  $('.main-container').html(enterGameTemplate)
  // console.log(store.data)
  // $('.game-stats').text(store.data.team)
}

module.exports = {
  joinGameSuccess,
  enterGameSuccess
}
