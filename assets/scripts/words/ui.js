'use strict'

const indexWordsTemplate = require('../templates/indexWords.handlebars')
const store = require('../store')

const submitSuccess = function (data) {
  $('.words-message').text('A new word has be successfuly create!')
  $('#word1').closest('form').find('input[type=text], textarea').val('')
}

const submitFailure = function (data) {
  $('.words-message').text('failure')
}

const indexSuccess = function (data) {
  const userWords = data.words.filter(function (word) {
    console.log(word.user)
    return word.user.id === store.user.id
  })
  const indexWordsHtml = indexWordsTemplate({ words: userWords })
  $('.content').html(indexWordsHtml)
}

const indexFailure = function (error) {
  console.error(error)
}

const deleteIndex = () => {
  $('.content').empty()
}

const deleteWordSuccess = function () {
}

const deleteWordFailure = () => {
}

const updateWordSuccess = function (data) {
}

const updateWordFailure = function (data) {
}

module.exports = {
  submitSuccess,
  submitFailure,
  indexSuccess,
  indexFailure,
  deleteIndex,
  deleteWordSuccess,
  deleteWordFailure,
  updateWordSuccess,
  updateWordFailure
}
