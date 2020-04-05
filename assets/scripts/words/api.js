const config = require('../config.js')
const store = require('../store')

const submit = function (data) {
  event.preventDefault()
  console.log('submit pinged')
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

module.exports = {
  submit,
  index
}
