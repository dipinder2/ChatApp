import './App.css';
import ChatBox from "./components/ChatBox";
import io from 'socket.io-client';
import {MessageContext} from "./contexts/MessageContext"
import { useEffect,useState } from 'react';


function App() {
  const [messages,setMessages] = useState([]);
  const [socket] = useState(() => io(':8000'));
 

  useEffect(() => {
    // we need to set up all of our event listeners
    // in the useEffect callback function
    console.log('Is this running?');
 
    // note that we're returning a callback function
    // this ensures that the underlying socket will be closed if App is unmounted
    // this would be more critical if we were creating the socket in a subcomponent
    return () => socket.disconnect(true);
  }, []);

  socket.on("NewUser",data=>setMessages([...messages,data]))
  socket.on("messageToAll", data=>setMessages([...messages,data]))

  return (
    <div className="App">
    <MessageContext.Provider value={
          {messages,setMessages,socket}
        }>
      
        <ChatBox/>
    </MessageContext.Provider>
    </div>
  );
}

export default App;
