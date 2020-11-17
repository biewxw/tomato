import styled from 'styled-components';

import { styleColors } from '../../styles/tokens';

const { colorRedPrimary, colorGrey} = styleColors;

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CounterStatus = styled.div<{ completed: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  margin: 0px 5px;
  background: ${({ completed }) => completed ? colorRedPrimary : colorGrey};
`