import { COLORS } from "@/styles/colors";
import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 1050px;
  padding-top: 1rem;
`;

export const TopTitleBox = styled.div``;

export const TitleBox = styled.div`
  color: var(--, #1c1c1e);
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -1.56px;
`;

export const SubTitleBox = styled.div`
  margin-top: 12px;
  color: var(--, #1c1c1e);
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 19.264px; /* 128.425% */
  letter-spacing: -0.9px;
`;

export const MiddleBox = styled.div`
  display: flex;
  width: 919px;
  margin: 64px auto 37px;
`;

export const FiltersBox = styled.div`
  display: flex;
  font-size: 13.984px;
  font-style: normal;
  line-height: 19.264px; /* 137.751% */
  letter-spacing: -0.839px;
  align-items: center;
`;

export const FilterAllText = styled.div<{ type: boolean }>`
  color: ${(props) => (props.type ? COLORS.blue : "black")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 69px;
  cursor: pointer;
`;

export const FilterComponentBox = styled.div`
  width: 87px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

export const FilterIconBox = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterText = styled.div<{ type: boolean }>`
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: ${(props) => (props.type ? "black" : "#C6C6C6")};
`;

export const FilterEndBox = styled.div`
  margin-left: auto;
  display: flex;
`;

export const SearchBox = styled.div`
  display: flex;
  width: 42px;
  height: 42px;
  padding: 9px 8px;
  align-items: center;
  gap: 20px;
  border-radius: 30px;
  background: #f7f7f7;
  cursor: pointer;
`;

export const SearchExpandBox = styled.div`
  width: 305px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 21px;
  background: #f7f7f7;
  padding: 9px 8px;
  display: flex;
`;

export const SearchInput = styled.input`
  font-size: 13.984px;
  font-style: normal;
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
  cursor: pointer;
`;

export const HeartBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  cursor: pointer;
`;

export const HeartIconBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const HeartTextBox = styled.div`
  color: #000;
  font-size: 13.984px;
  font-style: normal;
  font-weight: 500;
  line-height: 19.264px; /* 137.751% */
  letter-spacing: -0.839px;
  display: flex;
  align-items: center;
  margin-left: 7px;
`;

export const MainBox = styled.div`
  display: flex;
  margin: auto;
`;

export const MapBox = styled.div`
  width: 428px;
  height: 402px;
`;

export const ListsBox = styled.div`
  margin-left: 20px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 20px;
  height: 440px;
  ::-webkit-scrollbar {
    width: 2px;
    border-radius: 2px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #a6a6a6;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const ListBox = styled.div`
  margin-top: 30px;
  display: flex;
  width: 448px;
  padding-bottom: 9px;
  border-bottom: 1px solid var(--g0, #f4f4f4);
`;

export const ListTopBox = styled.div`
  margin-top: 30px;
  display: flex;
  width: 448px;
`;

export const ListBottomBox = styled.div`
  border-bottom: 1px solid var(--g0, #f4f4f4);
  padding-bottom: 9px;
  margin-left: 24px;
`;

export const TypeImgBox = styled.div`
  margin-left: 24px;
`;

export const InfoContainerBox = styled.div`
  width: 313px;
  margin-left: 44px;
`;

export const InfoTopBox = styled.div`
  display: flex;
`;

export const NameBox = styled.div`
  color: var(--, #1c1c1e);
  font-family: Pretendard Variable;
  font-size: 21px;
  font-style: normal;
  font-weight: 500;
  line-height: 19.264px; /* 91.732% */
  letter-spacing: -1.26px;
  display: flex;
  align-items: center;
  max-width: 245px;
`;

export const StoreTypeBox = styled.div`
  color: var(--g2, #aeaeb2);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.264px; /* 160.532% */
  letter-spacing: -0.72px;
  display: flex;
  align-items: center;
  margin-left: 7px;
  display: flex;
  align-items: center;
`;

export const WarningBox = styled.div``;

export const StoreHeartBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
`;

export const StoreInfoBox = styled.div`
  margin-top: 11px;
  color: var(--g3, #636366);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.264px; /* 160.532% */
  letter-spacing: -0.72px;
`;

export const StoreBottomBox = styled.div`
  display: flex;
  margin-top: 2px;
  width: 234px;
`;

export const StoreLocationBox = styled.div`
  color: var(--g2, #aeaeb2);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.264px; /* 160.532% */
  letter-spacing: -0.72px;
`;

export const StoreDistanceBox = styled.div`
  color: ${COLORS.distance_g};
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.78px;
  margin-left: auto;
`;

export const DownBtnBox = styled.div<{ isDown: boolean }>`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  cursor: ${(props) => (props.isDown ? "pointer" : "default")};
`;
