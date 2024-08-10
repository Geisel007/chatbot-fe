// React
import React, { forwardRef } from 'react'

/**
 * A reusable component for displaying input elements with internationalization support.
 * 
 * @param {Object} props - The props object for the Input component.
 * @param {string} [props.className] - An optional CSS class name to apply to the input element.
 * @param {string} [props.value] - The current value of the input field.
 * @param {function} [props.onChange] - A function to call when the value of the input changes.
 * 
 * @returns {JSX.Element} - A React JSX element representing the input.
 */
const Input = forwardRef((props, ref) => {

  return (
    <input
      ref={ref} 
      {...props}
    />
  )
})

export default Input
