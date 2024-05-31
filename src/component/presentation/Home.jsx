import React, { useState } from "react";
import ShowTime from "./ShowTime";
import ShowWord from "./ShowWord";
import homeContainer from "../container/home.container";

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

      <input
        value={word}
        type="text"
        name=""
        id=""
        disabled={countDown <= 0}
        onChange={handelInput}
      />

      <div>Total Correct word :- {correctWord?.length}</div>

      <div>Total Wrong word :- {wrongWord?.length}</div>

      <div>
        Time Remaining :-{" "}
        <ShowTime countDown={countDown} setCountDown={setCountDown} />
      </div>

      {!countDown && (
        <>
          <div>Total WPM :- {WPM}</div>

          <div>Accuracy :- {accuracy}</div>
        </>
      )}
    </>
  );
}
