import React, { useContext } from "react";
import { useTimer } from "react-timer-hook";
import { TomatoContext } from "../../context/TomatoContext";

import * as S from "./styles";

const UISessionTimer: React.FC = () => {
  const { state } = useContext(TomatoContext);
  const { minutes, seconds } = useTimer({
    expiryTimestamp: new Date().setSeconds(new Date().getSeconds() + 1500),
  });

  return (
    <>
      <S.TimerDescription>Session in progress</S.TimerDescription>
      <S.TimerValue>
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </S.TimerValue>
    </>
  );
};

export default UISessionTimer;
