import styled from "@emotion/styled";

export const AskContainer = styled.div`
  min-height: 40vh;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, minmax(20%, 1fr));
`;

export const AskWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  &:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 5;

    grid-row-start: 1;
    grid-row-end: 2;
  }
  &:nth-child(2) {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 5;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }

  &:nth-child(3) {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 5;
    grid-row-end: 6;
  }
`;

export const AskTitle = styled.div`
  grid-column: 1 / 2;

  color: var(--g3, #636366);
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.26px;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  margin-top: 5px;

`;

export const AskContents = styled.div`
  grid-column: 2 / 6;

  width: 100%;
`;

export const AskSubTitle = styled.div`
  grid-column: 1 / 3;
  min-width: 8rem;

  display: flex;
  align-items: center;
`;
export const AskSubContent = styled.div`
  grid-column: 3 / 6;

  display: flex;
  align-items: center;
  width: 100%;

  margin: 10px 0px 10px 0px;
`;

export const AskSubBox = styled.div`
  display: flex;
  flex-flow: column nowrap;

  padding-left: 2rem;
`;

export const HorizontalBox = styled.div`
  display: flex;
`;
