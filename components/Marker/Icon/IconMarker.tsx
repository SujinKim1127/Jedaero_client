import { CustomOverlayMap } from "react-kakao-maps-sdk";
import { SizeTypeImg25 } from "@/utils/TypeImg";

interface NameMarkerProps {
  lat: number;
  lng: number;
  type: "FOOD" | "CAFE" | "BEAUTY" | "CULTURE" | "ETC" | "NONE";
}

type TypeIcon = {
  [key: string]: {
    value: JSX.Element;
  };
};

export const typeIcon: TypeIcon = SizeTypeImg25();

const eng = ["FOOD", "CAFE", "CULTURE", "BEAUTY", "ETC"];

export const typeEngtoKor = (name: string) => {
  const kor = ["음식점", "카페", "문화", "미용", "기타"];
  return kor[eng.indexOf(name)];
};

const IconMarker = ({ lat, lng, type }: NameMarkerProps) => {
  const typeName = typeEngtoKor(type);
  const iconElement = typeIcon[typeName]?.value || null;

  return (
    <CustomOverlayMap position={{ lat: lat, lng: lng }}>
      {iconElement}
    </CustomOverlayMap>
  );
};
export default IconMarker;
