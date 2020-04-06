'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
// const store = require('../store')
const api = require('./api.js')
const ui = require('./ui.js')

const onSubmit = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.submit(data)
    .then(ui.submitSuccess)
    .catch(ui.submitFailure)
}

const onIndex = function (event) {
  event.preventDefault()
  console.log('ping onIndex')
  api.index()
    .then(ui.indexSuccess)
    .catch(ui.indexFailure)
}

const onDeleteIndex = function (event) {
  event.preventDefault()
  console.log('pinged onDeleteIndex')
  ui.deleteIndex()
}

const onDeleteWord = function (event) {
  event.preventDefault()
  // const data = getFormFields(event.target)
  // store.deleteWord = data.deleteWord
  // passed data prior
  const wordId = $(event.target).closest('section').data('id')
  api.deleteWord(wordId)
    .then(function () {
      onIndex(event)
    })
    .catch(ui.deleteWordFailure)
}

const onUpdateWord = function (event) {
  event.preventDefault()
  // console.log('pinged onUpdateWord')
  const data = getFormFields(event.target)
  const id = $(event.target).closest('section').data('id')
  console.log(id)
  api.updateWord(id, data)
    .then(function () {
      onIndex(event)
    },
    ui.updateWordSuccess)
    .catch(ui.updateWordFailure)
}

const onUpdateButton = function (event) {
  event.preventDefault()
  const id = $(event.target).closest('section').data('id')
  ui.updateButtonSuccess(id)
}

module.exports = {
  onSubmit,
  onIndex,
  onDeleteWord,
  onDeleteIndex,
  onUpdateWord,
  onUpdateButton
}
