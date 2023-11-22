import React from "react";
import * as templateStyle from "@/components/styles/coupon/style";
import * as styles from "@/components/styles/coupon/register/style";
import Inputs from "./Inputs";

const PopupRegisterPage: React.FC = () => {
  return (
    <templateStyle.Container>
      <templateStyle.TitleBox>
        <templateStyle.Title>팝업 등록</templateStyle.Title>
        <templateStyle.SubTitle>홈 / 팝업 / 팝업등록</templateStyle.SubTitle>
        <styles.PreviewButton>미리보기</styles.PreviewButton>
      </templateStyle.TitleBox>
      <styles.ContentsBox>
        <Inputs />
      </styles.ContentsBox>
    </templateStyle.Container>
  );
};

export default PopupRegisterPage;
