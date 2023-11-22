import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";

export const AskBox = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(7, 1fr);

  margin-bottom: 1rem;
`;

export const AskTitle = styled.div`
  grid-column: 1 / 2;

  display: flex;
  justify-content: flex-start;
`;

export const AskContent = styled.div`
  grid-column: 2 / 8;

  display: flex;
  flex-flow: column nowrap;
`;

export const AskContentInnerBox = styled.div`
  width: 100%;
  display: flex;
  column-gap: 1rem;
`;

export const AskWord = styled.p`
  color: var(--g3, #636366);
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.26px;
`;

export const AskInput = styled(TextField)`
  display: flex;
  flex-grow: 1;

  margin-bottom: 1rem;

  &:hover {
    background: #e6e680;
  }
`;

export const AskButton = styled(Button)`
  min-width: 6rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  background: #e6e6e6;
  box-shadow: none;

  color: var(--g3, #636366);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 157.143% */

  &:hover {
    background: #e6e680;
  }
`;
