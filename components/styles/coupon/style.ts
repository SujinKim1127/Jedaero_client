import { FlexTemplate, GridTemplate } from "@/components/atoms/basics";
import styled from "@emotion/styled";

// ------ Container Level ------
export const Container = styled(FlexTemplate)`

  width: 80%;
  min-height: 80vh;
  margin: 0px auto;

  padding: 1% 5%;

  flex-flow: column nowrap;
`;

// ------ Box Level ------
export const TitleBox = styled(FlexTemplate)`
  flex-flow: column nowrap;
  row-gap: 1rem;
  margin: 10px 0px 52px 0px;
`;

export const ContentsBox = styled(GridTemplate)`
  width: 95%;
  align-self: center;

  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: 35px auto;

  row-gap: 10px;
`;

// ------ SubBox Level ------
export const LabelBox = styled(GridTemplate)`
  grid-column: 1/12;
  grid-row: 1/2;

  grid-template-columns: repeat(14, 1fr);

  column-gap: 5px;

  width: 100%;
`;

export const ListBox = styled(FlexTemplate)`
  grid-column: 1/12;

  width: 100%;
  min-height: 50vh;
  border: 1px solid #f7f7f7;
  border-radius: 6px;


  padding-top: 5px;


  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;

  row-gap: 5px;
`;

export const ListElement = styled(GridTemplate)`
  width: 100%;
  min-height: 50px;


  column-gap: 5px;

  padding: 10px 0px;

  grid-template-columns: repeat(14, 1fr);

  border-top: 0.5px solid #f4f4f4;

`;

export const ListIndex = styled(FlexTemplate)`
  grid-column: 1/4;

  justify-content: center;
  align-items: center;


  color: #0e6eff;

`;

export const ListContent = styled(FlexTemplate)`
  grid-column: 4/10;
  justify-content: center;
  align-items: center;
`;

export const ListStore = styled(FlexTemplate)`

  grid-column: 10 / 14;

  justify-content: center;
  align-items: center;
`;

export const LabelElement = styled(FlexTemplate)`
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  border-radius: 6px;
  padding: 11px 20px;
  color: #afafaf;
`;


export const DeleteElement = styled(FlexTemplate)`
  grid-column: 14/15;

  justify-content: center;
  align-items: center;
`;


export const CountLabel = styled(LabelElement)`
  grid-column: 1/4;
`;
export const ContentsLabel = styled(LabelElement)`
  grid-column: 4/10;
`;
export const InfoLabel = styled(LabelElement)`

  grid-column: 10 / 14;
`;
export const DeleteLabel = styled(LabelElement)`
  grid-column: 14 / 15;

`;

// ------ Elements Level ------
export const Title = styled.p`
  color: #3d4149;
  font-size: 26px;
  font-weight: 700;
`;

export const SubTitle = styled.p`
  color: #3d4149;
  font-size: 15px;
  font-weight: 500;
`;

export const Text = styled.p`
  color: #3d4149;
  font-size: 13px;
  font-weight: 500;
`;

interface CustomButtonProps {
  primary?: boolean;
}
export const CustomButton = styled.div<CustomButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  width: 6rem;
  height: 2rem;
  background-color: ${(props) => (props.primary ? "#f4f4f4" : "white")};
  transition: all 1s ease;
  border: 1px solid var(--g0, #f4f4f4);

  &:hover {
    border: 1px solid gray;
    transition: all 1s ease;
  }
`;


export const InfoBox = styled.div`
  display: flex;
  width: 103px;
  padding: 0px 3.9px;
  justify-content: center;
  align-items: center;
  gap: 13px;

  border-radius: 3.9px;
  background: var(--sub2, #0e6eff);

  color: var(--sub3, #dfff60);
  font-family: Pretendard;
  font-size: 15.6px;
  font-style: normal;
  font-weight: 600;
  line-height: 25.043px; /* 160.532% */
  letter-spacing: -0.936px;
`;

