// React
import React from 'react'

/**
 * A reusable component for displaying images.
 * 
 * @param {Object} props - The props object for the Image component.
 * @param {string} props.src - The URL of the image to be displayed.
 * @param {string} props.alt - The alt text that describes the image for accessibility and is shown if the image fails to load.
 * @param {string} [props.className] - An optional CSS class name to apply to the image element.
 * 
 * @returns {JSX.Element} - A React JSX element representing the image.
 */
const Image = (props) => {

  return (
    <img 
      {...props}
    />
  )
}

export default Image
