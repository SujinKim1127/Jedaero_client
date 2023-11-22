import React from "react";
import Modal from "./Modal";
import styled from "@emotion/styled";
import Button from "../Button";
import CloseIcon from "@/assets/svg/Close.svg";
import { SizeTypeImg57 } from "@/utils/TypeImg";

interface Props {
  title: string;
  type: "음식점" | "카페" | "문화" | "미용" | "기타";
  setIsFinishModal: Function;
}

const FinishModal = ({ setIsFinishModal, title, type }: Props) => {
  const handleOnClickStamp = () => {
    setIsFinishModal(false);
  };

  const typeStyles = SizeTypeImg57();

  return (
    <Modal>
      <Container>
        <ModalCloseBox onClick={handleOnClickStamp}>
          <CloseIcon alt="close icon" width={32} height={32} />
        </ModalCloseBox>
        <BigMarkerContainer>
          <MarkerIconBox>{typeStyles[type].value}</MarkerIconBox>
          <MarkerTitleBox>{title}</MarkerTitleBox>
          <MarkerTypeBox>{type}</MarkerTypeBox>
        </BigMarkerContainer>
        <RegularTxtBox>제휴 기간이 아직 남은 제휴 가게입니다.</RegularTxtBox>
        <BoldTxtBox>정말 제휴를 종료하시겠습니까?</BoldTxtBox>
        <Button title="제휴 종료하기" width={193} />
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  width: 556px;
  border-radius: 15px;
  background: var(--White, #fff);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 19px;
  display: flex;
  flex-direction: column;
`;

const ModalCloseBox = styled.div`
  margin-left: auto;
  cursor: pointer;
`;

const BigMarkerContainer = styled.div`
  display: flex;
  height: 65px;
  margin: 20px auto;
  align-items: center;
  gap: 8px;
  border-radius: 30.706px;
  border: 1.861px solid var(--sub, #51e877);
  background: var(--White, #fff);
  box-shadow: 0px 5.45745px 18.19149px 0px rgba(128, 128, 128, 0.25);
`;

const MarkerIconBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3px;
`;

const MarkerTitleBox = styled.div`
  color: var(--, #1c1c1e);
  font-size: 22.332px;
  font-style: normal;
  font-weight: 600;
  line-height: 22.099px; /* 98.958% */
  letter-spacing: -1.34px;
`;

const MarkerTypeBox = styled.div`
  color: var(--g2, #aeaeb2);
  font-family: Pretendard Variable;
  font-size: 13.766px;
  font-style: normal;
  font-weight: 400;
  line-height: 22.099px; /* 160.532% */
  letter-spacing: -0.826px;
  margin-right: 20px;
`;

const RegularTxtBox = styled.div`
  margin-top: 20px;
  color: var(--, #3d4149);
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px; /* 160% */
  letter-spacing: -1.2px;
`;

const BoldTxtBox = styled.div`
  color: var(--, #3d4149);
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -1.2px;
  text-align: center;
`;

export default FinishModal;
