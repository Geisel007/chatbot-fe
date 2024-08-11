// React
import React, { forwardRef } from 'react'
// Components
import Input from '../../HtmlComponents/Input/Input'
import Image from '../../HtmlComponents/Image/Image'
import Div from '../../HtmlComponents/Div/Div'
// Icons
import SendIcon from '../../../assets/icons/send.svg'
// Global
import { classes } from '../../../global/handleClassnames.js'

// Styles
import './BasicInput.styles.css'

/**
 * BasicInput Component
 * 
 * A reusable input component with an icon button that triggers an action, 
 * typically used for sending messages or submitting text input. 
 * It also detects the "Enter" key press to trigger the onClick action.
 * 
 * @param {Object} props - The props object for the BasicInput component.
 * @param {function} props.onClick - The callback function to handle the click event on the send icon or when the "Enter" key is pressed.
 * 
 * @param {React.Ref} ref - A React ref to be passed to the input element for direct DOM manipulation or focus handling.
 * 
 * @returns {JSX.Element} - A React JSX element representing the basic input with an attached icon button.
 */
const BasicInput = forwardRef(
  ({
    onClick
  }, ref) => {

    const detectEnter = (e) => {
      
      if(e?.code === 'Enter') {
        onClick()
      }
    }

    return (
      <Div
        className={'container-basic-input'}
      >
        <Input
          ref={ref}
          className={classes(['basic-input', 'subtitle1'])}
          placeholder={'Any question? Type here...'}
          onKeyDown={detectEnter}
        >     
        </Input>
        <Image
          src={SendIcon}
          onClick={onClick}
          className={'icon-close'}
        />   
      </Div>
    )
  }
)

export default BasicInput
