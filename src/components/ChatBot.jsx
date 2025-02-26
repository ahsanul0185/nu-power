import React, { useState } from "react";
import icon_chat from "../assets/icons/chat.svg"
import { IoMdClose } from "react-icons/io";

const ChatBot = () => {
  const [showChatBox, setShowChatBox] = useState(false);

  return (
    <div className="fixed bottom-24 right-6 bg-bl ue-400 flex items-end">
      
      <iframe
        src="https://app.wonderchat.io/chatbot/cm7lnwv9a09educqvsy73i4qk"
        allow="clipboard-read; clipboard-write"
        className={`w-full md:w-[400px] h-[500px] origin-bottom-right duration-300 ${!showChatBox ? "scale-80 opacity-0 invisible" : "opacity-100 scale-100 visible"}`}
        id="wonderchat-iframe"
      ></iframe>
      <button className="size-12 cursor-pointer" onClick={() => setShowChatBox(prev => prev)}>
        { showChatBox ? <span className="bg-primary rounded-full w-full h-full grid place-items-center text-2xl text-white"><IoMdClose/></span> : <img src={ icon_chat } alt="" />}
      </button>
    </div>
  );
};

export default ChatBot;
