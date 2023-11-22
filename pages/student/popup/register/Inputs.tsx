import React, { useEffect, useMemo, useState } from "react";
import * as styles from "./Inputs.style";
import { css } from "@emotion/css";
import { FilledInput, IconButton, InputAdornment } from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { DateTimePicker } from "@mui/x-date-pickers";
import { postPopups } from "@/pages/api/popup";

interface ParamProps {
  title: string;
  content: string;
  endDate: "하루" | "일주일간" | "2주간" | "한달간" | "";
  reservation: string;
  storeId: number;
}

const Inputs: React.FC = () => {
  const placeHolders = useMemo(
    () => [
      "제목을 입력해주세요",
      "내용을 입력해주세요",
      "2023.11.10오전 11:33:44",
      "바로가기 가게를 찾아보세요",
      "릴리",
    ],
    []
  );

  const [formData, setFormData] = useState<ParamProps>({
    title: "",
    content: "",
    endDate: "",
    reservation: "",
    storeId: 2,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    postData();
  };

  const postData = async () => {
    const result = await postPopups({
      title: formData.title,
      content: formData.content,
      reservation: formData.reservation,
      endDate: formData.endDate,
      storeId: formData.storeId,
    });
    console.log(result);
  };

  useEffect(() => {
    console.log(JSON.stringify(formData));
  }, [formData]);

  return (
    <styles.Container>
      <form onSubmit={handleSubmit}>
        <styles.InputBox>
          <styles.TitleWrapper>
            <styles.Title>1. 팝업정보</styles.Title>
          </styles.TitleWrapper>
          <styles.InputWrapper>
            <styles.TextInputs
              variant="outlined"
              placeholder={placeHolders[0]}
              onChange={handleInputChange}
              name="title"
            />
            <styles.TextInputs
              variant="outlined"
              placeholder={placeHolders[1]}
              multiline
              rows={8}
              onChange={handleInputChange}
              name="content"
            />
          </styles.InputWrapper>
        </styles.InputBox>

        <styles.InputBox>
          <styles.TitleWrapper>
            <styles.Title>2. 팝업기간</styles.Title>
          </styles.TitleWrapper>
          <styles.InputWrapper>
            <styles.CheckWrapper>
              <styles.BoxWithCheckBox>
                <styles.CheckBoxs />
                <styles.CheckBoxLabel>기간 지정</styles.CheckBoxLabel>
              </styles.BoxWithCheckBox>
              <div
                className={css`
                  display: flex;
                  column-gap: 10px;
                  align-items: center;
                `}
              >
                <styles.PopupOptionButton
                  selected={formData.endDate == "하루" ? true : false}
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, endDate: "하루" }));
                  }}
                >
                  하루
                </styles.PopupOptionButton>
                <styles.PopupOptionButton
                  selected={formData.endDate == "일주일간" ? true : false}
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, endDate: "일주일간" }));
                  }}
                >
                  일주일간
                </styles.PopupOptionButton>
                <styles.PopupOptionButton
                  selected={formData.endDate == "2주간" ? true : false}
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, endDate: "2주간" }));
                  }}
                >
                  2주간
                </styles.PopupOptionButton>
                <styles.PopupOptionButton
                  selected={formData.endDate == "한달간" ? true : false}
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, endDate: "한달간" }));
                  }}
                >
                  1달간
                </styles.PopupOptionButton>
              </div>
            </styles.CheckWrapper>
            <styles.CheckWrapper>
              <styles.BoxWithCheckBox>
                <styles.CheckBoxs />
                <styles.CheckBoxLabel>제한 없음</styles.CheckBoxLabel>
              </styles.BoxWithCheckBox>
            </styles.CheckWrapper>
          </styles.InputWrapper>
        </styles.InputBox>

        <styles.InputBox>
          <styles.TitleWrapper>
            <styles.Title>3. 발송시간</styles.Title>
          </styles.TitleWrapper>
          <styles.InputWrapper>
            <styles.CheckWrapper>
              <styles.BoxWithCheckBox>
                <styles.CheckBoxs
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      reservation: "실시간",
                    }));
                  }}
                />
                <styles.CheckBoxLabel>실시간</styles.CheckBoxLabel>
              </styles.BoxWithCheckBox>
            </styles.CheckWrapper>
            <styles.CheckWrapper>
              <styles.BoxWithCheckBox>
                <styles.CheckBoxs />
                <styles.CheckBoxLabel>예약</styles.CheckBoxLabel>
              </styles.BoxWithCheckBox>
              <DateTimePicker
                label="선택해주세요"
                onChange={(newValue) => {
                  let date = `${newValue.$y}-${newValue.$M}-${newValue.$D} ${newValue.$H}:${newValue.$m}`;
                  console.log(date);
                  setFormData((prev) => ({
                    ...prev,
                    reservation: date,
                  }));
                }}
              />
            </styles.CheckWrapper>
          </styles.InputWrapper>
        </styles.InputBox>

        <styles.InputBox>
          <styles.TitleWrapper>
            <styles.Title>4. 가게 바로가기</styles.Title>
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
              placeholder={placeHolders[3]}
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
              placeholder={placeHolders[4]}
              className={css`
                width: 49%;
              `}
            />
          </styles.InputWrapper>
        </styles.InputBox>
        <styles.SubmitButton variant="contained" type="submit">
          등록
        </styles.SubmitButton>
      </form>
    </styles.Container>
  );
};

export default Inputs;
