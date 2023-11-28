import React, { useEffect, useMemo, useState } from "react";
import * as styles from "../../../../components/styles/CInputs.style";
import { css } from "@emotion/css";
import {
  Checkbox,
  Dialog,
  FilledInput,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { createCoupon } from "@/pages/api/coupon";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";

import { getFoods } from "@/pages/api/others";
import { useCouponData } from "@/components/hooks/useCouponData";
import { useStores } from "@/components/hooks/useStores";

interface EventProps {
  storeId: number;
  type: "COUPON";
  name: string;
  conditions: string[];
  discount: number;
  quantity: number;
}

const Inputs = (props: any) => {
  const setCouponContent = props.setCouponContent;
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
  
  const [stores, setStores] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelectedStore = (store: any) => {
    setFormData({ ...formData, storeId: store.storeId });
  };

  const [formData, setFormData] = useState<EventProps>({
    storeId: 2,
    type: "COUPON",
    name: "",
    conditions: [],
    discount: 0,
    quantity: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setCouponContent({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    postData();
  };

  const postData = async () => {
    const result = await createCoupon({
      name: formData.name,
      storeId: 1,
      quantity: formData.quantity,
      discount: 3,
      type: "COUPON",
      conditions: formData.conditions,
    });
  };

  return (
    <styles.Container>
      <form onSubmit={handleSubmit}>
        <styles.InputBox>
          <styles.TitleWrapper>
            <styles.Title>1. 쿠폰정보</styles.Title>
          </styles.TitleWrapper>
          <styles.InputWrapper>
            <styles.TextInputs
              variant="outlined"
              placeholder={placeHolders[0]}
              name="name"
              onChange={handleInputChange}
            />
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
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
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
            <styles.TextInputs
              variant="outlined"
              placeholder={placeHolders[3]}
              name="condition"
              onChange={(e) => {
                let result: any = [];
                result.push(e.target.value);
                setFormData((prev) => ({ ...prev, conditions: result }));
              }}
            />
          </styles.InputWrapper>
        </styles.InputBox>

        <styles.InputBox>
          <styles.TitleWrapper>
            <styles.Title>4. 쿠폰 수 설정</styles.Title>
          </styles.TitleWrapper>
          <styles.InputWrapper>
            <styles.CheckWrapper>
              <styles.BoxWithCheckBox>
                <Checkbox
                  icon={<CircleIcon />}
                  checkedIcon={<CheckCircleIcon />}
                />
                <styles.CheckBoxLabel>선착순 n명 제한</styles.CheckBoxLabel>
              </styles.BoxWithCheckBox>
              <styles.TextInputs
                variant="outlined"
                placeholder={placeHolders[4]}
                name="quantity"
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    quantity: Number(e.target.value),
                  }));
                }}
              />
            </styles.CheckWrapper>

            <styles.CheckWrapper>
              <styles.BoxWithCheckBox>
                <Checkbox
                  icon={<CircleIcon />}
                  checkedIcon={<CheckCircleIcon />}
                />

                <styles.CheckBoxLabel>제한 인원 없음</styles.CheckBoxLabel>
              </styles.BoxWithCheckBox>
            </styles.CheckWrapper>
          </styles.InputWrapper>
          <styles.SubmitButton variant="contained" type="submit">
            등록
          </styles.SubmitButton>
        </styles.InputBox>
      </form>
    </styles.Container>
  );
};

export default Inputs;
