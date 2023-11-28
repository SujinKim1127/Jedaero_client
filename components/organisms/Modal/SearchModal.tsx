import Modal from "@/components/organisms/Modal/Modal";
import * as styles from "@/components/styles/SearchModal.styles";
import CloseIcon from "@/assets/svg/Close.svg";
import SearchIcon from "@/assets/svg/Search.svg";
import Filter from "@/components/organisms/Filter";
import { SizeTypeImg49 } from "@/utils/TypeImg";
import { useEffect, useState } from "react";
import { StoreMapListInfo, businessHour } from "@/@types/Store";
import {
  FilterProps,
  getStoreBase,
  getStoreInfo,
  getStoreWithFilter,
} from "@/pages/api/StoreAPI";
import { SProps } from "@/components/Storelist";
import { NewEnrollStore } from "@/states/Enroll";
import { useRecoilState } from "recoil";

interface SMProps {
  setIsSearchOpen: Function;
}

const SearchModal = ({ setIsSearchOpen }: SMProps) => {
  const [enrollInfo, setEnrollInfo] = useRecoilState(NewEnrollStore);
  const [time, setTime] = useState();
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
  const eng = ["FOOD", "CAFE", "CULTURE", "BEAUTY", "ETC"];

  const typeEngtoKor = (name: string) => {
    const kor = ["음식점", "카페", "문화", "미용", "기타"];
    return kor[eng.indexOf(name)] as SProps["type"];
  };

  useEffect(() => {
    const baseData = getStoreBase();
    baseData.then((res) => {
      if (res !== null) {
        setData(res.stores);
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
      }
    });
  }, [operateFilter]);

  const typeIcon49 = SizeTypeImg49();

  const handleOnClickCloseBtn = () => {
    setIsSearchOpen(false);
  };
  const handleInputChange = (event: any) => {
    setInput(event.target.value);
  };

  return (
    <Modal>
      <styles.ModalContainer>
        <div style={{ display: "flex" }}>
          <styles.ModalCloseBox onClick={handleOnClickCloseBtn}>
            <CloseIcon alt="close icon" width={32} height={32} />
          </styles.ModalCloseBox>
        </div>
        <styles.ModalSearchBox>
          <styles.SearchInput
            value={input}
            placeholder="제휴하려는 가게를 찾아보세요!"
            onChange={handleInputChange}
          />
          <styles.SearchIconBox
            onClick={() => {
              setOperateFilter((prev: any) => ({
                ...prev,
                name: input,
              }));
            }}
          >
            <SearchIcon alt="search icon" />
          </styles.SearchIconBox>
        </styles.ModalSearchBox>
        <styles.ModalFilterBox>
          <Filter setContentFilter={setContentFilter} />
        </styles.ModalFilterBox>
        <styles.ModalListsBox>
          {data?.map((el) => {
            return (
              <styles.ModalStoreList key={el.storeId}>
                <styles.ModalStoreIconBox>
                  {typeIcon49[typeEngtoKor(el.category)].value}
                </styles.ModalStoreIconBox>
                <styles.ModalStoreInfoBox>
                  <styles.ModalStoreTopBox>
                    <styles.ModalStoreName>
                      {el.storeName}
                    </styles.ModalStoreName>
                    <styles.ModalStoreType>
                      {typeEngtoKor(el.category)}
                    </styles.ModalStoreType>
                  </styles.ModalStoreTopBox>
                  <styles.ModalStoreBottomBox>
                    {el.address}
                  </styles.ModalStoreBottomBox>
                </styles.ModalStoreInfoBox>
                <styles.ModalCheckBox
                  onClick={() => {
                    const info = getStoreInfo(el.storeId);
                    info.then((res) => {
                      setTime(res.businessHours);
                    });

                    setEnrollInfo({
                      storeId: el.storeId,
                      address: el.address,
                      category: el.category,
                      description: el.description,
                      storeName: el.storeName,
                      distance: el.distance,
                      time: time,
                    });
                    setIsSearchOpen(false);
                  }}
                >
                  확인
                </styles.ModalCheckBox>
              </styles.ModalStoreList>
            );
          })}
        </styles.ModalListsBox>
      </styles.ModalContainer>
    </Modal>
  );
};

export default SearchModal;
