import React, { useContext } from "react";

import { TomatoContext } from "../../context/TomatoContext";
import { ReducerActionTypes } from "../../context/TomatoContext/reducers";

import * as S from "./styles";

const UISessionCounter: React.FC = () => {
  const { state, dispatch } = useContext(TomatoContext);

  return (
    <S.CounterWrapper>
      {Array.from({ length: 4 }).map(() => {
        return <S.CounterStatus completed={false} />;
      })}
    </S.CounterWrapper>
  );
};

export default UISessionCounter;
