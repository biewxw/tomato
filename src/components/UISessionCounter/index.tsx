import React, { useState } from 'react';

import * as S from './styles';

interface IProps { }

const UISessionCounter: React.FC<IProps> = () => {
  const [sessionCounters, setSessionCounters] = useState([
    { completed: false },
    { completed: false },
    { completed: false },
    { completed: false },
  ]);

  return (
    <S.CounterWrapper>
      { sessionCounters.map(({ completed }) => <S.CounterStatus completed={completed} />) }
    </S.CounterWrapper>
  );
};

export default UISessionCounter;