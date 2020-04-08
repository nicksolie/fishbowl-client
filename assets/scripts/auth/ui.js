'use strict'

const getChangePasswordSignoutTemplate = require('../templates/change-password-signout-form.handlebars')
const getSignInSignUpForm = require('../templates/signin-signup-group.handlebars')
const store = require('../store')

const signUpSuccess = function () {
  $('#message').text('You have successfully signed up!')
  $('#message').addClass('sucess')
  document.getElementById('sign-up').reset()
  $('#sign-in').closest('form').find('input[type=password], textarea').val('')
  $('#sign-in').closest('form').find('input[type=text], textarea').val('')
  $('#change-password').closest('form').find('input[type=password], textarea').val('')
}

const signUpFailure = function () {
  $('#message').text('A sign up error has occured.')
  $('#message').removeClass()
  document.getElementById('sign-up').reset()
  $('#sign-in').closest('form').find('input[type=password], textarea').val('')
  $('#sign-in').closest('form').find('input[type=text], textarea').val('')
  $('#change-password').closest('form').find('input[type=password], textarea').val('')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully.')
  $('#message').removeClass()
  document.getElementById('sign-in').reset()
  $('#sign-up').closest('form').find('input[type=password], textarea').val('')
  $('#sign-up').closest('form').find('input[type=text], textarea').val('')
  $('#change-password').closest('form').find('input[type=password], textarea').val('')
  store.user = data.user
  $('.main-container').html('')
  $('.main-container').html(getChangePasswordSignoutTemplate)
}

const signInFailure = function () {
  $('#message').text('Error, please try again.')
  document.getElementById('sign-in').reset()
  $('#sign-up').closest('form').find('input[type=password], textarea').val('')
  $('#sign-up').closest('form').find('input[type=text], textarea').val('')
  $('#change-password').closest('form').find('input[type=password], textarea').val('')
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  document.getElementById('change-password').reset()
  $('#sign-up').closest('form').find('input[type=password], textarea').val('')
  $('#sign-up').closest('form').find('input[type=text], textarea').val('')
}

const changePasswordFailure = function () {
  $('#message').text('Change Password error')
  document.getElementById('change-password').reset()
}

const signOutSuccess = function () {
  $('#message').text('Sign out successfully.')
  document.getElementById('change-password').reset()
  $('.main-container').html(getSignInSignUpForm)
  $('.content').empty()
}

const signOutFailure = function () {
  $('#message').text('Change Password error.')
  document.getElementById('change-password').reset()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
