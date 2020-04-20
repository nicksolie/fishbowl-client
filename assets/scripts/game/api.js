const config = require('../config.js')
const store = require('../store')
// const getFormFields = require('../../../lib/get-form-fields.js')

// API call for submitting new words
const createGame = function () {
  console.log('createGame API')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {game: {isActive: 1}}
  })
}

const joinGame = function () {
  console.log('joinGame API')
  // const id =
  return $.ajax({
    url: config.apiUrl + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  joinGame
}
