import { FlexTemplate, GridTemplate } from "@/components/atoms/basics";
import styled from "@emotion/styled";
import { Button, Checkbox, TextField } from "@mui/material";

export const Container = styled(FlexTemplate)`
  width: 80%;
  height: 100%;

  margin: 0px auto;
  flex-flow: column nowrap;

  row-gap: 20px;

  margin-bottom: 5rem;
`;

// ------ Box Level ------

export const InputBox = styled(FlexTemplate)`
  flex-flow: column nowrap;
  row-gap: 30px;

  margin-bottom: 35px;
`;

// ------ Wrapper Level ------

export const TitleWrapper = styled(FlexTemplate)``;

export const InputWrapper = styled(GridTemplate)`
  padding: 0px 5px;
  row-gap: 10px;
`;

// ------ Element Level ------

export const Title = styled.p`
  color: var(--, #1c1c1e);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.3px;
`;

export const InputLabel = styled.p``;

export const CheckBoxLabel = styled.p`
  min-width: 7rem;
`;

export const TextInputs = styled(TextField)``;

//
export const CheckWrapper = styled(FlexTemplate)`
  column-gap: 10px;
`;

export const CheckBoxs = styled(Checkbox)``;

export const BoxWithCheckBox = styled(FlexTemplate)`
  align-items: center;
  column-gap: 10px;
`;

//

export const SubmitButton = styled(Button)`
  width: 193px;
  align-self: center;
  margin-top: 2rem;
`;

interface PopupButtonProps {
  selected: boolean;
}

export const PopupOptionButton = styled(FlexTemplate)<PopupButtonProps>`
  // color: #2c5aff;
  font-family: Pretendard Variable;
  font-size: 13.984px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.839px;
  padding: 5.827px 20.977px;

  justify-content: center;
  align-items: center;

  width: 110px;
  height: 33px;

  border-radius: 5px;
  border: 1px solid var(--g0, #f4f4f4);

  background-color: ${(props) => (props.selected ? "#AEAEB250" : "white")};
  color: ${(props) => (props.selected ? "#2C5AFF" : "black")};
`;
