import React, { useContext } from "react";

import { TomatoContext } from "../../context/TomatoContext";
import { ReducerActionTypes } from "../../context/TomatoContext/reducers";

import * as S from "./styles";

const UISessionTimer: React.FC = () => {
  const { state, dispatch } = useContext(TomatoContext);

  return (
    <>
      <S.TimerDescription>Session in progress</S.TimerDescription>
      <S.TimerValue>22:30</S.TimerValue>
    </>
  );
};

export default UISessionTimer;
