import React from 'react';
import MessageBoard from "./MessageBoard";
import MessageForm from "./MessageForm";
const ChatBox = (props) => {
  return (
    <>
    	<MessageForm/>
    	<MessageBoard/>
    </>
  )
}

export default ChatBox;