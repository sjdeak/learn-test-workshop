import React from 'react'
import ReactDOM from 'react-dom'
import Login from '../login'



// Basic unit test
test('calls onSubmit with the username and password when submitted', () => {
  // Arrange
  // 🐨 create a fake object to hold the form field values (username and password)
  // 🐨 create a jest.fn() for your submit handler
  const handleSubmit = jest.fn()
  // 🐨 render the Login component to a div
  const div = document.createElement('div')
  ReactDOM.render(<Login onSubmit={handleSubmit}/>, div)
  //
  // 🐨 get the field nodes
  const form = div.querySelector('form')

  // 💰 const inputs = div.querySelectorAll('input')
  // 💰 const form = div.querySelector('form')
  // 🐨 fill in the field values
  const {username, password} = form.elements
  username.value = 'sjdeak'
  password.value = 'WD6Hbh9s'

  form.dispatchEvent(new window.Event('submit'))
  //
  // Act
  // 🐨 submit the form:
  // 💰 formNode.dispatchEvent(new window.Event('submit'))
  //
  // Assert
  // 🐨 ensure your submit handler was called properly
  expect(handleSubmit).toBeCalledTimes(1)
  expect(handleSubmit).toBeCalledWith({
    username: username.value,
    password: password.value
  })
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=login.step-1&em=
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
