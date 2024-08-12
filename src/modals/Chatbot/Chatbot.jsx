// React
import React, { useEffect, useRef, useState } from 'react'
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
// Web Services Integrations
import getResponse from '../../api/implementations/getResponse/getResponse'
// Global 
import { getDateTime } from '../../global/getDateTime'

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
  const [loading, setLoading] = useState(false)
  const [userMessage, setUserMessage] = useState()

  const handleOnClickInputUser = async () => {
    if(inputUserRef.current.value === ''){
      return
    }
    const dateTime = getDateTime()
    const newMessage = {
      text: inputUserRef.current.value,
      type: Constants.typeMessage.SEND.type,
      date: dateTime.date,
      time: dateTime.time
    }
    setMessages([
      newMessage,
      ...messages
    ])
    setLoading(true)
    setUserMessage(inputUserRef.current.value)
    inputUserRef.current.value = ''
  }

  const newMessageChatBot = async (data) => {
    let newMessages = []
    data.map((message) => {
      const dateTime = getDateTime()
      newMessages.push({
        text: message.response_text,
        type: Constants.typeMessage.RECEIVED.type,
        date: dateTime.date,
        time: dateTime.time
      })
    })
    setMessages([
      ...newMessages,
      ...messages
    ])
  }
 
  const handleResponseChatBot = async (userMessage) => {
    await getResponse({
      question_pattern: userMessage,
      callback: (response) => newMessageChatBot(response),
      setLoading: (value) => setLoading(value)
    })
  }

  useEffect(() => {
    if(loading) {
      handleResponseChatBot(userMessage)
    }
  }, [loading])

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
              let previous
              if (index === (messages.length - 1)) {
                previous = message?.date
              } else {
                previous = messages[index + 1].date
              }
              return (
                <>
                  <Message
                      key={index}
                      type={message.type}
                      text={message.text}
                      time={message.time}
                      date={message.date}
                      previousDate={previous}
                    />
                  {
                    (index === (messages.length - 1)  || previous !== message.date) && 
                    <Div
                      key={index.toString() + index.toString()}
                      className={'date-conversation'}
                    >
                      <Label
                        className={'subtitle1'}
                      >
                        {message.date} 
                      </Label>
                    </Div>
                  }
                </>
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
