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
          <Konkuk />
          <DetailBox>
            <div
              className={css`
                display: flex;
                column-gap: 5px;
              `}
            >
              <Title>{name}</Title>
              <Badge>다빈치</Badge>
            </div>

            <div
              className={css`
                margin-top: 20px;
                display: flex;
                flex-flow: column nowrap;
                row-gap: 10px;
              `}
            >
              <LineBox>
                <Word>대표자 전화번호 </Word>
                <Contents>{phoneNum}</Contents>
              </LineBox>
              <LineBox>
                <Word>학생회 이메일</Word>
                <Contents>{email}</Contents>
              </LineBox>
            </div>
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
  width: 412px;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  row-gap: 10px;
`;

const Title = styled.p`
  color: var(--, #3d4149);
  font-family: Pretendard;
  font-size: 21.297px;
  font-style: normal;
  font-weight: 600;
`;

const Name = styled.p`
  color: #fff;
  font-family: Pretendard Variable;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;

  margin-bottom: 20px;
`;

const Contents = styled.p`
  color: var(--sb, #2d3036);
  font-family: Pretendard Variable;
  font-size: 16.564px;
  font-style: normal;
  font-weight: 400;
`;

const Word = styled.p`
  color: var(--g2, #aeaeb2);
  font-family: Pretendard;
  font-size: 18.93px;
  font-style: normal;
  font-weight: 600;
`;

const DetailBox = styled(FlexTemplate)`
  flex-flow: column nowrap;
  row-gap: 20px;
`;

const LineBox = styled(FlexTemplate)`
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const Badge = styled(FlexTemplate)`
  color: var(--sub3, #dfff60);
  font-family: Pretendard;
  font-size: 18.457px;
  font-style: normal;
  font-weight: 600;
  line-height: 29.63px; /* 160.532% */
  letter-spacing: -1.107px;

  border-radius: 4.614px;
  background: var(--sub2, #0e6eff);
  width: 50px;

  align-items: center;
  justify-content: center;
  padding: 1px 2px;
`;
