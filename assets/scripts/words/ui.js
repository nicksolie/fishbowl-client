'use strict'

const indexWordsTemplate = require('../templates/indexWords.handlebars')

const submitSuccess = function (data) {
  console.log(data)
  $('.words-message').text('success')
}

const submitFailure = function (data) {
  console.log(data)
  $('.words-message').text('failure')
}

const indexSuccess = function (data) {
  console.log(data)
  const indexWordsHtml = indexWordsTemplate({ words: data.words })
  $('.index-content').append(indexWordsHtml)
}

const indexFailure = function (error) {
  console.error(error)
}

const deleteIndex = () => {
  console.log('deleteIndex pinged')
  $('.index-content').empty()
}

// const onDeleteWordSuccess = function (data) {
//
// }

// onDeleteWordFailure

module.exports = {
  submitSuccess,
  submitFailure,
  indexSuccess,
  indexFailure,
  deleteIndex
}
