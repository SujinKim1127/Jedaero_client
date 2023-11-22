import { Map } from "react-kakao-maps-sdk";
import { ReactNode } from "react";

interface Position {
  latitude: number;
  longitude: number;
  children: React.ReactNode;
}

const KakaoMap = ({ latitude, longitude, children }: Position) => {
  return (
    <Map
      center={{ lat: latitude, lng: longitude }}
      level={5}
      style={{ width: "100%", height: "100%" }}
    >
      {children}
    </Map>
  );
};

export default KakaoMap;
