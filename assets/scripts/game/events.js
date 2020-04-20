// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

module.exports = {
  onCreateGame
}
