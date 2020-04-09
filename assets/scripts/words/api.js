const config = require('../config.js')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields.js')

// API call for submitting new words
const submit = function (data) {
  event.preventDefault()
  return $.ajax({
    url: config.apiUrl + '/words',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

// API call for indexing user words
const index = function () {
  return $.ajax({
    url: config.apiUrl + '/words',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// API call for deleting a user's word
const deleteWord = (data) => {
  const wordId = $(event.target).closest('section').data('id')
  return $.ajax({
    url: config.apiUrl + '/words/' + wordId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

// API call for updating a word
const updateWord = () => {
  const id = $(event.target).closest('section').data('id')
  const data = getFormFields(event.target)
  return $.ajax({
    url: config.apiUrl + '/words/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  submit,
  index,
  deleteWord,
  updateWord
}
