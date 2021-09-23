import {useContext,useRef} from 'react';
import {MessageContext} from "../contexts/MessageContext"


const MessageForm = (props) => {
	const {messages,setMessages,socket} = useContext(MessageContext);
	const msgRef = useRef("");
	const organizing = {
		display:"flex",
		flexDirection:"column",
		alignItems:"center",
		justifyContent:"center"
		 
	}

	const onSubmit = e =>{
		e.preventDefault();
		e.stopPropagation();
		socket.emit("send-message", msgRef.current.value)
		msgRef.current.value = "";
	}

  return (
    <form style={organizing} method="post" onSubmit={onSubmit}>
    	<p>
    		<label for="message">Message: </label>
    		<textarea ref={msgRef} id="#message" placeholder="enter message" rows="1" cols="40"></textarea>
    	</p>
    	<button className="btn btn-primary">send</button>
    </form>
  )
}

export default MessageForm;