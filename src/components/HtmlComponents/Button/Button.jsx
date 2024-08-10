// React
import React from 'react'

/**
 * A reusable button component with support for internationalization.
 * 
 * @param {Object} props - The props object for the Button component.
 * @param {string} props.className - The CSS class name applied to the button element.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button, typically text or other React elements.
 * @param {function} props.onClick - The function to be executed when the button is clicked.
 * 
 * @returns {JSX.Element} - A React JSX element representing the button.
 */
const Button = ( props ) => {

  return (
    <button 
      {...props}
    />
  )
}

export default Button
