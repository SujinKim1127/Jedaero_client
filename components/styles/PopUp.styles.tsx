import { COLORS } from "@/styles/colors";
import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 879px;
`;

export const TitleBox = styled.div`
  color: var(--, #1c1c1e);
  font-size: 26px;
  font-weight: 700;
  line-height: 16.53px; /* 63.577% */
  letter-spacing: -1.56px;
`;

export const SubTitleBox = styled.div`
  color: var(--, #1c1c1e);
  margin-top: 12px;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 19.264px; /* 128.425% */
  letter-spacing: -0.9px;
`;

export const ContentBox = styled.div`
  margin: 28px auto 0;
`;

export const TableTitleContainer = styled.div`
  color: #afafaf;
  font-size: 13.984px;
  font-style: normal;
  font-weight: 500;
  line-height: 19.264px; /* 137.751% */
  letter-spacing: -0.839px;
  display: flex;
  height: 42px;
`;

export const TableCountBox = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  border-radius: 6px;
  background: #f7f7f7;
`;

export const TableContentTitle = styled.div`
  width: 564px;
  border-radius: 6px;
  background: #f7f7f7;
  margin: 0 8px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const TablePeriodTitle = styled.div`
  width: 182px;
  border-radius: 6px;
  background: #f7f7f7;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const PopUpsContainer = styled.div`
  border-radius: 6px;
  border: 1px solid #f7f7f7;
  margin-top: 8px;
`;

export const PopupContainer = styled.div`
  height: 58px;
  display: flex;
`;

export const NumberBox = styled.div`
  width: 72px;
  color: ${COLORS.blue};
  font-size: 12.236px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.857px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupTitle = styled.div`
  color: var(--, #3d4149);
  font-size: 17px;
  font-weight: 400;
  line-height: 19.264px; /* 113.316% */
  letter-spacing: -1.02px;
  width: 564px;
  display: flex;
  align-items: center;
  margin: 5px 8px;
  border-bottom: 1px solid var(--g0, #f4f4f4);
`;

export const PopupPeriod = styled.div`
  display: flex;
  width: 103px;
  padding: 0px 3.9px;
  justify-content: center;
  align-items: center;
  color: ${COLORS.yellow};
  font-size: 15.6px;
  font-weight: 600;
  line-height: 25.043px; /* 160.532% */
  letter-spacing: -0.936px;
  border-radius: 3.9px;
  background-color: ${COLORS.blue};
  height: 26px;
`;

export const ButtonBox = styled.div`
  color: var(--, #1c1c1e);
  font-family: Pretendard Variable;
  font-size: 13.984px;
  font-style: normal;
  font-weight: 500;
  line-height: 19.264px; /* 137.751% */
  letter-spacing: -0.839px;
  display: flex;
  margin-left: auto;
  margin-top: 80px;
`;

export const EnrollBtn = styled.div`
  display: flex;
  width: 90px;
  height: 33px;
  padding: 5.827px 20.977px;
  justify-content: center;
  align-items: center;
  gap: 11.654px;
  border-radius: 5px;
  border: 1px solid var(--g0, #f4f4f4);
  background: var(--g0, #f4f4f4);
`;

export const RemoveBtn = styled.div`
  border-radius: 5px;
  border: 1px solid var(--g0, #f4f4f4);
  display: flex;
  width: 90px;
  height: 33px;
  padding: 5.827px 20.977px;
  justify-content: center;
  align-items: center;
  gap: 11.654px;
  flex-shrink: 0;
  margin-left: 10px;
`;
