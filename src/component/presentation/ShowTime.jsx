import React, { memo, useState } from "react";
import { TimeComponent } from "./TimeComponent";

const ShowTime = ({ countDown, setCountDown }) => {
  return (
    <>
      {Math.floor(countDown / 60) +
        " : " +
        (countDown - Math.floor(countDown / 60) * 60)}
      {!(countDown === 0) && <TimeComponent setCountDown={setCountDown} />}
    </>
  );
};

export default memo(ShowTime);
