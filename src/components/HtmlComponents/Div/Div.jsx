// React
import React, { forwardRef } from 'react'

/**
 * A reusable component for displaying div elements with custom styles.
 * 
 * @param {Object} props - The props object for the Div component.
 * @param {string} props.className - The CSS class name(s) to apply to the div element.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the div.
 * 
 * @returns {JSX.Element} - A React JSX element representing the div.
 */
const Div = forwardRef((props, ref) => {

  return (
    <div 
      ref={ref}
      {...props}
    />
  )
})

export default Div
