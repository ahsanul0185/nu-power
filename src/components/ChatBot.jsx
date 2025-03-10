import React, { useState } from "react";
import icon_chat from "../assets/icons/chat.svg";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "motion/react";

const ChatBot = () => {
  const [showChatBox, setShowChatBox] = useState(false);

  return (
    <div className={`fixed bottom-24 right-0 sm:right-6 ${showChatBox ? "w-full sm:w-fit" : ""} sm:pl-0  flex flex-col sm:flex-row items-end gap-3 sm:gap-0`}>

      <div
        // initial={{ width: 0, height: 0, opacity : 0 }}
        // animate={{width : showChatBox ? 400 : 0, height : showChatBox ? 500 : 0, opacity : showChatBox ? 1 : 0}}
        className={`overflow-clip duration-300 ${showChatBox ? "w-full sm:w-[400px] h-[500px] opacity-100" : " opacity-0 w-0 h-0"}`}
      >
        <iframe
          src="https://app.wonderchat.io/chatbot/cm7m6wjb301j1dvezo32avvym"
          allow="clipboard-read; clipboard-write"
          className={`w-full h-full `}
          id="wonderchat-iframe"
        ></iframe>
      </div>

      <button
        className="size-10 md:size-12 cursor-pointer mr-6 sm:mr-0"
        onClick={() => setShowChatBox((prev) => !prev)}
      >
      
        {showChatBox ? (
          <motion.span initial={{rotate : -90}} animate={{rotate : 0}} exit={{rotate : -90}} className={`bg-[#dd6b20] rounded-full w-full h-full grid place-items-center text-2xl text-white`}>
            <IoMdClose />
          </motion.span>
        ) : (
          <motion.img initial={{rotate : 60}} animate={{rotate : 0}} exit={{rotate : 60}} src={icon_chat} alt="" />
          )}
     
      </button>
    </div>
  );
};

export default ChatBot;
