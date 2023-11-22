import * as styles from "@/components/styles/Search.styles";
import DownArrow from "@/assets/svg/DownArrow.svg";
import UpArrow from "@/assets/svg/UpArrow.svg";
import EmptyHeart from "@/assets/svg/EmptyHeart.svg";
import FullHeart from "@/assets/svg/FullHeart.svg";
import { useEffect, useState } from "react";
import { SizeTypeImg68 } from "@/utils/TypeImg";
import StoreInfo from "./StoreInfo";
import { useRecoilState } from "recoil";
import { NewClickStore } from "@/states/Store";
import { deletePickStore, postPickStore } from "@/pages/api/StoreAPI";

export interface SProps {
  type: "음식점" | "카페" | "문화" | "미용" | "기타";
  title: string;
  description: string;
  place: string;
  distance: number;
  lat: number;
  lng: number;
  storeId: number;
  isPicked: boolean;
}

const typeStyles = SizeTypeImg68();

const Storelist = ({
  type,
  title,
  place,
  distance,
  description,
  lat,
  lng,
  storeId,
  isPicked,
}: SProps) => {
  useEffect(() => {}, [isPicked]);

  const [isClick, setIsClick] = useState<boolean>(isPicked);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [clickStore, setClickStore] = useRecoilState(NewClickStore);

  const handleOnClickHeart = () => {
    setIsClick(!isClick);
    if (!isPicked) {
      postPickStore(storeId);
    } else {
      deletePickStore(storeId);
    }
  };

  const handleOnClickOpen = () => {
    if (!clickStore.isClick) {
      setIsOpen(!isOpen);
      setClickStore({
        isClick: !isOpen,
        name: title,
        type: type,
        lat: lat,
        lng: lng,
      });
    } else if (clickStore.name === title) {
      setIsOpen(false);
      setClickStore({
        isClick: false,
        name: title,
        type: type,
        lat: lat,
        lng: lng,
      });
    }
  };

  return (
    <>
      <styles.ListTopBox>
        <styles.TypeImgBox>{typeStyles[type].value}</styles.TypeImgBox>
        <styles.InfoContainerBox>
          <styles.InfoTopBox>
            <styles.NameBox>{title}</styles.NameBox>
            <styles.StoreTypeBox>{type}</styles.StoreTypeBox>
            <styles.StoreHeartBox onClick={handleOnClickHeart}>
              {isClick ? (
                <FullHeart alt="FullHeart" />
              ) : (
                <EmptyHeart alt="emptyHeart" />
              )}
            </styles.StoreHeartBox>
          </styles.InfoTopBox>
          <styles.StoreInfoBox>{description}</styles.StoreInfoBox>
          <styles.StoreBottomBox>
            <styles.StoreLocationBox>{place}</styles.StoreLocationBox>
            <styles.StoreDistanceBox>{distance}m</styles.StoreDistanceBox>
          </styles.StoreBottomBox>
        </styles.InfoContainerBox>
      </styles.ListTopBox>
      <styles.ListBottomBox>
        {isOpen && <StoreInfo storeId={storeId} />}

        <styles.InfoContainerBox>
          <styles.DownBtnBox
            isDown={clickStore.name === title || !clickStore.isClick}
            onClick={handleOnClickOpen}
          >
            {isOpen ? (
              <UpArrow
                style={{ marginTop: "35px" }}
                alt="up arrow button"
                width={20}
                height={20}
              />
            ) : (
              <DownArrow alt="down arrow button" width={20} height={20} />
            )}
          </styles.DownBtnBox>
        </styles.InfoContainerBox>
      </styles.ListBottomBox>
    </>
  );
};

export default Storelist;
