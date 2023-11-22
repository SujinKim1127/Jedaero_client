import * as phase from "@/components/styles/user/first/style";
import * as styles from "@/components/styles/user/third/style";
import { Button, Checkbox, TextField } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const AuthPage: React.FC = () => {
  const router = useRouter();
  return (
    <phase.Container>
      <Head>
        <title>회원가입</title>
        <meta name="signUp" content="회원가입" />
      </Head>
      <phase.PhaseBox>
        <phase.PhaseItem>
          <phase.PhaseEllipse>1</phase.PhaseEllipse>
          <phase.PhaseTitle>약관동의</phase.PhaseTitle>
        </phase.PhaseItem>
        <phase.ConnectLine />
        <phase.PhaseItem>
          <phase.PhaseEllipse>2</phase.PhaseEllipse>
          <phase.PhaseTitle>정보입력</phase.PhaseTitle>
        </phase.PhaseItem>
        <phase.ConnectLine />
        <phase.PhaseItem>
          <phase.PhaseEllipse>3</phase.PhaseEllipse>
          <phase.PhaseTitle>인증절차</phase.PhaseTitle>
        </phase.PhaseItem>
        <phase.ConnectLine />
        <phase.PhaseItem>
          <phase.PhaseEllipse selected={true}>4</phase.PhaseEllipse>
          <phase.PhaseTitle selected={true}>가입완료</phase.PhaseTitle>
        </phase.PhaseItem>
      </phase.PhaseBox>
      <phase.AgreementBox>
        <phase.NextBtn
          variant="contained"
          onClick={() => {
            router.push("/");
          }}
        >
          로그인 하러가기
        </phase.NextBtn>
      </phase.AgreementBox>
    </phase.Container>
  );
};

export default AuthPage;
