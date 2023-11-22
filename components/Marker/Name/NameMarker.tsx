import { CustomOverlayMap } from "react-kakao-maps-sdk";
import * as styles from "@/components/Marker/Name/Name.styles";
import { useRecoilValue } from "recoil";
import { NewClickStore } from "@/states/Store";
import Select from "@/assets/svg/Select.svg";
import { typeIcon } from "../Icon/IconMarker";
import zIndex from "@mui/material/styles/zIndex";

interface NameMarkerProps {
  lat: number;
  lng: number;
  type: string;
  icon: string;
  title: string;
  markerType: string;
}

const NameMarker = ({
  lat,
  lng,
  type = "CULTURE",
  title,
  markerType,
}: NameMarkerProps) => {
  const clickStore = useRecoilValue(NewClickStore);
  const eng = ["FOOD", "CAFE", "CULTURE", "BEAUTY", "ETC"];

  const typeEngtoKor = (name: string) => {
    const kor = ["음식점", "카페", "문화", "미용", "기타"];
    return kor[eng.indexOf(name)];
  };
  const typeName = typeEngtoKor(type);
  const iconElement = typeIcon[typeName]?.value || null;

  return (
    <CustomOverlayMap position={{ lat: lat, lng: lng }} zIndex={5}>
      <styles.MarkerContainer type={type}>
        <styles.MarkerIconBox>
          {clickStore.isClick ? <Select /> : iconElement}
        </styles.MarkerIconBox>
        <styles.MarkerInfoBox>
          <styles.MarkerTitleBox>{title}</styles.MarkerTitleBox>
          <styles.MarkerTypeBox>
            {typeEngtoKor(markerType)}
          </styles.MarkerTypeBox>
        </styles.MarkerInfoBox>
      </styles.MarkerContainer>
    </CustomOverlayMap>
  );
};

export default NameMarker;
