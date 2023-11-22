import { COLORS } from "@/styles/colors";
import styled from "@emotion/styled";
import EditIcon from "@/assets/svg/Edit.svg";
import { useEffect, useState } from "react";
import { getStoreInfo } from "@/pages/api/StoreAPI";
import { StoreDetailInfo } from "@/@types/Store";

interface SInfo {
  storeId: number;
}

const StoreInfo = ({ storeId }: SInfo) => {
  const [data, setData] = useState<StoreDetailInfo>({
    address: "",
    businessHours: [],
    category: "기타",
    description: "",
    distance: 80,
    latitude: 0,
    longitude: 0,
    mapUrl: "",
    phoneNumber: "",
    picked: false,
    storeId: 0,
    storeName: "",
  });
  useEffect(() => {
    const info = getStoreInfo(storeId);
    info.then((res) => {
      setData(res);
    });
  }, []);

  return (
    <Container>
      <InfoListBox>
        <InfoTypeBox>영업 시간</InfoTypeBox>
        <InfoDescriptionBox>09:00</InfoDescriptionBox>
      </InfoListBox>
      <InfoListBox>
        <InfoTypeBox>가게 번호</InfoTypeBox>
        <InfoDescriptionBox>{data?.phoneNumber}</InfoDescriptionBox>
      </InfoListBox>
      <InfoListBox>
        <InfoTypeBox>거리</InfoTypeBox>
        <InfoDescriptionBox>
          도보 {Math.ceil(data?.distance / 80)}분
        </InfoDescriptionBox>
      </InfoListBox>
      <InfoListBox>
        <InfoTypeBox>네이버 지도</InfoTypeBox>
        <InfoDescriptionBox>{data?.mapUrl}</InfoDescriptionBox>
      </InfoListBox>
      <ContactBox>
        <ContactTitleBox>전화 컨택 가이드</ContactTitleBox>
        <ContactContentBox>
          🙂 안녕하세요, 건국대학교 예술대학 학생회 다빈치 입니다. 건국대 상권
          활성화를 위한 제휴 사업을 제한하고자 합니다.
        </ContactContentBox>
        <EditBox>
          <EditTxt>수정하기</EditTxt>
          <EditIconBox>
            <EditIcon alt="edit icon" width={10} height={10} />
          </EditIconBox>
        </EditBox>
      </ContactBox>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 36px;
`;

const InfoListBox = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const InfoTypeBox = styled.div`
  border-radius: 4px;
  border: 1px solid #cfd9ff;
  color: ${COLORS.blue};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 19.264px; /* 137.598% */
  letter-spacing: -0.84px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 80px;
`;

const InfoDescriptionBox = styled.div`
  margin-left: 34px;
  color: var(--sb, #2d3036);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.264px; /* 137.598% */
  letter-spacing: -0.84px;
`;

const ContactBox = styled.div`
  width: 426px;
  border-radius: 4px;
  border: 1px solid var(--g0, #f4f4f4);
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const ContactTitleBox = styled.div`
  color: var(--sb, #2d3036);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 19.264px; /* 137.598% */
  letter-spacing: -0.84px;
`;

const ContactContentBox = styled.div`
  color: var(--sb, #2d3036);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.264px; /* 160.532% */
  letter-spacing: -0.72px;
  margin-top: 3px;
`;

const EditBox = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: auto;
  align-items: center;
  height: 20px;
`;

const EditIconBox = styled.div`
  display: flex;
  align-items: center;
`;

const EditTxt = styled.div`
  color: var(--g2, #aeaeb2);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.264px; /* 160.532% */
  letter-spacing: -0.72px;
  margin-right: 5px;
`;

export default StoreInfo;
