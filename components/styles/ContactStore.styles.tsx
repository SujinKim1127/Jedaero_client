import { COLORS } from "@/styles/colors";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 920px;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const HeadTitleBox = styled.div`
  color: var(--, #1c1c1e);
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 16.53px; /* 63.577% */
  letter-spacing: -1.56px;
`;

export const ButtonsBox = styled.div`
  margin-top: 39px;
  display: flex;
`;

export const DateBtn = styled.div``;

export const FinishBtn = styled.div``;

export const StampBtn = styled.div``;

export const MainBox = styled.div`
  margin-top: 38px;
  display: flex;
`;
export const MapBox = styled.div`
  width: 428px;
  height: 402px;
`;

export const InfoBox = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
`;

export const TopBox = styled.div`
  display: flex;
  align-items: center;
`;

export const TopIconBox = styled.div``;

export const TopTitleBox = styled.div`
  margin-left: 44px;
  color: var(--, #1c1c1e);
  font-size: 21px;
  font-weight: 700;
  line-height: 19.264px; /* 91.732% */
  letter-spacing: -1.26px;
`;

export const TopTypeBox = styled.div`
  color: var(--g2, #aeaeb2);
  font-size: 12px;
  font-weight: 400;
  line-height: 19.264px; /* 160.532% */
  letter-spacing: -0.72px;
  margin-left: 10px;
`;

export const StoreInfoContainer = styled.div`
  margin-top: 27px;
`;

export const StoreInfoBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SmallIconBox = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
`;

export const TextBox = styled.div`
  margin-left: 20px;
  color: var(--sb, #2d3036);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.264px; /* 120.399% */
  letter-spacing: -0.96px;
  display: flex;
  align-items: center;
`;

export const PercentBox = styled.div`
  margin-left: 8px;
  display: inline-flex;
  padding: 0px 3.9px;
  justify-content: center;
  align-items: center;
  border-radius: 3.9px;
  background: ${COLORS.blue};
  color: ${COLORS.yellow};
  font-size: 15.6px;
  font-weight: 600;
  line-height: 25.043px; /* 160.532% */
`;

export const DashBoardsBox = styled.div`
  margin-top: 10px;
`;

export const DashTopBox = styled.div`
  display: flex;
  align-items: center;
`;

export const DashTitleBox = styled.div`
  color: var(--sb, #2d3036);
  font-family: Pretendard Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 19.264px; /* 120.399% */
  letter-spacing: -0.96px;
`;

export const NextBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6px;
`;

export const DashContainer = styled.div`
  display: flex;
  margin-top: 8px;
  justify-content: space-between;
  width: 440px;
`;
export const DashBoardBox = styled.div`
  width: 138.527px;
  height: 89px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f4f4f4;
`;

export const DashTxt = styled.div`
  color: var(--g3, #636366);
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 19.264px; /* 160.532% */
  letter-spacing: -0.72px;
`;

export const DashCount = styled.div`
  margin-top: 6px;
  color: ${COLORS.blue};
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 19.264px; /* 80.266% */
  letter-spacing: -1.44px;
`;
