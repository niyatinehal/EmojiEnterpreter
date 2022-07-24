import React from "react";
import "./styles.css";
import { useState } from "react";

var EmojiDictionary = {
  "😀": "smiley",
  "🤨": "suspicious",
  "🥶": "cold",
  "😡": "angry",
  " 😘": "Face Blowing a Kiss",
  "🤑": "Money-Mouth Face"
};

var emojisWeKnow = Object.keys(EmojiDictionary);

export default function App() {
  const [meaning, setmeaning] = useState("");

  function inputEmojiHandler(event) {
    var userInput = event.target.value;

    var meaning = EmojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "this emoji is not in out database";
    }

    setmeaning(meaning);
  }

  function getClickHandler(emoji) {
    var meaning = EmojiDictionary[emoji];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>EMOJI FINDER</h1>
      <input onChange={inputEmojiHandler}></input>
      <h2>{meaning}</h2>
      <h3>
        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              key={emoji}
              onClick={() => getClickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "1.5rem", cursor: "pointer" }}
            >
              {" "}
              {emoji}
              {""}{" "}
            </span>
          );
        })}
      </h3>
    </div>
  );
}
