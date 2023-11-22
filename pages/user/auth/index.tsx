import * as phase from "@/components/styles/user/first/style";
import * as styles from "@/components/styles/user/third/style";
import { CreateImage, SignUp } from "@/pages/api/login";
import { Button, Checkbox, TextField } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface AuthProps {
  name?: string;
  isLogin?: boolean;
}

const AuthPage: React.FC<AuthProps> = () => {
  const router = useRouter();

  // states
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [proofImage, setProofImage] = useState<File | null>(null);

  // input file changes
  const handleFileInput = (e: any) => {
    const file = e.target.files[0];
    console.log(file);
    setProofImage(file);
  };

  const registerImage = async () => {
    try {
      let response: any = "";
      if (proofImage) {
        response = await CreateImage(proofImage);
      }

      setProofImage(response);
    } catch (err) {
      console.error(err);
    }
  };

  // 회원가입 api 호출
  const handleSignUp = async () => {
    if (password != passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const signUpResult = await SignUp({
        email: email,
        password: password,
        type: "총학생회",
        typeName: "총총",
        proofImageUrl: "",
      });

      console.log(signUpResult);
    } catch (error) {
      console.error("회원가입 오류 : ", error);
    }
  };

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
          <phase.PhaseEllipse selected={true}>3</phase.PhaseEllipse>
          <phase.PhaseTitle selected={true}>인증절차</phase.PhaseTitle>
        </phase.PhaseItem>
        <phase.ConnectLine />
        <phase.PhaseItem>
          <phase.PhaseEllipse>4</phase.PhaseEllipse>
          <phase.PhaseTitle>가입완료</phase.PhaseTitle>
        </phase.PhaseItem>
      </phase.PhaseBox>
      <phase.AgreementBox>
        <styles.AskBox>
          <styles.AskTitle>
            <styles.AskWord>대표자 이메일*</styles.AskWord>
          </styles.AskTitle>
          <styles.AskContent>
            <styles.AskContentInnerBox>
              <styles.AskInput
                variant="filled"
                placeholder="학교 도메인 이메일로 작성해주세요"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <styles.AskButton variant="contained" style={{ display: "flex" }}>
                인증번호
              </styles.AskButton>
            </styles.AskContentInnerBox>
            <styles.AskContentInnerBox>
              <styles.AskInput variant="filled" />
              <styles.AskButton variant="contained" style={{ display: "flex" }}>
                확인
              </styles.AskButton>
            </styles.AskContentInnerBox>
          </styles.AskContent>
        </styles.AskBox>

        <styles.AskBox>
          <styles.AskTitle>
            <styles.AskWord>대표자 휴대폰*</styles.AskWord>
          </styles.AskTitle>
          <styles.AskContent>
            <styles.AskContentInnerBox>
              <styles.AskInput
                variant="filled"
                placeholder="휴대폰 번호 '-' 제외하고 입력"
              />
              <styles.AskButton variant="contained" style={{ display: "flex" }}>
                인증번호
              </styles.AskButton>
            </styles.AskContentInnerBox>
            <styles.AskContentInnerBox>
              <styles.AskInput variant="filled" placeholder="인증번호 입력" />
              <styles.AskButton variant="contained" style={{ display: "flex" }}>
                확인
              </styles.AskButton>
            </styles.AskContentInnerBox>
          </styles.AskContent>
        </styles.AskBox>

        <styles.AskBox>
          <styles.AskTitle>
            <styles.AskWord>비밀번호</styles.AskWord>
          </styles.AskTitle>
          <styles.AskContent>
            <styles.AskInput
              variant="filled"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </styles.AskContent>
        </styles.AskBox>

        <styles.AskBox>
          <styles.AskTitle>
            <styles.AskWord>비밀번호 확인</styles.AskWord>
          </styles.AskTitle>
          <styles.AskContent>
            <styles.AskInput
              variant="filled"
              value={passwordConfirm}
              onChange={(e) => {
                setPasswordConfirm(e.target.value);
              }}
            />
          </styles.AskContent>
        </styles.AskBox>

        <styles.AskBox>
          <styles.AskTitle>
            <styles.AskWord>대표자 임명증 사진*</styles.AskWord>
          </styles.AskTitle>
          <styles.AskContent>
            <input type="file" accept="image/*" onChange={handleFileInput} />
          </styles.AskContent>
        </styles.AskBox>

        <phase.NextBtn
          variant="contained"
          onClick={() => {
            router.push("/user/complete");
            registerImage();
          }}
        >
          다음
        </phase.NextBtn>
      </phase.AgreementBox>
    </phase.Container>
  );
};

export default AuthPage;
