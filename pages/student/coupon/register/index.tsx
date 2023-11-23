import React, { useState } from "react";
import * as templateStyle from "@/components/styles/coupon/style";
import * as styles from "@/components/styles/coupon/register/style";
import Inputs from "./Inputs";
import { Modal } from "@mui/material";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { FlexTemplate } from "@/components/atoms/basics";
import CouponBackGround from "@/components/atoms/CouponBackground.svg";

const CouponRegisterPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [couponContent, setCouponContent] = useState({
    type: "COUPON 미리보기",
    conditions: ["쿠폰 사용조건"],
    name: "쿠폰 정보",
  });

  console.log(couponContent);
  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <templateStyle.Container>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={css`
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <ModalContainer>
          <CouponBackGround />
          <LayerContainer>
            <LeftContainer>
              <LeftTitle>{couponContent.type}</LeftTitle>
              <LeftContent>{couponContent.name}</LeftContent>
              <LeftContent>{couponContent.conditions[0]}</LeftContent>
            </LeftContainer>
            <RightContainer>
              <RightTitle>사용하기</RightTitle>
            </RightContainer>
          </LayerContainer>
        </ModalContainer>
      </Modal>
      <templateStyle.TitleBox>
        <templateStyle.Title>쿠폰 등록</templateStyle.Title>
        <templateStyle.SubTitle>홈 / 쿠폰 / 쿠폰등록</templateStyle.SubTitle>
        <styles.PreviewButton onClick={handleOpen}>
          미리보기
        </styles.PreviewButton>
      </templateStyle.TitleBox>
      <styles.ContentsBox>
        <Inputs setCouponContent={setCouponContent} />
      </styles.ContentsBox>
    </templateStyle.Container>
  );
};
export default CouponRegisterPage;

const ModalContainer = styled(FlexTemplate)`
  width: 600px;
  height: 187px;
  position: relative;
`;

const LayerContainer = styled(FlexTemplate)`
  position: absolute;
  width: 600px;
  height: 187px;
`;

const LeftContainer = styled(FlexTemplate)`
  width: 450px;
  height: 187px;

  flex-flow: column nowrap;
  align-items: flex-start;
  padding-left: 49.3px;
  padding-top: 37.4px;
`;

const LeftTitle = styled.p`
  color: #fff;
  text-align: center;
  font-family: Pretendard Variable;
  font-size: 30.6px;
  font-style: normal;
  font-weight: 600;
`;

const LeftContent = styled.p`
  color: var(--g0, #f4f4f4);
  text-align: center;
  font-family: Pretendard Variable;
  font-size: 20.4px;
  font-style: normal;
  font-weight: 500;
`;

const RightTitle = styled.p`
  color: var(--sub3, #dfff60);
  text-align: center;
  font-family: Pretendard Variable;
  font-size: 23.8px;
  font-style: normal;
  font-weight: 600;
`;

const RightContainer = styled(FlexTemplate)`
  width: 150px;
  height: 187px;

  align-items: center;
  justify-content: center;
`;
