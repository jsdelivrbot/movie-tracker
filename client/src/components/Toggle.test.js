import React from 'react'
import { render, mount } from 'enzyme'
import Toggle from './Toggle.jsx'

test('invokes the onToggle prop when clicked', () => {
  const onToggle = jest.fn()
  const wrapper = mountToggle({onToggle})
  // console.log(wrapper.props())
  clickButton(wrapper)
  expect(onToggle).toHaveBeenCalledTimes(1)
  expect(onToggle).toBeCalledWith(true)
})

/**
 * Uses enzyme to mount the Toggle component
 * @param {Object} props - the props to mount the component with
 * @return {Object} - the enzyme wrapper
 */
function mountToggle(props = {}) {
  return mount(<Toggle onToggle={() => {}} {...props} />)
}

/**
 * finds the button in the given wrapper and simulates a click event
 * @param {Object} wrapper - the enzyme wrapper
 */
function clickButton(wrapper) {
  wrapper.find(sel('button')).simulate('click')
  // console.log(wrapper.find(sel('button')).props());
}

// this helper will make it easier for you to find
// labeled elements in the wrapper:
// const tagInput = wrapper.find(sel('tags'))
function sel(id) {
  return `[data-test="${id}"]`
}
