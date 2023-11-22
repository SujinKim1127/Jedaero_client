import * as templates from "@/components/styles/coupon/style";
import styled from "@emotion/styled";
import Background from "@/components/atoms/MypageBackground.svg";
import Konkuk from "@/components/atoms/Konkuk.svg";
import { useEffect, useState } from "react";
import { useUserData } from "@/components/hooks/useUserData";
import { FlexTemplate } from "@/components/atoms/basics";
import { css } from "@emotion/css";

const MyPage: React.FC = () => {
  const { name, email, phoneNum } = useUserData().userData;

  return (
    <templates.Container>
      <templates.TitleBox>
        <templates.Title>내 정보</templates.Title>
        <templates.SubTitle>마이페이지</templates.SubTitle>
      </templates.TitleBox>
      <ContentsBox>
        <Background />

        <ContentsWrapper>
          <Title>내 프로필</Title>
          <Konkuk />
          <DetailBox>
            <Name>{name}</Name>
            <LineBox>
              <Word>이메일</Word>
              <Word>{email}</Word>
            </LineBox>
            <LineBox>
              <Word>대표 전화번호</Word>
              <Word>{phoneNum}</Word>
            </LineBox>
          </DetailBox>
        </ContentsWrapper>
      </ContentsBox>
    </templates.Container>
  );
};

export default MyPage;

const ContentsBox = styled(templates.ContentsBox)`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  position: relative;
`;

const ContentsWrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  height: 100%;
  width: 510px;
  color: white;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  row-gap: 10px;
`;

const Title = styled.p`
  color: #fff;
  font-family: Pretendard Variable;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;

  margin-bottom: 1.5rem;
`;

const Name = styled.p`
  color: #fff;
  font-family: Pretendard Variable;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;

  margin-bottom: 20px;
`;

const Word = styled.p`
  color: #fff;
  font-family: Pretendard Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

const DetailBox = styled(FlexTemplate)`
  flex-flow: column nowrap;
  row-gap: 20px;
`;

const LineBox = styled(FlexTemplate)`
  flex-flow: row nowrap;
  justify-content: space-between;
`;
