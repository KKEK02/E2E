import React, { useState } from 'react';
import { getchatIDs,getChat,isUserNameUnique,assignUserName } from './Firebase';


export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [activeChatID,setActiveChatID] = useState(0); 
    const handleSend = ()=> {
        if (!inputValue.trim()) return;
        setMessages([...messages, inputValue]);
        setInputValue('');
    }

    //load chats IDs
    const [chatIDs,updateChatIDs] = useState();
    getchatIDs(updateChatIDs);

    
    //load messages
    (activeChatID != "")? setMessages(getChat(activeChatID)):console.log("No chat selected");

    //chat list
    function ChatList() {
        return (

            <div>
                {chatIDs}
            </div>

        //    chatIDs.map((chatID, index) => (
        //         <div key={index} onClick={()=>setActiveChatID(chatID)}>
        //             Chat {chatID}
        //         </div>
        //     ))
        );
    }
    //search bar
    function Search() {
        return <input placeholder="Search" />;
    }
    //active chat
    function ActiveChat({ messages }) {

        return (
            <div>
                {messages.map((message, index) => (
                    <div key={index}>{message}</div>
                ))}
            </div>
        );
    }

    return (
        <div>
            <Search/>
            <ChatList/>

            <ActiveChat messages={messages} />
        </div>
    );
}