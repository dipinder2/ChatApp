import {useContext} from 'react';
import {MessageContext} from '../contexts/MessageContext.js';

const MessageBoard = props => {
	const messageBoardStyle={
		margin:"30px",
		display:"flex",
		flexDirection:"column",
		alignItems:"center",
		justifyContent:"flex-start",
		textDecoration:"none",
		listStyle:"none",
		height:"500px",
		width:"400px",
		overflowY:"scroll"
	}

	const {messages} = useContext(MessageContext);

	return (		<ul style={messageBoardStyle}>
	{
		messages.map(message => <li>{message}</li>)
	}
		</ul>
	);
}

export default MessageBoard;