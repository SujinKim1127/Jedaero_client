import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  border: 1px solid var(--g1, #c6c6c6);
  border-radius: 10px;

  padding: 1rem;
`;

export const ChartBox = styled.div`
  width: 100%;
  height: 90%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleBox = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  font-size: 17px;
  color: var(--g3, #636366);
  font-weight: 500;
`;
