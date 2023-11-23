import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Button, Checkbox, TextField, keyframes } from "@mui/material";
import { useRecoilState, useSetRecoilState } from "recoil";
import modalState from "../atoms/modalState";
import { useModal } from "../hooks/useModal";
import Logo from "@/components/atoms/Logo.svg";
import ModalCloseButton from "@/components/atoms/ModalCloseBtn.svg";
import { login } from "@/pages/api/login";
import { initialState } from "@/state/user/user";
import { useRouter } from "next/router";

interface ModalProps {
  children?: React.ReactNode;
}

const LoginModal: React.FC<ModalProps> = () => {
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  const { closeModal } = useModal();

  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const setLoginedUserState = useSetRecoilState(initialState);

  const handleLogin = async (email: string, password: string) => {
    try {
      const result = await login({ email: email, password: password });
      setLoginedUserState((prev) => ({
        ...prev,
        logined: true,
        token: result.accessToken,
      }));
      router.reload();
      return result.data;
    } catch (error) {
      console.error(error);
    }
  };

  if (!isOpen) return null;
  return (
    <Container>
      <LogoTitleWrapper>
        <Logo />
        <Title>로그인</Title>
      </LogoTitleWrapper>
      <LoginForm>
        <StyledTextField
          variant="filled"
          placeholder="아이디를 입력하세요"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <StyledTextField
          type="password"
          variant="filled"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <CheckboxWrapper>
          <Checkbox />
          <LoginSubTitle>로그인 유지</LoginSubTitle>
        </CheckboxWrapper>
        <LoginBtn
          variant="contained"
          onClick={() => {
            (async function () {
              const result = await handleLogin(email, password);
              result === "로그인 성공" && closeModal();
            })();
          }}
        >
          로그인
        </LoginBtn>
        <RegistrationOptions>
          <SignUpWrapper>
            <LoginSubTitle>회원가입</LoginSubTitle>
            <LoginSubTitle>|</LoginSubTitle>
            <LoginSubTitle>비밀번호 찾기</LoginSubTitle>
          </SignUpWrapper>
        </RegistrationOptions>
      </LoginForm>
      <SocialLoginSection>
        <LoginSubTitle>간편 로그인</LoginSubTitle>
        <SocialLoginOptions>
          <SocialLoginWrapper>
            <SocialLoginIcon />
            <LoginSubTitle>카카오톡으로 로그인</LoginSubTitle>
          </SocialLoginWrapper>

          <SocialLoginWrapper>
            <SocialLoginIcon />
            <LoginSubTitle>네이버로 로그인</LoginSubTitle>
          </SocialLoginWrapper>
        </SocialLoginOptions>
      </SocialLoginSection>
      <StyledModalCloseButton onClick={closeModal} />
    </Container>
  );
};

export default LoginModal;

const bounceAnimation = keyframes`
  0% {
    transform: translate(-50%, -60%);
    opacity:0;
  }
  
  100% {
    transform: translate(-50%, -50%);
    opacity:1;
  }
`;
const SocialLoginIcon = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 100px;
  background-color: #fbe74d;
`;

const SocialLoginWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;

  column-gap: 5px;
  align-items: center;
`;

const SignUpWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;

  column-gap: 15px;
  margin-bottom: 20px;
  align-items: center;
`;

const Container = styled.div`
  padding-top: 10px 0px;
  position: fixed;
  top: 50%;
  left: 50%;

  z-index: 3000;
  transform: translate(-50%, -50%);
  width: 512.014px;
  height: 460px;
  flex-shrink: 0;
  padding: 30px 24px;
  display: flex;
  flex-flow: column nowrap;
  border-radius: 18px;
  background: white;
  box-shadow: 0px 10.08219px 25.20548px 0px rgba(0, 0, 0, 0.07);

  // animation
  animation: ${bounceAnimation} 0.5s ease;
`;

const LogoTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 5%;
`;

const Title = styled.p`
  color: var(--sb, #2d3036);
  text-align: center;
  font-size: 17.446px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -1.047px;
  padding-top: 10px;
`;

const LoginForm = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 10px 20px;
  margin-top: 30px;
  row-gap: 10px;
`;

const StyledTextField = styled(TextField)`
  &.MuiTextField-root {
    variant: filled;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LoginSubTitle = styled.p`
  color: var(--g2, #aeaeb2);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.84px;
`;

const LoginBtn = styled(Button)`
  border-radius: 6px;
  background: var(--sb, #2d3036);
`;

const RegistrationOptions = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialLoginSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const SocialLoginOptions = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  column-gap: 20px;
  padding: 10px 5px;

  width: 100%;
`;

const StyledModalCloseButton = styled(ModalCloseButton)`
  position: absolute;
  top: 10px;
  right: 10px;
`;
