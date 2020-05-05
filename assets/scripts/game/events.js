const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields.js')

const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onJoinGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data.user)
  store.data = data
  api.joinGame(data)
    .then(ui.joinGameSuccess)
    .catch(console.error)
}

module.exports = {
  onCreateGame,
  onJoinGame
}
