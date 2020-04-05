'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const wordsEvents = require('./words/events.js')

$(() => {
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#word1').on('submit', wordsEvents.onSubmit)
  $('#word2').on('submit', wordsEvents.onSubmit)
  $('#word3').on('submit', wordsEvents.onSubmit)
  $('#word4').on('submit', wordsEvents.onSubmit)
  $('#word5').on('submit', wordsEvents.onSubmit)
  $('#index').on('submit', wordsEvents.onIndex)
  $('#delete-index').on('submit', wordsEvents.onDeleteIndex)
  $('.content').on('submit', '#delete-word', wordsEvents.onDeleteWord)
})
