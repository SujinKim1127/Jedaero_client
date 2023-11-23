import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as styles from "@/components/styles/dashboardDetail/style";
import useDateRange from "@/components/hooks/useDateRange";
import FirstChart from "./FirstChart";
import ComposedChart from "./ComposedChart";
import OneStackChart from "./OneStackChart";
import BackgroundedChart from "./BackgroundedChart";
import FirstLayerChart from "./FirstLayerChart";

interface dateProps {
  startDate: string;
  endDate: string;
}

const StorePage = () => {
  const router = useRouter();
  const { store } = router.query;

  const [date, setDate] = useState<dateProps>();
  const { dateRange, calculateDateRange } = useDateRange();

  useEffect(() => {
    calculateDateRange(1, "month");
  }, []);

  return (
    <styles.Container>
      <styles.UpperContainer>
        <styles.Title>{store}의 대시보드</styles.Title>
        <styles.SubTitle>
          {dateRange?.startDate} ~ {dateRange?.endDate}기준입니다
        </styles.SubTitle>
        <styles.IndexBtnBox>
          <styles.IndexButton>최근 7일</styles.IndexButton>
          <styles.IndexButton>최근 14일</styles.IndexButton>
          <styles.IndexButton>이번 달</styles.IndexButton>
          <styles.IndexButton>지난 달</styles.IndexButton>
          <styles.IndexButton>올해</styles.IndexButton>
        </styles.IndexBtnBox>
      </styles.UpperContainer>
      <styles.LowerContainer>
        <styles.FirstBox>
          <FirstLayerChart
            title="순 방문자 수 (제휴 제공 빈도)"
            content="130"
          />
        </styles.FirstBox>
        <styles.SecondBox>
          <FirstLayerChart title="신규 방문 인원" content="5" />
        </styles.SecondBox>
        <styles.ThirdBox>

          <FirstLayerChart title="평균 혜택 이용 수" content="1.3회" />

        </styles.ThirdBox>
        <styles.FourthBox>
          <ComposedChart title="총 판매 금액 & 제휴 제공 금액" />
        </styles.FourthBox>
        <styles.FifthBox>
          <OneStackChart title="이용증감률" />
        </styles.FifthBox>
        <styles.SixthBox>
          <BackgroundedChart title="주 이용요일" data={data} color="#2C5AFF" />
        </styles.SixthBox>
        <styles.SeventhBox>
          <BackgroundedChart
            title="학과별 이용량 순위"
            color="#3D4149"
            data={data2}
          />
        </styles.SeventhBox>
      </styles.LowerContainer>
    </styles.Container>
  );
};

export default StorePage;

const data = [
  {
    name: "월요일",
    uv: 200,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "화요일",
    uv: 1000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "수요일",
    uv: 1400,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "목요일",
    uv: 1200,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "금요일",
    uv: 800,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "토요일",
    uv: 1500,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "일요일",
    uv: 1700,
    pv: 4300,
    amt: 2100,
  },
];

const data2 = [
  {
    name: "경영",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "경제",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "컴공",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "신소재",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "법학",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "영어영문",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "철학",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
