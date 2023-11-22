import styled from "@emotion/styled";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Logo from "@/components/atoms/Logo.svg";
import { useRouter } from "next/router";
import { useModal } from "../hooks/useModal";
import { useSetRecoilState } from "recoil";
import { initialState } from "@/state/user/user";

import { Logout } from "@/pages/api/login";

/*
TODO:
1. 로그인 - 세션스토리지 안에 로그인 여부에 따라서 다르게
*/

const Header = () => {
  const router = useRouter();
  const { openModal } = useModal();
  const [userSessionData, setUserSessionData] = useState();

  const setLogout = useSetRecoilState(initialState);

  useEffect(() => {
    setUserSessionData(window.sessionStorage?.getItem("userSession"));
  }, []);

  useEffect(() => {
    console.table(`USER SESSION DATA : ${userSessionData}`);
  }, [userSessionData]);

  const logoutHandler = async () => {
    console.log("logout");
    const response = await Logout();
    console.log(response);

    setLogout({
      logined: false,
      email: "",
      type: "",
      typeName: "",
      token: "",
    });
  };


  return (
    <HeaderFrame>
      <Logo
        onClick={() => {
          router.push("/");
        }}
        style={{
          position: "absolute",
          top: "30px",
        }}
      />
      <UserMenu>
        <ul>

          <UpperMenuItem
            onClick={() => {
              if (userSessionData) {
                logoutHandler();

              } else {
                openModal();
              }
            }}
          >

            {userSessionData ? "로그아웃" : "로그인"}

          </UpperMenuItem>

          <UpperMenuItem>
            <Link href="/user">회원가입</Link>
          </UpperMenuItem>
          <UpperMenuItem>

            <Link href="/mypage">마이페이지</Link>

          </UpperMenuItem>
          <UpperMenuItem>
            <NotificationsNoneOutlinedIcon />
          </UpperMenuItem>
        </ul>
      </UserMenu>
      <DefaultMenu>
        <ul>
          <LowerMenuItem>

            <Link href="/dashboard">대시보드</Link>
          </LowerMenuItem>
          <LowerMenuItem>
            <Link href="/search">가게찾기</Link>
          </LowerMenuItem>
          <LowerMenuItem>
            <Link href="/contact">제휴가게</Link>
          </LowerMenuItem>
          <LowerMenuItem>
            학생관리

            <SubDropdownMenu>
              <SubDropdownMenuItem>
                <Link href="/student/popup">팝업관리</Link>
              </SubDropdownMenuItem>
              <SubDropdownMenuItem>
                <Link href="/student/coupon">쿠폰관리</Link>
              </SubDropdownMenuItem>
            </SubDropdownMenu>
          </LowerMenuItem>
        </ul>
      </DefaultMenu>
    </HeaderFrame>
  );
};

const HeaderFrame = styled.div`
  padding: 1rem 10rem 1rem 10rem;

  background-color: white;
  color: black;

  display: flex;
  flex-flow: column nowrap;
`;

const UserMenu = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  margin-bottom: 10px;

  ul {
    display: flex;
    gap: 20px;
  }
`;

const DefaultMenu = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;

  ul {
    display: flex;
    gap: 20px; // li 간의 간격

    font-size: 1.5rem;
  }
`;

const SubDropdownMenu = styled.div`
  position: absolute;
  bottom: -3rem;

  visibility: hidden;

  border-radius: 8px;
  background: #f6f6f6;

  display: flex;
  flex-flow: column nowrap;
`;
const SubDropdownMenuItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  color: #000;

  font-size: 0.7rem;
  width: 100px;
  height: 1.5rem;


  padding: 3px 0px;

  &:hover {
    background-color: gray;
    color: white;
  }
`;

const LowerMenuItem = styled.li`
  position: relative;


  color: var(--, #3d4149);
  text-align: center;
  font-family: Pretendard;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 17.818px; /* 111.364% */
  letter-spacing: -0.96px;

  display: flex;
  flex-flow: column nowrap;
  padding: 5.091px 12.727px;
  justify-content: center;
  align-items: center;
  gap: 12.727px;

  transition: all 0.5s ease;

  &:hover div:nth-of-type(1) {
    visibility: visible;
    transition: all 0.5s ease;
  }
`;

const UpperMenuItem = styled.li`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 140% */
  letter-spacing: -0.6px;

  display: flex;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    transition: all 0.5s ease;
  }
  &:not(:hover) {
    transition: all 0.5s ease;
  }
`;

export default Header;
