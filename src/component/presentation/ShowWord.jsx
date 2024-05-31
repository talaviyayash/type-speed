import React, { memo } from "react";

const ShowWord = ({
  paragraph,
  currentIndex,
  wordIsCorrect,
  correctWord,
  wrongWord,
}) => {
  return (
    <>
      {paragraph.map((item, index) => {
        let classCondition =
          index === currentIndex
            ? wordIsCorrect
              ? "correct correct-background"
              : "wrong wrong-background"
            : correctWord.includes(index)
            ? "correct"
            : wrongWord.includes(index)
            ? "wrong"
            : "";
        return (
          <span key={index}>
            {"  "}
            <span className={classCondition}>{item}</span>
          </span>
        );
      })}
    </>
  );
};

export default memo(ShowWord);
