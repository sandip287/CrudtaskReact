//import { TextToSpeech } from "./pages/textToSpeech";
import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { useSpeechSynthesis } from "react-speech-kit";

const ChatBotWrapper = (props) => {
  //   const { speak } = useSpeechSynthesis();

  const { speak } = useSpeechSynthesis();
  //speak({ text: "Hello React Js" });
  return (
    <div className="App">
      <button
        className="btn btn-danger navbar-btn"
        onClick={() => speak({ text: "Hello React Js" })}
      >
        Button
      </button>
      {/* <ChatBot
        steps={[
          {
            id: "q-email",
            message: "Hello. What is your email?",
            trigger: "email",
          },
          {
            id: "email",
            user: true,
            validator: (value) => {
              if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                return true;
              } else {
                return "Please enter a valid email.";
              }
            },
            trigger: "q-email1",
          },
          {
            id: "q-email1",
            message: "Thanks for your email?",
          },
        ]}
      /> */}
    </div>
  );
};

export default ChatBotWrapper;
