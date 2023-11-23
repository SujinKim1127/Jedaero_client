import Head from "next/head";

import styled from "@emotion/styled";
import Background from "@/assets/svg/background.gif";

import Background2 from "@/assets/svg/background2.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          제대로,학생과 학생회, 가게 모두의 소소한 행복이 되는 제휴사업이 되도록
        </title>
      </Head>
      <Container>
        <LandingTitle></LandingTitle>
        <LandingTitle></LandingTitle>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;

  justify-content: flex-start;
  align-items: flex-start;

  padding-top: 5%;
  padding-left: 10%;

  width: 100%;

  height: 100vh;
  background-image: url(${Background.src});
  /* background-image: url(${Background2.src}); */

  background-size: cover;
`;

const LandingTitle = styled.p`
  color: black;
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 3px;
`;
