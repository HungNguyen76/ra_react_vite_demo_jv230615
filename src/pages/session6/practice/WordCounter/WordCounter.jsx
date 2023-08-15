import { useState } from "react";
import "./WordCounter.css";

export default function WordCounter() {
  const [text, setText] = useState("");

  let words = text
    .trim()
    .split(/\s+/)
    .filter((word) => word != "");

  let charsCount = text.length;
  let wordsCount = words.length;
  let charsExclSpaces = text.replace(/\s/g, "").length;
  return (
    <div className="word-count">
      <div className="main-title">Word Count</div>
      <div className="descriptor">Tool to count words and characters</div>
      <div className="counters">
        <div className="words-counter">
          <div className={wordsCount > 0 ? "colored-count" : "uncolored-count"}>
            {wordsCount}
          </div>
          <div className={wordsCount > 0 ? "colored-text" : "uncolored-text"}>
            Words
          </div>
        </div>
        <div className="chars-counter">
          <div className={charsCount > 0 ? "colored-count" : "uncolored-count"}>
            {charsCount}
          </div>
          <div className={charsCount > 0 ? "colored-text" : "uncolored-text"}>
            Characters
          </div>
        </div>
        <div className="chars-excl-counter">
          <div
            className={
              charsExclSpaces > 0 ? "colored-count" : "uncolored-count"
            }
          >
            {charsExclSpaces}
          </div>
          <div
            className={charsExclSpaces > 0 ? "colored-text" : "uncolored-text"}
          >
            Characters excluding spaces
          </div>
        </div>
      </div>
      <textarea
        placeholder="Type or paste your text"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
    </div>
  );
}
