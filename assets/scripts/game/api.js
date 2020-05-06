const config = require('../config.js')
const store = require('../store')
// const getFormFields = require('../../../lib/get-form-fields.js')

// API call for submitting new words
const createGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {game: {isActive: 1}}
  })
}

const joinGame = function (data) {
  console.log(data)
  store.game = data.game
  store.team = data.team
  console.log('team', store.team)
  return $.ajax({
    url: config.apiUrl + '/players/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      player: {
        user_id: store.user.id,
        team: data.team,
        game_id: data.game
      }
    }
  })
}

module.exports = {
  createGame,
  joinGame
}
