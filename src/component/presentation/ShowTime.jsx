import React, { memo } from "react";
import { TimeComponent } from "./TimeComponent";

const ShowTime = ({ countDown, setCountDown }) => {
  const countFloorForMinute = Math.floor(countDown / 60);
  const minute =
    countFloorForMinute <= 9 ? "0" + countFloorForMinute : countFloorForMinute;
  const countForSecond = countDown - Math.floor(countDown / 60) * 60;
  const seconds = countForSecond <= 9 ? "0" + countForSecond : countForSecond;
  console.log(seconds);
  const time = minute + " : " + seconds;
  return (
    <>
      {time}
      {countDown ? <TimeComponent setCountDown={setCountDown} /> : null}
    </>
  );
};

export default memo(ShowTime);
