import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <HeaderFrame>
      <UserMenu>
        <ul>
          <li>
            <Link href="/">로그인</Link>
          </li>
          <li>
            <Link href="/about">회원가입</Link>
          </li>
          <li>
            <Link href="/contact">마이페이지</Link>
          </li>
        </ul>
      </UserMenu>
      <DefaultMenu>
        <ul>
          <li>
            <Link href="/">가게찾기</Link>
          </li>
          <li>
            <Link href="/about">제안서작성</Link>
          </li>
          <li>
            <Link href="/contact">제휴가게</Link>
          </li>
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

export default Header;
