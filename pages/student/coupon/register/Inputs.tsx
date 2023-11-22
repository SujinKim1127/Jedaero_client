import React, { useMemo } from "react";
import * as styles from "./Inputs.style";
import { css } from "@emotion/css";
import { FilledInput, IconButton, InputAdornment } from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";

const Inputs: React.FC = () => {
  const placeHolders = useMemo(
    () => [
      'ex- “제대로 사용자 한정, 한 번 더 카페 1900원 할인쿠폰"',
      "바로가기 가게를 찾아보세요 ",
      "릴리",
      'ex- “20,000원 이상 구매시"',
      "ex- n을 설정해주세요",
    ],
    []
  );
  return (
    <styles.Container>
      <styles.InputBox>
        <styles.TitleWrapper>
          <styles.Title>1. 쿠폰정보</styles.Title>
        </styles.TitleWrapper>
        <styles.InputWrapper>
          <styles.TextInputs variant="outlined" placeholder={placeHolders[0]} />
        </styles.InputWrapper>
      </styles.InputBox>

      <styles.InputBox>
        <styles.TitleWrapper>
          <styles.Title>2. 쿠폰 발송 가게</styles.Title>
        </styles.TitleWrapper>
        <styles.InputWrapper
          className={css`
            display: flex;
            justify-content: space-between;
            width: 100%;
            align-self: center;
          `}
        >
          <FilledInput
            id="outlined-adornment-password"
            className={css`
              width: 50%;
            `}
            placeholder={placeHolders[1]}
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <SearchTwoToneIcon />
                </IconButton>
              </InputAdornment>
            }
          />
          <styles.TextInputs
            variant="filled"
            placeholder={placeHolders[2]}
            className={css`
              width: 49%;
            `}
          />
        </styles.InputWrapper>
      </styles.InputBox>

      <styles.InputBox>
        <styles.TitleWrapper>
          <styles.Title>3. 사용 조건</styles.Title>
        </styles.TitleWrapper>
        <styles.InputWrapper>
          <styles.TextInputs variant="outlined" placeholder={placeHolders[3]} />
        </styles.InputWrapper>
      </styles.InputBox>

      <styles.InputBox>
        <styles.TitleWrapper>
          <styles.Title>4. 쿠폰 수 설정</styles.Title>
        </styles.TitleWrapper>
        <styles.InputWrapper>
          <styles.CheckWrapper>
            <styles.BoxWithCheckBox>
              <styles.CheckBoxs />
              <styles.CheckBoxLabel>선착순 n명 제한</styles.CheckBoxLabel>
            </styles.BoxWithCheckBox>
            <styles.TextInputs
              variant="outlined"
              placeholder={placeHolders[4]}
            />
          </styles.CheckWrapper>

          <styles.CheckWrapper>
            <styles.BoxWithCheckBox>
              <styles.CheckBoxs />
              <styles.CheckBoxLabel>제한 인원 없음</styles.CheckBoxLabel>
            </styles.BoxWithCheckBox>
          </styles.CheckWrapper>
        </styles.InputWrapper>
        <styles.SubmitButton variant="contained">등록</styles.SubmitButton>
      </styles.InputBox>
    </styles.Container>
  );
};

export default Inputs;
