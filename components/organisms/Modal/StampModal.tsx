import { useState } from "react";
import Modal from "./Modal";
import styled from "@emotion/styled";
import CloseIcon from "@/assets/svg/Close.svg";
import Button from "../Button";
import { COLORS } from "@/styles/colors";
import { Checkbox } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
interface Props {
  setIsStampModal: Function;
}

const StampModal = ({ setIsStampModal }: Props) => {
  const [day, setDay] = useState({
    OneWeek: false,
    TwoWeek: false,
    ThisMonth: false,
  });
  const handleOnClickStamp = () => {
    setIsStampModal(false);
  };

  const handleButtonClick = (selectedDay: string) => {
    // Reset all values to false
    setDay({
      OneWeek: false,
      TwoWeek: false,
      ThisMonth: false,
    });

    // Set the selected value to true
    setDay((prevDay) => ({
      ...prevDay,
      [selectedDay]: true,
    }));
  };

  return (
    <Modal>
      <Container>
        <ModalCloseBox onClick={handleOnClickStamp}>
          <CloseIcon alt="close icon" width={32} height={32} />
        </ModalCloseBox>
        <TitleBox>2배 스탬프 적용</TitleBox>
        <InfoBox>
          <InfoTitleBox>1. 기간 설정</InfoTitleBox>
          <DayBox>
            <DayBtn
              type={day.OneWeek}
              onClick={() => handleButtonClick("OneWeek")}
            >
              최근 7일
            </DayBtn>
            <DayBtn
              type={day.TwoWeek}
              onClick={() => handleButtonClick("TwoWeek")}
            >
              최근 14일
            </DayBtn>
            <DayBtn
              type={day.ThisMonth}
              onClick={() => handleButtonClick("ThisMonth")}
            >
              이번달
            </DayBtn>
          </DayBox>
          <InfoTitleBox>2. 조건 유무</InfoTitleBox>
          <ConditionBox>
            <CheckIconBox>
              <Checkbox
                icon={<CircleIcon />}
                checkedIcon={<CheckCircleIcon />}
              />
            </CheckIconBox>
            <CheckTextBox>n명 달성 시 종료</CheckTextBox>
          </ConditionBox>
          <PersonBox></PersonBox>
          <ConditionBox>
            <CheckIconBox>
              <Checkbox
                icon={<CircleIcon />}
                checkedIcon={<CheckCircleIcon />}
              />
            </CheckIconBox>
            <CheckTextBox>제한 인원 X</CheckTextBox>
          </ConditionBox>
        </InfoBox>
        <Button title="등록하기" width={193} />
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  width: 589px;
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

const TitleBox = styled.div`
  margin-left: 45px;
  margin-bottom: 58px;
  color: var(--, #1c1c1e);
  font-size: 26px;
  font-weight: 600;
  line-height: 16.53px; /* 63.577% */
  letter-spacing: -1.56px;
`;

const InfoBox = styled.div`
  width: 376px;
  margin: 0 auto;
`;

const InfoTitleBox = styled.div`
  color: var(--, #1c1c1e);
  font-size: 16px;
  font-weight: 600;
  line-height: 19.264px; /* 120.399% */
  letter-spacing: -0.96px;
  margin-bottom: 13px;
`;

const DayBox = styled.div`
  display: flex;
  margin: 0 auto 30px auto;
  justify-content: space-between;
`;

const DayBtn = styled.div<{ type: boolean }>`
  display: flex;
  width: 110.578px;
  height: 33px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${(props) => (props.type ? "#F4F4F4" : "white")};
  color: ${(props) => (props.type ? COLORS.blue : "black")};
  border: ${(props) =>
    props.type ? "1px solid #AEAEB2" : "1px solid #f4f4f4"};
  font-size: 13.984px;
  font-weight: 500;
  line-height: 19.264px; /* 137.751% */
  letter-spacing: -0.839px;
`;

const ConditionBox = styled.div`
  display: flex;
`;

const CheckIconBox = styled.div``;

const CheckTextBox = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.264px; /* 120.399% */
  letter-spacing: -1.12px;
  display: flex;
  align-items: center;
`;

const PersonBox = styled.div`
  border-radius: 6px;
  background: #f7f7f7;
  width: 331px;
  height: 36px;
  margin: 6px auto 20px;
`;

export default StampModal;
