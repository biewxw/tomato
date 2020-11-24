import styled from "styled-components";

import { styleColors, styleTypo } from "../../styles/tokens";

const { colorRedPrimary } = styleColors;
const { typoHeadPrimary, typoHeadSecondary } = styleTypo;

export const TimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TimerValue = styled.h1`
  color: ${colorRedPrimary};
  font-size: ${typoHeadPrimary};
  font-weight: 600;
  line-height: 40px;
  margin-top: 12px;
  margin-bottom: 18px;
`;

export const TimerDescription = styled.h3`
  color: ${colorRedPrimary};
  font-size: ${typoHeadSecondary};
  font-weight: 500;
`;
