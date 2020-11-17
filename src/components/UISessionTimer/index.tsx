import React from 'react';
import * as S from './styles'

interface IProps {}

const UISessionTimer: React.FC<IProps> = () => {
  return (
    <>
      <S.TimerDescription>Session in progress</S.TimerDescription>
      <S.TimerValue>22:30</S.TimerValue>
    </>
  );
};

export default UISessionTimer;