import React, { useState } from "react";
import ShowTime from "./ShowTime";
import ShowWord from "./ShowWord";
import homeContainer from "../container/home.container";
const allWord =
  "We debated this decision, but in our experience it is worse to leave corrupted UI in place than to completely remove it. For example, in a product like Messenger leaving the broken UI visible could lead to somebody sending a message to the wrong person. Similarly, it is worse for a payments app to display a wrong amount than to render nothing. This change means that as you migrate to React 16, you will likely uncover existing crashes in your application that have been unnoticed before. Adding error boundaries lets you provide better user experience when something goes wrong";

export default function Home() {
  const {
    paragraph,
    currentIndex,
    wordIsCorrect,
    correctWord,
    wrongWord,
    word,
    handelInput,
    countDown,
    setCountDown,
    WPM,
    accuracy,
  } = homeContainer();
  return (
    <>
      <br />
      <div className="paragraphShow">
        <ShowWord
          paragraph={paragraph}
          currentIndex={currentIndex}
          wordIsCorrect={wordIsCorrect}
          correctWord={correctWord}
          wrongWord={wrongWord}
        />
      </div>
      <br />
      <br />
      <input
        value={word}
        type="text"
        name=""
        id=""
        disabled={countDown <= 0}
        onChange={handelInput}
      />
      <br />
      <br />
      <div>Total Correct word :- {correctWord?.length}</div>
      <br />
      <br />
      <div>Total Wrong word :- {wrongWord?.length}</div>
      <br />
      <br />
      <div>
        Time Remaining :-{" "}
        <ShowTime countDown={countDown} setCountDown={setCountDown} />
      </div>
      <br />
      <br />
      {countDown <= 0 && (
        <>
          <div>Total WPM :- {WPM}</div>
          <br />
          <br />
          <div>Accuracy :- {accuracy}</div>
        </>
      )}
    </>
  );
}
