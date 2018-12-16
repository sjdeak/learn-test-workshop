import React from 'react'
import ReactDOM from 'react-dom'
import Login from '../../components/login'

jest.mock('../../utils/apis', () => {
  return {
    posts: {
      create: jest.fn(() => Promise.resolve())
    }
  }
})

test('calls onSubmit with the username and password when submitted', () => {
  const div = document.createElement('div')

  // Arrange
  // create a fake user, post, history, and api
  //
  // use ReactDOM.render() to render the editor to a div
  ReactDOM.render(<Login/>, div)
  // fill out form elements with your fake post
  //
  // Act
  // submit form
  //
  // wait for promise to settle
  //
  // Assert
  // ensure the create function was called with the right data
})

// TODO later...
test('snapshot', () => {})
