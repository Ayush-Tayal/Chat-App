import React, { useState } from "react";
import { writeMessages } from "../../Helpers/db";
import "./ChatBox.css";

const ChatBox = (props) => {
  const [inputMsg, setInputMsg] = useState("");

  const email = localStorage.getItem("userInfo");

  const msgs = props.msgs;

  const handleSendMessage = (e) => {
    e.preventDefault();
    writeMessages(inputMsg, email);
    setInputMsg("");
  };

  return (
    <div className="chat-box">
      <div className="message-area ">
        {msgs.map((currMsg, i) => {
          return (
            <div
              className={currMsg.msg.email === email ? "right_msg" : "left_msg"}
              key={i}
            >
              <p>{currMsg.msg.content}</p>
              <br></br>
            </div>
          );
        })}
      </div>

      <form className="form">
        <input
          placeholder="Type your message here..."
          value={inputMsg}
          onChange={(e) => {
            setInputMsg(e.target.value);
          }}
        />
        <button type="submit" onClick={handleSendMessage}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ChatBox;
