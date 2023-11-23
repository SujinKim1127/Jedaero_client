import KakaoMap from "@/components/Map";
import GrayButton from "@/components/organisms/GrayButton";
import * as styled from "@/components/styles/ContactStore.styles";
import { COLORS } from "@/styles/colors";
import React, { useEffect, useState } from "react";
import Benefit from "@/assets/svg/info/Benefit.svg";
import Call from "@/assets/svg/info/Call.svg";
import LinkImg from "@/assets/svg/info/Link.svg";
import Place from "@/assets/svg/info/place.svg";
import Profile from "@/assets/svg/info/Profile.svg";
import NextBtn from "@/assets/svg/NextBtn.svg";
import Image from "next/image";
import NameMarker from "@/components/Marker/Name/NameMarker";
import Food from "@/assets/svg/Food.svg";
import Cafe from "@/assets/svg/Cafe.svg";
import Culture from "@/assets/svg/Culture.svg";
import Etc from "@/assets/svg/Etc.svg";
import Beauty from "@/assets/svg/Beauty.svg";
import StampModal from "@/components/organisms/Modal/StampModal";
import FinishModal from "@/components/organisms/Modal/FinishModal";
import { SizeTypeImg68 } from "@/utils/TypeImg";
import { useRouter } from "next/router";
import { getContractInfo } from "@/pages/api/ContractAPI";
import { ContractInfo } from "@/@types/Contract";
import { typeEngtoKor } from "@/components/Marker/Icon/IconMarker";

const ContactStore = () => {
  const [data, setData] = useState<ContractInfo>({
    benefits: [],
    category: "NONE",
    endDate: "",
    latitude: 0,
    longitude: 0,
    manager: "",
    mapUrl: "",
    phoneNumber: "",
    startDate: "string",
    storeId: 0,
    storeName: "",
    visitInfo: {},
    address: "",
  });

  const router = useRouter();
  const { id } = router.query;
  console.log("id", id);

  const [isStampModal, setIsStampModal] = useState<boolean>(false);
  const [isFinishModal, setIsFinishModal] = useState<boolean>(false);
  const handleOnClickStamp = () => {
    setIsStampModal(!isStampModal);
  };

  const handleOnClickFinish = () => {
    setIsFinishModal(!isFinishModal);
  };
  const typeStyles: {
    [key: string]: {
      value: React.JSX.Element;
    };
  } = SizeTypeImg68();

  useEffect(() => {
    const info = getContractInfo(Number(id));
    info.then((res) => {
      setData(res);
      console.log("info", res);
    });
  }, [id]);
  const eng = ["FOOD", "CAFE", "CULTURE", "BEAUTY", "ETC"];

  const typeEngtoKor = (
    name: string
  ): "음식점" | "카페" | "문화" | "미용" | "기타" => {
    const kor = ["음식점", "카페", "문화", "미용", "기타"];
    return kor[eng.indexOf(name)] as
      | "음식점"
      | "카페"
      | "문화"
      | "미용"
      | "기타";
  };

  return (
    <>
      <styled.Container>
        <styled.HeadTitleBox>제휴 가게</styled.HeadTitleBox>
        <styled.ButtonsBox>
          <GrayButton
            label={data?.startDate + " - " + data?.endDate}
            width={216}
            color="black"
          />
          <div style={{ marginLeft: "101px" }}>
            <GrayButton
              onClick={handleOnClickFinish}
              label="제휴 종료"
              width={111}
              color={`${COLORS.blue}`}
            />
          </div>
          <div style={{ marginLeft: "auto" }}>
            <GrayButton
              onClick={handleOnClickStamp}
              label="2배 스탬프 적용"
              width={111}
              color="#636366"
            />
          </div>
        </styled.ButtonsBox>
        <styled.MainBox>
          <styled.MapBox>
            <KakaoMap
              latitude={data ? data.latitude : 37.5407625}
              longitude={data ? data.longitude : 127.0740428}
            >
              {data && (
                <NameMarker
                  lat={data ? data.latitude : 37.5407625}
                  lng={data ? data.longitude : 127.0740428}
                  type={data.category}
                  icon={""}
                  title={data ? data?.storeName : ""}
                  markerType={data ? typeEngtoKor(data?.category) : ""}
                />
              )}
            </KakaoMap>
          </styled.MapBox>
          <styled.InfoBox>
            <styled.TopBox>
              <styled.TopIconBox>
                {data ? typeStyles[typeEngtoKor(data.category)]?.value : ""}
              </styled.TopIconBox>
              <styled.TopTitleBox>{data?.storeName}</styled.TopTitleBox>
              <styled.TopTypeBox>
                {typeEngtoKor(data?.category)}
              </styled.TopTypeBox>
            </styled.TopBox>
            <styled.StoreInfoContainer>
              <styled.StoreInfoBox>
                <styled.SmallIconBox>
                  <Place alt="place icon" width={22} height={22} />
                </styled.SmallIconBox>
                <styled.TextBox>{data.address}</styled.TextBox>
              </styled.StoreInfoBox>
              <styled.StoreInfoBox>
                <styled.SmallIconBox>
                  <Benefit alt="Benefit icon" width={22} height={22} />
                </styled.SmallIconBox>
                <styled.TextBox>
                  {data.benefits[0]?.condition}
                  <styled.PercentBox>
                    {data.benefits[0]?.content}
                  </styled.PercentBox>
                </styled.TextBox>
              </styled.StoreInfoBox>
              <styled.StoreInfoBox>
                <styled.SmallIconBox>
                  <Call alt="Call icon" width={22} height={22} />
                </styled.SmallIconBox>
                <styled.TextBox>{data?.phoneNumber}</styled.TextBox>
              </styled.StoreInfoBox>
              <styled.StoreInfoBox>
                <styled.SmallIconBox>
                  <Profile alt="profile icon" width={22} height={22} />
                </styled.SmallIconBox>
                <styled.TextBox>{data?.manager}</styled.TextBox>
              </styled.StoreInfoBox>
              <styled.StoreInfoBox>
                <styled.SmallIconBox>
                  <LinkImg alt="link icon" width={22} height={22} />
                </styled.SmallIconBox>
                <styled.TextBox>{data?.mapUrl}</styled.TextBox>
              </styled.StoreInfoBox>
            </styled.StoreInfoContainer>
            <styled.DashBoardsBox>
              <styled.DashTopBox>
                <styled.DashTitleBox>대시보드</styled.DashTitleBox>
                <styled.NextBox>
                  <NextBtn alt="next button" width={24} height={24} />
                </styled.NextBox>
              </styled.DashTopBox>
              <styled.DashContainer>
                <styled.DashBoardBox>
                  <styled.DashTxt>일 방문 수</styled.DashTxt>
                  <styled.DashCount>21</styled.DashCount>
                </styled.DashBoardBox>
                <styled.DashBoardBox>
                  <styled.DashTxt>누적 혜택</styled.DashTxt>
                  <styled.DashCount>143,000</styled.DashCount>
                </styled.DashBoardBox>
                <styled.DashBoardBox>
                  <styled.DashTxt>목표 달성률</styled.DashTxt>
                  <styled.DashCount>46%</styled.DashCount>
                </styled.DashBoardBox>
              </styled.DashContainer>
            </styled.DashBoardsBox>
          </styled.InfoBox>
        </styled.MainBox>
      </styled.Container>
      {isStampModal && <StampModal setIsStampModal={setIsStampModal} />}
      {isFinishModal && (
        <FinishModal
          title={data.storeName}
          type={typeEngtoKor(data.category)}
          setIsFinishModal={setIsFinishModal}
        />
      )}
    </>
  );
};

export default ContactStore;
