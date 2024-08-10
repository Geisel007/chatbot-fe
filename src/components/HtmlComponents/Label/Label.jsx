// React
import React from 'react'

/**
 * A reusable component for displaying label elements with internationalization support.
 * 
 * @param {Object} props - The props object for the Label component.
 * @param {string} [props.className] - An optional CSS class name to apply to the label element.
 * @param {React.ReactNode} [props.children] - The content to be displayed inside the label, typically text or other React elements.
 * @param {string} [props.htmlFor] - The ID of the input element that the label is associated with.
 * 
 * @returns {JSX.Element} - A React JSX element representing the label.
 */
const Label = (props) => {

  return (
    <label 
      {...props}
    />
  )
}

export default Label
