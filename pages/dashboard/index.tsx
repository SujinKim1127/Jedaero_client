import * as styles from "@/components/styles/dashboard/style";
import Head from "next/head";
import { css } from "@emotion/css";
import { useEffect, useState } from "react";
import useDateRange from "@/components/hooks/useDateRange";
import FirstLayerChart from "./FirstLayerChart";
import PieCharts from "./PieCharts";
import StackCharts from "./StackCharts";
import ListChart from "./ListChart";
import { useDashBoardData } from "@/components/hooks/useDashBoardData";
import BarChart from "./BarChart";
import Filter from "@/components/organisms/Filter";

interface DashBoardProps {}
interface DateState {
  dates: dates;
}

enum dates {
  aWeek,
  twoWeek,
  month,
  year,
}
const DashBoardPage: React.FC = () => {
  const { dateRange, calculateDateRange } = useDateRange();
  const barChartData = useDashBoardData({ selection: 1 }).data;
  const barChartData2 = useDashBoardData({ selection: 2 }).data;
  const [contentFilter, setContentFilter] = useState<
    "NONE" | "FOOD" | "CAFE" | "BEAUTY" | "CULTURE" | "ETC"
  >("FOOD");

  const [dateFilter, setDateFilter] = useState<DateState>({
    dates: dates.aWeek,
  });

  useEffect(() => {
    calculateDateRange(1, "month");
  }, [dateFilter]);

  return (
    <>
      <Head>
        <title>제대로 대시보드</title>
        <meta name="dashboard" content="대시보드" />
      </Head>
      <styles.Container>
        <styles.TitleContainer>
          <styles.Title>대시보드</styles.Title>
          <styles.SearchButton
            className={css`
              align-self: flex-end;
            `}
          >
            가게별 검색
          </styles.SearchButton>
          <styles.SubTitle>
            이번달 [{dateRange.startDate} -{dateRange.endDate}] 기준입니다.
          </styles.SubTitle>
        </styles.TitleContainer>

        <styles.OptionContainer>

          <Filter setContentFilter={setContentFilter} />
          <styles.ButtonWrapper>
            <styles.IndexButton>최근 7일</styles.IndexButton>
            <styles.IndexButton>최근 14일</styles.IndexButton>
            <styles.IndexButton>이번 달</styles.IndexButton>
            <styles.IndexButton>지난 달</styles.IndexButton>
            <styles.IndexButton>올해</styles.IndexButton>
          </styles.ButtonWrapper>
        </styles.OptionContainer>

        <styles.ContentsContainer>
          <styles.FirstLayer>
            <styles.FirstBox>
              <FirstLayerChart title="일 방문 수" content="21" />
            </styles.FirstBox>
            <styles.SecondBox>
              <FirstLayerChart title="누적 혜택" content="143,000" />
            </styles.SecondBox>
            <styles.ThirdBox>
              <FirstLayerChart title="평균 혜택 이용 수" content="2.4회" />
            </styles.ThirdBox>
          </styles.FirstLayer>
          <styles.SecondLayer>
            <styles.FourthBox>
              <PieCharts />
            </styles.FourthBox>
            <styles.FifthBox>
              <StackCharts />
            </styles.FifthBox>
            <styles.SixthUpperBox>
              <ListChart
                title="제휴가게 방문자 수 상위 Top N (누적)"
                contents={["탕화쿵푸", "탕화쿵푸", "탕화풍푸"]}
              />
            </styles.SixthUpperBox>
            <styles.SixthLowerBox>
              <ListChart
                title="제휴가게 방문자 수 하위 Top N (누적)"
                contents={["탕화쿵푸", "탕화쿵푸", "탕화풍푸"]}
              />
            </styles.SixthLowerBox>
          </styles.SecondLayer>
          <styles.ThirdLayer>
            <styles.SeventhBox>
              <BarChart
                title="주 이용 요일"
                data={barChartData}
                color="#3D4149"
              />
            </styles.SeventhBox>
            <styles.EightthBox>
              <BarChart
                title="학과 별 이용량 순위"
                data={barChartData2}
                color="#0E6EFF"
              />
            </styles.EightthBox>
          </styles.ThirdLayer>
        </styles.ContentsContainer>
      </styles.Container>
    </>
  );
};

export default DashBoardPage;
