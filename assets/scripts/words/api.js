const config = require('../config.js')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields.js')

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

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/words',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

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
