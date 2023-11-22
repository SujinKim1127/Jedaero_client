import styled from "@emotion/styled";

import { Checkbox } from "@mui/material";

interface HorizontalBox {
  column?: string;
}

export const PageTitle = styled.p`
  color: var(--, #1c1c1e);
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
`;

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 3rem);
  padding: 5% 10% 0% 10%;
`;

export const FlexBox = styled.div<HorizontalBox>`
  display: flex;
  flex-flow: ${(props) => (props?.column ? "column nowrap" : "row nowrap")};
`;

export const NumberBall = styled.div`
  width: 24px;
  height: 24px;
  background-color: #636366;
  color: white;

  border-radius: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GridTemplate = styled.div`
  display: grid;
`;

export const FlexTemplate = styled.div`
  display: flex;
`;

