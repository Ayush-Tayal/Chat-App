import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { signout } from '../../Helpers/auth';
import './Chat.css';
import { database } from '../../firebase';
import ChatBox from '../ChatBox/ChatBox';

const Chat = (props) => {
    const [users, setUsers] = useState([])
    // const user = props.user;
    // // console.log("props", props)
    // console.log("cuurent user in chat",user)
    // // console.log("user email", user.email)

    const [msgs, setMsgs] = useState([])
    const history = useHistory();

    const handleSignOut=async ()=>{
        await signout();
        localStorage.removeItem("userInfo");
        history.push('/chat-app')
        console.log("Sign out clicked")
    }

    const readUsersFromDB=()=>{
        database.ref("users").on("value", (snapshot)=>{
            let chatUsers = []

            snapshot.forEach((snap)=>{
                const currUser = snap.val();
                chatUsers.push({
                    name:currUser.name,
                    email:currUser.email
                });
            })
            console.log("all users",chatUsers)
            setUsers(chatUsers);
            
        })
    }

    const readMsgFromDB=()=>{
        database.ref("msgs").on("value", (snapshot)=>{
            let messages = [];

            snapshot.forEach((snap)=>{
                const currMsg = snap.val();
                messages.push({
                    msg:currMsg
                })
            })
            // console.log("Messages are", messages);
            setMsgs(messages);   
        })
    }

    useEffect(()=>{
        readUsersFromDB();
        readMsgFromDB();
    
    },[])

    const [showChatBox, setShowChatBox] = useState(false);

    const handleChatWithUsers=()=>{
        // console.log("Chat with users clicked");
        setShowChatBox(true);
    }


    return (
        <div className="chat-component">
            <div className="chat">
                <div className="chatUsers">
                    <h3>All Users</h3>
                    {
                        users.map((user, i)=>
                            <div key={i}>
                                <li> {user.name} </li>
                            </div> 
                        )
                    }
                    <button onClick={handleChatWithUsers} >Let's Chat</button>
                </div>

                <div className="signout-btn">
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
            </div>

            <div className="chats">
                {
                    showChatBox &&
                    <div>
                        <ChatBox msgs={msgs}/>
                    </div> 
                }           
                
            </div>
        
        </div>
    )
}

export default Chat
