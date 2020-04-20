'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const wordsEvents = require('./words/events.js')
const gameEvents = require('./game/events.js')
const uiEvents = require('./words/ui.js')

$(() => {
  // Listen for auth button submits.
  $('.main').on('submit', '#sign-in', authEvents.onSignIn)
  $('.main').on('submit', '#sign-up', authEvents.onSignUp)
  $('.main').on('submit', '#change-password', authEvents.onChangePassword)
  $('.main').on('submit', '#sign-out', authEvents.onSignOut)

  // Listen for new word submits
  $('.main').on('submit', '#word1', wordsEvents.onSubmit)
  $('.main').on('submit', '#word1', uiEvents.submitSuccess)

  // Listen for CRUD action on words
  $('.main').on('submit', '#index', wordsEvents.onIndex)
  $('.main').on('submit', '#delete-index', wordsEvents.onDeleteIndex)
  $('.main').on('submit', '#delete-index', uiEvents.deleteIndex)
  $('.content').on('submit', '#delete-word', wordsEvents.onDeleteWord)
  $('.content').on('submit', '#update-word-button', wordsEvents.onUpdateWord)

  // Listen for game events
  $('.main').on('submit', '#create-game', gameEvents.onCreateGame)
  $('.main').on('submit', '#join-game', gameEvents.onJoinGame)
})
