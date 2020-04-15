'use strict'

const indexWordsTemplate = require('../templates/indexWords.handlebars')
const store = require('../store')

const submitSuccess = function (data) {
  $('#word1').closest('form').find('input[type=text], textarea').val('')
}

const submitFailure = function (data) {
}

// List all of user's words
const indexSuccess = function (data) {
  // Filter words to user(not need anymore after ProtectedController)
  const userWords = data.words.filter(function (word) {
    return word.user.id === store.user.id
  })
  // Replace .content with with index handlebar's loop
  const indexWordsHtml = indexWordsTemplate({ words: userWords })
  $('.content').html(indexWordsHtml)
}

const indexFailure = function (error) {
  console.error(error)
}

// Hide list of words
const deleteIndex = () => {
  $('.content').empty()
}

// const deleteWordSuccess = function () {
// }
//
// const deleteWordFailure = () => {
// }
//
// const updateWordSuccess = function (data) {
// }
//
// const updateWordFailure = function (data) {
// }

module.exports = {
  submitSuccess,
  submitFailure,
  indexSuccess,
  indexFailure,
  deleteIndex
  // deleteWordSuccess,
  // deleteWordFailure,
  // updateWordSuccess,
  // updateWordFailure
}
