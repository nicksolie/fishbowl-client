'use strict'

const indexWordsTemplate = require('../templates/indexWords.handlebars')
const store = require('../store')


const submitSuccess = function (data) {
  console.log(data)
  $('.words-message').text('success')
}

const submitFailure = function (data) {
  console.log(data)
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

const deleteWordSuccess = function (data) {
  indexSuccess(data)
}

const deleteWordFailure = () => {

}

module.exports = {
  submitSuccess,
  submitFailure,
  indexSuccess,
  indexFailure,
  deleteIndex,
  deleteWordSuccess,
  deleteWordFailure
}
