// React
import React from 'react'
// Components
import Button from '../../HtmlComponents/Button/Button'
import Image from '../../HtmlComponents/Image/Image'

// Styles
import './FloatIconButton.styles.css'

/**
 * FloatIconButton Component
 * 
 * A floating icon button component that wraps an icon image inside a button. 
 * This component is typically used for actions that need to be prominently displayed, 
 * such as adding a new item or triggering a specific event.
 * 
 * @param {function} onClick - A callback function that is executed when the button is clicked.
 * @param {string} icon - The source URL or path of the icon image to be displayed inside the button.
 */
const FloatIconButton = ({
  onClick,
  icon
}) => {

  return (
    <Button
      className={'float-button'}
      onClick={onClick}
    >
      <Image
        src={icon}
        className={'icon'}
      />
    </Button>
  )
}

export default FloatIconButton
