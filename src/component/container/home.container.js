import { useState } from "react";
const allWord =
  "We debated this decision, but in our experience it is worse to leave corrupted UI in place than to completely remove it. For example, in a product like Messenger leaving the broken UI visible could lead to somebody sending a message to the wrong person. Similarly, it is worse for a payments app to display a wrong amount than to render nothing. This change means that as you migrate to React 16, you will likely uncover existing crashes in your application that have been unnoticed before. Adding error boundaries lets you provide better user experience when something goes wrong";

export default function Home() {
  const totalTime = 80;
  const [paragraph] = useState(() => allWord.split(" "));
  const [word, setWord] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctWord, setCorrectWord] = useState([]);
  const [wrongWord, setWrongWord] = useState([]);
  const [wordIsCorrect, setWordIsCorrect] = useState(true);
  const [countDown, setCountDown] = useState(totalTime);
  const WPM = Math.floor(
    (correctWord?.length + wrongWord?.length) / (totalTime / 60)
  );
  const tempAccuracy = (
    (correctWord?.length * 100) /
    (correctWord?.length + wrongWord?.length)
  ).toFixed(2);
  const accuracy = isNaN(tempAccuracy) ? 0 : tempAccuracy;

  function handelInput(event) {
    const value = event.target.value;
    setWord(value);
    const currentValue = paragraph[currentIndex];
    if (value[value.length - 1] === " ") {
      if (currentValue === value.trim()) {
        setCorrectWord([...correctWord, currentIndex]);
      } else {
        setWrongWord([...wrongWord, currentIndex]);
      }
      setCurrentIndex(currentIndex + 1);
      setWord("");
      setWordIsCorrect(true);
    } else if (value.length === 0) {
      setWordIsCorrect(true);
    } else if (currentValue.startsWith(value)) {
      setWordIsCorrect(true);
    } else {
      setWordIsCorrect(false);
    }
  }
  return {
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
  };
}
