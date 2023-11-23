import { FlexTemplate, GridTemplate } from "@/components/atoms/basics";
import styled from "@emotion/styled";

export const Container = styled(FlexTemplate)`
  flex-flow: column nowrap;

  padding-top: 1rem;
  width: 80%;
  margin: 0px auto;

  row-gap: 3rem;
`;

export const UpperContainer = styled(FlexTemplate)`
  flex-flow: column nowrap;

  row-gap: 10px;
`;

export const LowerContainer = styled(GridTemplate)`
  width: 100%;
  min-height: 100vh;

  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, minmax(auto, 1fr));

  row-gap: 15px;
  column-gap: 15px;
`;
// ----- Layers ------
export const FirstBox = styled(FlexTemplate)`
  grid-column: 1/3;
  grid-row: 1/2;

  height: 100%;
  width: 100%;
  padding: 10px;
`;
export const SecondBox = styled(FlexTemplate)`
  grid-column: 3/5;
  grid-row: 1/2;
  padding: 10px;
`;
export const ThirdBox = styled(FlexTemplate)`
  grid-column: 5/7;
  grid-row: 1/2;
  border: 1px solid var(--g0, #f4f4f4);
  padding: 10px;
`;

export const FourthBox = styled(FlexTemplate)`
  grid-column: 1/4;
  grid-row: 2/4;
  border: 1px solid var(--g0, #f4f4f4);
  padding: 10px;

  justify-content: center;
  align-items: center;
`;
export const FifthBox = styled(FlexTemplate)`
  grid-column: 4/7;
  grid-row: 2/4;
  border: 1px solid var(--g0, #f4f4f4);
  padding: 10px;
`;

export const SixthBox = styled(FlexTemplate)`
  grid-column: 1/4;
  grid-row: 4/7;
  border: 1px solid var(--g0, #f4f4f4);
  padding: 10px;
`;
export const SeventhBox = styled(FlexTemplate)`
  grid-column: 4/7;
  grid-row: 4/7;
  border: 1px solid var(--g0, #f4f4f4);
  padding: 10px;
`;

// ----- Box Level ------
export const IndexBtnBox = styled(FlexTemplate)`
  column-gap: 10px;
`;

// ------ element Level ------
export const Title = styled.p`
  color: var(--, #1c1c1e);
  font-family: Pretendard Variable;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;

  margin-bottom: 20px;
`;

export const SubTitle = styled.p`
  color: #676767;
  font-family: Pretendard Variable;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;

  margin-bottom: 15px;
`;

export const IndexButton = styled(FlexTemplate)`
  border: 1px solid var(--g1, #c6c6c6);
  width: 113px;
  height: 37px;
  padding: 5.827px 20.977px;

  justify-content: center;
  align-items: center;
`;
