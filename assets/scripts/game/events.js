// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onJoinGame = function (event) {
  event.preventDefault()
  api.joinGame()
    .then(ui.joinGameSuccess)
    .catch(console.error)
}

module.exports = {
  onCreateGame,
  onJoinGame
}
