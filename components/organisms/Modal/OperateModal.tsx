import Modal from "./Modal";
import styled from "@emotion/styled";
import CloseIcon from "@/assets/svg/Close.svg";
import One from "@/assets/svg/One.svg";
import Two from "@/assets/svg/Two.svg";
import Three from "@/assets/svg/Three.svg";

interface props {
  setIsOperate: Function;
}

const OperateModal = ({ setIsOperate }: props) => {
  return (
    <Modal>
      <Container>
        <CloseBox
          onClick={() => {
            setIsOperate(false);
          }}
        >
          <CloseIcon alt="close icon" width={32} height={32} />
        </CloseBox>
        <TopBox>
          <TitleBox>정산관리</TitleBox>
          <SubTitleBox>
            가게 사장님들과의 서비스 수수료 정산을 관리해보세요.
          </SubTitleBox>
        </TopBox>
        <DataDescriptionBox>
          2023.10.01 ~ 2023.10.31 사이 데이터입니다.
        </DataDescriptionBox>
        <RankBox>
          <RankTitleBox>
            <RankNumberBox>
              <One />
            </RankNumberBox>
            <RankTxtBox>무무 스테이크</RankTxtBox>
          </RankTitleBox>

          <RankContainer>
            <RankLeftBox>
              <FlexBox>
                <NameBox>가게명</NameBox>
                <GrayBox>무무 스테이크</GrayBox>
              </FlexBox>
              <FlexBox style={{ marginTop: "10px" }}>
                <NameBox>전화번호</NameBox>
                <GrayBox>010 1234 5678</GrayBox>
              </FlexBox>
            </RankLeftBox>
            <RankRightBox>
              <FlexBox>
                <WhiteBox>총 방문자</WhiteBox>
                <BlueBox>58명</BlueBox>
              </FlexBox>
              <FlexBox>
                <WhiteBox>지난대비이익 상승률</WhiteBox>
                <BlueBox>25%</BlueBox>
              </FlexBox>
            </RankRightBox>
          </RankContainer>
        </RankBox>
        <RankBox>
          <RankTitleBox>
            <RankNumberBox>
              <Two />
            </RankNumberBox>
            <RankTxtBox>탕화쿵푸</RankTxtBox>
          </RankTitleBox>

          <RankContainer>
            <RankLeftBox>
              <FlexBox>
                <NameBox>가게명</NameBox>
                <GrayBox>탕화쿵푸</GrayBox>
              </FlexBox>
              <FlexBox style={{ marginTop: "10px" }}>
                <NameBox>전화번호</NameBox>
                <GrayBox>010 1234 5678</GrayBox>
              </FlexBox>
            </RankLeftBox>
            <RankRightBox>
              <FlexBox>
                <WhiteBox>총 방문자</WhiteBox>
                <BlueBox>48명</BlueBox>
              </FlexBox>
              <FlexBox>
                <WhiteBox>지난대비이익 상승률</WhiteBox>
                <BlueBox>19%</BlueBox>
              </FlexBox>
            </RankRightBox>
          </RankContainer>
        </RankBox>
        <RankBox>
          <RankTitleBox>
            <RankNumberBox>
              <Three />
            </RankNumberBox>
            <RankTxtBox>카페토이토이</RankTxtBox>
          </RankTitleBox>

          <RankContainer>
            <RankLeftBox>
              <FlexBox>
                <NameBox>가게명</NameBox>
                <GrayBox>무무 스테이크</GrayBox>
              </FlexBox>
              <FlexBox style={{ marginTop: "10px" }}>
                <NameBox>전화번호</NameBox>
                <GrayBox>010 1234 5678</GrayBox>
              </FlexBox>
            </RankLeftBox>
            <RankRightBox>
              <FlexBox>
                <WhiteBox>총 방문자</WhiteBox>
                <BlueBox>38명</BlueBox>
              </FlexBox>
              <FlexBox>
                <WhiteBox>지난대비이익 상승률</WhiteBox>
                <BlueBox>37%</BlueBox>
              </FlexBox>
            </RankRightBox>
          </RankContainer>
        </RankBox>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  width: 556px;
  flex-shrink: 0;
  background-color: white;
  border-radius: 15px;
  padding: 19px;
  display: flex;
  flex-direction: column;
`;

const CloseBox = styled.div`
  margin-left: auto;
`;

const TopBox = styled.div`
  margin-left: 30px;
`;

const TitleBox = styled.div`
  color: var(--, #1c1c1e);
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 16.53px; /* 63.577% */
  letter-spacing: -1.56px;
`;

const SubTitleBox = styled.div`
  color: var(--, #1c1c1e);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16.53px; /* 137.751% */
  letter-spacing: -0.72px;
  margin-top: 13px;
`;

const DataDescriptionBox = styled.div`
  width: 446px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 5px;
  background: var(--g0, #f4f4f4);
  color: var(--sub2, #0e6eff);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16.53px; /* 103.313% */
  letter-spacing: -0.96px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin: 16px auto 0;
`;

const RankBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const RankTitleBox = styled.div`
  display: flex;
  margin-top: 20px;
`;

const RankNumberBox = styled.div`
  display: flex;
  align-items: center;
`;

const RankTxtBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  color: var(--, #3d4149);
  font-family: Pretendard Variable;
  font-size: 13.984px;
  font-style: normal;
  font-weight: 500;
  line-height: 19.264px; /* 137.751% */
  letter-spacing: -0.839px;
`;

const RankContainer = styled.div`
  display: flex;
  width: 446px;
  height: 110px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid var(--g0, #f4f4f4);
  margin-top: 5px;
`;

const RankLeftBox = styled.div`
  margin: auto;
`;

const NameBox = styled.div`
  display: flex;
  align-items: center;
  color: var(--, #3d4149);
  font-family: Pretendard Variable;
  font-size: 13.984px;
  font-style: normal;
  font-weight: 500;
  line-height: 19.264px; /* 137.751% */
  letter-spacing: -0.839px;
  width: 50px;
`;

const GrayBox = styled.div`
  width: 152px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #f7f7f7;
  color: var(--, #3d4149);
  font-family: Pretendard Variable;
  font-size: 13.984px;
  font-style: normal;
  font-weight: 500;
  line-height: 19.264px; /* 137.751% */
  letter-spacing: -0.839px;
  display: flex;
  align-items: center;
  padding-left: 12px;
`;

const RankRightBox = styled.div`
  width: 201px;
  height: 94px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #dcdcdc;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const WhiteBox = styled.div`
  width: 112px;
  color: var(--, #3d4149);
  font-family: Pretendard Variable;
  font-size: 13.984px;
  font-style: normal;
  font-weight: 500;
  line-height: 19.264px; /* 137.751% */
  letter-spacing: -0.839px;
  display: flex;
  align-items: center;
`;

const BlueBox = styled.div`
  display: inline-flex;
  padding: 0px 3.9px;
  justify-content: center;
  align-items: center;
  gap: 13px;
  color: var(--sub3, #dfff60);
  font-family: Pretendard;
  font-size: 15.6px;
  font-style: normal;
  font-weight: 600;
  line-height: 25.043px; /* 160.532% */
  letter-spacing: -0.936px;
  border-radius: 3.9px;
  background: var(--sub2, #0e6eff);
`;

const FlexBox = styled.div`
  display: flex;
  margin: auto;
`;

export default OperateModal;
