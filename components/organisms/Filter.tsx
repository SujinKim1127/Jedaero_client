import * as styles from "@/components/styles/Search.styles";
import UCafe from "@/assets/svg/unselect/uCafe.svg";
import UCulture from "@/assets/svg/unselect/uCulture.svg";
import UEtc from "@/assets/svg/unselect/uEtc.svg";
import UFood from "@/assets/svg/unselect/uFood.svg";
import UBeauty from "@/assets/svg/unselect/uBeauty.svg";
import { SizeTypeImg25 } from "@/utils/TypeImg";
import { ReactNode, useState } from "react";
import { useRecoilState } from "recoil";
import { NewClickStore } from "@/states/Store";

interface FProps {
  AllCount?: number;
  setContentFilter: Function;
}

const Filter = ({ AllCount = -1, setContentFilter }: FProps) => {
  const [clickStore, setClickStore] = useRecoilState(NewClickStore);

  const kor = ["음식점", "카페", "문화", "미용", "기타"];
  const eng = ["FOOD", "CAFE", "CULTURE", "BEAUTY", "ETC"];

  const typeKorToEng = (name: string) => {
    return eng[kor.indexOf(name)];
  };

  const [isAll, setIsAll] = useState(true);
  const [filterState, setFilterState] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleOnClickAll = () => {
    setIsAll(!isAll);
    setFilterState([false, false, false, false, false]);
    setContentFilter("NONE");
    setClickStore({
      isClick: false,
      name: "",
      type: "",
      lat: 0,
      lng: 0,
    });
  };

  const handleOnClickFilter = (idx: number) => {
    setIsAll(false);
    setFilterState((prevState) =>
      prevState.map((value, index) => (index === idx ? true : false))
    );
    setClickStore({
      isClick: false,
      name: "",
      type: "",
      lat: 0,
      lng: 0,
    });
  };

  const filterName: ("음식점" | "카페" | "미용" | "문화" | "기타")[] = [
    "음식점",
    "카페",
    "미용",
    "문화",
    "기타",
  ];

  const typeStyles: { [key: string]: { value: ReactNode } } = {
    음식점: {
      value: <UFood alt="food marker" width={30} height={30} />,
    },
    카페: {
      value: <UCafe alt="cafe marker" width={30} height={30} />,
    },
    미용: {
      value: <UBeauty alt="Beauty marker" width={30} height={30} />,
    },
    문화: {
      value: <UCulture alt="Culture marker" width={30} height={30} />,
    },
    기타: {
      value: <UEtc alt="Etc marker" width={30} height={30} />,
    },
  };

  const typeIcon25 = SizeTypeImg25();

  return (
    <styles.FiltersBox>
      <styles.FilterAllText type={isAll} onClick={handleOnClickAll}>
        전체{AllCount !== -1 && `(${AllCount})`}
      </styles.FilterAllText>
      {filterName.map((el, idx) => {
        return (
          <styles.FilterComponentBox
            key={el}
            onClick={() => {
              handleOnClickFilter(idx);
              setContentFilter(typeKorToEng(el));
            }}
          >
            <styles.FilterIconBox>
              {filterState[idx] ? typeIcon25[el].value : typeStyles[el].value}
            </styles.FilterIconBox>
            <styles.FilterText type={filterState[idx]}>{el}</styles.FilterText>
          </styles.FilterComponentBox>
        );
      })}
    </styles.FiltersBox>
  );
};

export default Filter;
