import React, { useEffect } from "react";

export const TimeComponent = ({ setCountDown }) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountDown((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
};
