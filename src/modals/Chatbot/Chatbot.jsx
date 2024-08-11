// React
import React, { useRef, useState } from 'react'
// Components
import Div from '../../components/HtmlComponents/Div/Div'
import Image from '../../components/HtmlComponents/Image/Image'
import Label from '../../components/HtmlComponents/Label/Label'
import BasicInput from '../../components/Inputs/BasicInput/BasicInput'
import Message from '../../components/Message/Message'
// Constants
import { Constants } from '../../constants/Constants'
// Icons
import ChatbotIcon from '../../assets/icons/chatbot-14049.svg'
import CloseIcon from '../../assets/icons/close.svg'

// Styles
import './Chatbot.styles.css'

/**
 * Chatbot Component
 * 
 * A chatbot interface that allows users to send messages and displays a conversation history.
 * The chatbot UI includes a header with icons, a conversation display area, and an input field for sending messages.
 * 
 * @param {Object} props - The props object for the Chatbot component.
 * @param {boolean} props.openModal - A boolean indicating whether the chatbot modal is open.
 * @param {function} props.setOpenModal - A function to toggle the chatbot modal visibility.
 * 
 * @returns {JSX.Element} - A React JSX element representing the chatbot interface.
 */
const Chatbot = ({
  openModal,
  setOpenModal
}) => {

  const inputUserRef = useRef()

  const [messages, setMessages] = useState([])

  const handleOnClickInputUser = () => {
    const newMessage = {
      text: inputUserRef.current.value,
      type: Constants.typeMessage.SEND.type
    }
    setMessages([
      newMessage,
      ...messages
    ])
    inputUserRef.current.value = ''
  }

  return (
    openModal &&
    <Div
      className={'container-chatbot'}
    >
      <Div
        className={'header'}
      >
        <Div
          className={'description'}
        >
          <Image
            src={ChatbotIcon}
          />
          <Label
            className={'body1'}
          >
            ChatBot
          </Label>
        </Div>
        <Image
          src={CloseIcon}
          onClick={setOpenModal}
          className={'icon-close'}
        />
      </Div>
      <Div
        className={'subcontainer-chatbot'}
      >
        <Div
          className={'conversation'}
        >
          {
            messages.map((message, index) => {
              return (
                <Message
                  key={index}
                  type={message.type}
                  text={message.text}
                />
              )
            })
          }
        </Div>
      </Div>
      <BasicInput
        ref={inputUserRef}
        onClick={handleOnClickInputUser}
      />
    </Div>
  )
}

export default Chatbot
