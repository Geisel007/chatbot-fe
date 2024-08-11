// React
import React from 'react'
// Components
import Div from '../HtmlComponents/Div/Div'
import Label from '../HtmlComponents/Label/Label'
// Global
import { classes } from '../../global/handleClassnames'
// Constants
import { Constants } from '../../constants/Constants'

// Styles
import './Message.styles.css'

/**
 * Message Component
 * 
 * A reusable component for displaying messages with different styles based on the message type.
 * The message type determines whether the message is styled as sent or received.
 * 
 * @param {Object} props - The props object for the Message component.
 * @param {string} [props.type=Constants.typeMessage.SEND] - The type of the message, used to apply different styles (e.g., 'SEND' or 'RECEIVED').
 * @param {string} props.text - The text content of the message.
 * 
 * @returns {JSX.Element} - A React JSX element representing the message.
 */
const Message = ({
  type = Constants.typeMessage.SEND,
  text
}) => {
  return (
    <Div
      className={classes(['container-message',
        type === Constants.typeMessage.SEND.type ?
          'message-send' : 'message-received'
      ])}
    >
      <Label
        className={'subtitle1'}
      >
        {text}
      </Label>
    </Div>
  )
}

export default Message
