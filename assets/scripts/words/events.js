'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSubmit = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.submit(data)
    .then(function () {
      onIndex(event)
    },
    ui.submitSuccess)
    .catch(ui.submitFailure)
}

const onIndex = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.indexSuccess)
    .catch(ui.indexFailure)
}

const onDeleteIndex = function (event) {
  event.preventDefault()
  ui.deleteIndex()
}

const onDeleteWord = function (event) {
  event.preventDefault()
  const wordId = $(event.target).closest('section').data('id')
  api.deleteWord(wordId)
    .then(function () {
      onIndex(event)
    })
    .catch(ui.deleteWordFailure)
}

const onUpdateWord = function (event) {
  event.preventDefault()
  api.updateWord()
    .then(function () {
      onIndex(event)
    },
    ui.updateWordSuccess)
    .catch(ui.updateWordFailure)
}

module.exports = {
  onSubmit,
  onIndex,
  onDeleteWord,
  onDeleteIndex,
  onUpdateWord
}
