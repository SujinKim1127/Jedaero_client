import styled from "@emotion/styled";
import { Button, ButtonGroup } from "@mui/material";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 3rem);
  padding: 5% 10% 0% 10%;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  row-gap: 10px;
`;

export const PageTitle = styled.p`
  color: var(--, #1c1c1e);
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;

  width: 100%;
`;

export const SelectionGroup = styled(ButtonGroup)`
  border-radius: 10px 0px 0px 10px;
  border: 1px solid var(--g0, #f4f4f4);
  border-color: #f4f4f4;

  margin-top: 5%;
  margin-bottom: 5%;
`;

export const SelectionItem = styled(Button)`
  width: 15rem;
`;

export const SelectedList = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  column-gap: 2rem;
  row-gap: 1.5rem;

  margin-bottom: 2rem;
`;

export const StoreInfo = styled.article`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid var(--g0, #f4f4f4);
  padding: 1rem 0rem 1rem 1rem;

  display: flex;
  flex-flow: row nowrap;

  & > div {
    &:nth-child(1) {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      padding: 5px;
      font-size: 1rem;
      row-gap: 0.2rem;
    }
    &:nth-child(2) {
      display: flex;
      flex-flow: column nowrap;
    }
  }
`;

export const AddBtn = styled(Button)`
  border: 1px solid var(--g2, #aeaeb2);
  background: var(--g0, #f4f4f4);

  padding-left: 1rem;
  padding-right: 1rem;
  align-self: flex-end;
  margin-right: 5%;
`;
