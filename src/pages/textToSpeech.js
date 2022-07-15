//simport React, { Component } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

export const TextToSpeech = (props) => {
  const { speak } = useSpeechSynthesis();
  const { msg } = props;
  speak({ text: "Hello React Js" });
};
