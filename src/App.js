import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😄": "Smaile",
  "😶": "disbelife",
  "😑": "sad",
  "🥡": "takeout box",
  "💌": "love",
  "😔": "annoyance",
  "❤️": "hart",
  "😡": "anger",
  "🤔": "thinking",
  "🤒": "not well"
  /** add some more to show how the app now expands when there's new data */
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState(""); /** concept 2 is useState */
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Welcome inside out!</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      <h3>We Know Emoji</h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{
            fontSize: "2rem",
            padding: "0.5rem",
            cursor: "pointer",
            marginTop: "2rem"
          }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
