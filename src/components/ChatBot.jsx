import React, { useState } from "react";
import icon_chat from "../assets/icons/chat.svg";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "motion/react";

const ChatBot = () => {
  const [showChatBox, setShowChatBox] = useState(false);

  return (
    <div className="fixed bottom-24 right-6 bg-blue- 400 flex items-end">

      <motion.div
        initial={{ width: 0, height: 0, opacity : 0 }}
        animate={{width : showChatBox ? 400 : 0, height : showChatBox ? 500 : 0, opacity : showChatBox ? 1 : 0}}
        className="overflow-clip"
      >
        <iframe
          src="https://app.wonderchat.io/chatbot/cm7lnwv9a09educqvsy73i4qk"
          allow="clipboard-read; clipboard-write"
          className={`w-full h-full `}
          id="wonderchat-iframe"
        ></iframe>
      </motion.div>

      <button
        className="size-12 cursor-pointer"
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
