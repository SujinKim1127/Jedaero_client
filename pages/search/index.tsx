import KakaoMap from "@/components/Map";
import Storelist, { SProps } from "@/components/Storelist";
import * as styles from "@/components/styles/Search.styles";
import FullHeart from "@/assets/svg/FullHeart.svg";
import EmptyHeart from "@/assets/svg/EmptyHeart.svg";
import { useEffect, useState } from "react";
import Filter from "@/components/organisms/Filter";
import SearchInput from "@/components/SearchInput";
import NameMarker from "@/components/Marker/Name/NameMarker";
import Food from "@/assets/svg/Food.svg";
import Cafe from "@/assets/svg/Cafe.svg";
import Culture from "@/assets/svg/Culture.svg";
import Etc from "@/assets/svg/Etc.svg";
import Beauty from "@/assets/svg/Beauty.svg";
import { useRecoilState } from "recoil";
import { NewClickStore } from "@/states/Store";
import IconMarker from "@/components/Marker/Icon/IconMarker";
import { FilterProps, getStoreBase, getStoreWithFilter } from "../api/StoreAPI";
import { StoreMapListInfo } from "@/@types/Store";

export default function SearchHome() {
  const [data, setData] = useState<StoreMapListInfo[]>();
  const [input, setInput] = useState<string>("");
  const [operateFilter, setOperateFilter] = useState<FilterProps>({
    isPicked: false,
    name: "",
    category: "NONE",
    pageNumber: 0,
  });
  const [contentFilter, setContentFilter] = useState<
    "NONE" | "FOOD" | "CAFE" | "BEAUTY" | "CULTURE" | "ETC"
  >("NONE");
  const [isSearch, setIsSearch] = useState(false);
  const [clickStore, setClickStore] = useRecoilState(NewClickStore);
  const eng = ["FOOD", "CAFE", "CULTURE", "BEAUTY", "ETC"];

  const typeEngtoKor = (name: string) => {
    const kor = ["음식점", "카페", "문화", "미용", "기타"];
    return kor[eng.indexOf(name)] as SProps["type"];
  };

  const returnSVG = (name: string) => {
    const arr = [Food, Cafe, Culture, Beauty, Etc];
    return arr[eng.indexOf(name)];
  };

  useEffect(() => {
    const baseData = getStoreBase();
    baseData.then((res) => {
      if (res !== null) {
        setData(res.stores);
        console.log("res", res.stores);
      }
    });
  }, []);

  // 가게 타입 필터를 누를때마다 실행되는 함수
  useEffect(() => {
    setOperateFilter((prevFilter) => ({
      ...prevFilter,
      category: contentFilter,
    }));
  }, [contentFilter]);

  // 필터가 바뀔때마다 실행되는 함수
  useEffect(() => {
    const filterData = getStoreWithFilter({
      isPicked: operateFilter.isPicked,
      name: operateFilter.name,
      category: operateFilter.category,
      pageNumber: operateFilter.pageNumber,
    });
    filterData.then((res) => {
      if (res !== null) {
        setData(res.stores || []);
        console.log("operateF", res.stores);
      }
    });
  }, [operateFilter]);

  const handleOnClickPick = () => {
    setOperateFilter((prevFilter) => ({
      ...prevFilter,
      isPicked: !operateFilter.isPicked,
    }));
  };

  return (
    <styles.Container>
      <styles.TopTitleBox>
        <styles.TitleBox>가게 찾기</styles.TitleBox>
        <styles.SubTitleBox>
          제휴를 진행할 가게를 찾아보세요.
        </styles.SubTitleBox>
      </styles.TopTitleBox>
      <styles.MiddleBox>
        <Filter setContentFilter={setContentFilter} />
        {/** TODO: 누르면 expand로 변경되도록 */}
        <styles.FilterEndBox>
          <SearchInput
            input={input}
            setInput={setInput}
            setOperateFilter={setOperateFilter}
            isSearch={isSearch}
            setIsSearch={setIsSearch}
          />
          <styles.HeartBox onClick={handleOnClickPick}>
            <styles.HeartIconBox>
              {operateFilter.isPicked ? (
                <FullHeart alt="pick" />
              ) : (
                <EmptyHeart alt="not pick" />
              )}
            </styles.HeartIconBox>
            <styles.HeartTextBox>픽한 업체</styles.HeartTextBox>
          </styles.HeartBox>
        </styles.FilterEndBox>
      </styles.MiddleBox>
      <styles.MainBox>
        <styles.MapBox>
          {/** 건국대학교 위치로 설정 (TODO: 추후에 변경 필요) */}
          <KakaoMap latitude={37.5407625} longitude={127.0740428}>
            {clickStore.isClick ? (
              <NameMarker
                lat={clickStore.lat}
                lng={clickStore.lng}
                type={clickStore.type}
                icon={returnSVG(typeEngtoKor(clickStore.type))}
                title={clickStore.name}
                markerType={clickStore.type}
              />
            ) : (
              <>
                {data &&
                  data.map((el, idx) => {
                    return idx === 1 ? (
                      <NameMarker
                        lat={el.latitude}
                        lng={el.longitude}
                        type={el.category}
                        icon={returnSVG(typeEngtoKor(el.category))}
                        title={el.storeName}
                        markerType={el.category}
                      />
                    ) : (
                      <IconMarker
                        key={el.storeId}
                        lat={el.latitude}
                        lng={el.longitude}
                        type={el.category}
                      />
                    );
                  })}
              </>
            )}
          </KakaoMap>
        </styles.MapBox>
        <styles.ListsBox>
          {data?.map((el) => {
            return (
              <Storelist
                key={el.storeId}
                isPicked={el.isPicked}
                storeId={el.storeId}
                title={el.storeName}
                type={typeEngtoKor(el.category)}
                description={el.description}
                place={el.address}
                distance={Math.floor(el.distance)}
                lat={el.latitude}
                lng={el.longitude}
              />
            );
          })}
        </styles.ListsBox>
      </styles.MainBox>
    </styles.Container>
  );
}
