import { COLORS } from "@/styles/colors";
import styled from "@emotion/styled";

export const ModalContainer = styled.div`
  width: 589px;
  height: 577px;
  border-radius: 15px;
  background: var(--White, #fff);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 19px;
  display: flex;
  flex-direction: column;
`;

export const ModalCloseBox = styled.div`
  margin-left: auto;
`;

export const ModalSearchBox = styled.div`
  width: 377px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 21px;
  background: #f7f7f7;
  padding: 9px 8px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const ModalFilterBox = styled.div`
  margin-top: 21px;
  display: flex;
  justify-content: center;
`;

export const ModalListsBox = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 495px;
  height: 358px;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 30px auto auto;
  ::-webkit-scrollbar {
    width: 3px;
    border-radius: 2px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #a6a6a6;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const ModalStoreList = styled.div`
  width: 483px;
  height: 82px;
  border-radius: 10px;
  background: #fafafb;
  display: flex;
  padding: 17px 25px;
  margin-bottom: 10px;
`;

export const ModalStoreIconBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ModalStoreInfoBox = styled.div`
  margin-left: 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ModalStoreTopBox = styled.div`
  display: flex;
`;

export const ModalStoreBottomBox = styled.div`
  color: #4d4d4d;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
`;

export const ModalStoreName = styled.div`
  color: var(--, #1c1c1e);
  font-size: 23.063px;
  font-weight: 600;
  line-height: 24.682px; /* 107.021% */
  letter-spacing: -1.384px;
`;

export const ModalStoreType = styled.div`
  margin-left: 10px;
  color: var(--g2, #aeaeb2);
  font-size: 11px;
  font-weight: 400;
  line-height: 24.682px; /* 224.379% */
  letter-spacing: -0.66px;
`;

export const ModalStoreDirection = styled.div``;

export const ModalCheckBox = styled.div`
  margin-left: auto;
  margin: auto 0 auto auto;
  display: flex;
  width: 72px;
  height: 33px;
  justify-content: center;
  align-items: center;
  color: #2c5aff;
  font-size: 13.984px;
  font-weight: 500;
  line-height: 19.264px; /* 137.751% */
  letter-spacing: -0.839px;
  border-radius: 5px;
  border: 1px solid #e2e2e2;
  background: var(--White, #fff);
`;

export const SearchInput = styled.input`
  font-size: 13.984px;
  font-weight: 500;
  line-height: 19.264px; /* 137.751% */
  letter-spacing: -0.839px;
  background-color: transparent;
  border: none;
  margin-left: 8px;
  width: 100%;
  outline: none;
  ::placeholder {
    color: #afafaf;
  }
`;

export const SearchIconBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
