// Your job:
// Test the case where the items provided is empty:
//   <ItemList items={[]} />
// Test the case where there are items in the list:
//   <ItemList items={['apple', 'orange', 'pear']} />
//
// Don't overthink it. This is just a practice run to warm you up
// to testing react components.

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ItemList from '../item-list'

describe('item-list.js', function() {
  it('should render nothing when the items provided is empty', function() {
    const div = document.createElement('div')
    ReactDOM.render(<ItemList items={[]}/>, div)

    expect(div.textContent).toMatch('no items')
  })

  it('should render items', function() {
    const div = document.createElement('div')
    ReactDOM.render(<ItemList items={['apple', 'orange', 'pear']}/>, div)

    expect(div).toBeTruthy()
  })
})



// and here's an outline example of your first test:
//   Create a "container" to render your component into (💰 use document.createElement('div'))
//
//   Render your component (💰 use ReactDOM.render(JSX, container))
//
//   Make your assertion(s) on the textContent of the container
//   (💰 expect's toMatch function might be what you want
//   for example: `expect('some text content').toMatch('text')`)
//
// For your second test, it will be very similar to the first.

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=basic%20react%20test&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
