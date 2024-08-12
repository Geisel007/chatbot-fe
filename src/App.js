// React
import React, { useState } from 'react'
// Components
import FloatIconButton from './components/Buttons/FloatIconButton/FloatIconButton'
import Label from './components/HtmlComponents/Label/Label'
import Div from './components/HtmlComponents/Div/Div'
import Chatbot from './modals/Chatbot/Chatbot'
// Icons
import ChatbotIcon from './assets/icons/chatbot.svg'

/**
 * App Component
 * 
 * The main application component that displays a greeting message, a floating icon button to toggle the chatbot, 
 * and the chatbot modal itself. The chatbot modal is controlled by a state variable that determines its visibility.
 * 
 * @returns {JSX.Element} - A React JSX element representing the main application interface.
 */
const App = () => {

  const [openChatBotModal, setOpenChatBotModal] = useState(false)

  const handleChatBot = () => {
    setOpenChatBotModal(!openChatBotModal)
  }

  return (
    <Div>
      <Label
        className={'body1'}
      >
        Hello ChatBot!
      </Label>
      <FloatIconButton
        onClick={handleChatBot}
        icon={ChatbotIcon}
      />
      <Chatbot
        openModal={openChatBotModal}
        setOpenModal={handleChatBot}
      />
    </Div>
  )
}

export default App
