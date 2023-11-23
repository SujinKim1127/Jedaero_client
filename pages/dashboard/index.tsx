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
import SearchModal from "@/components/organisms/Modal/\bSearchModal";

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
  const [isSearch, setIsSearch] = useState(false);
  const { dateRange, calculateDateRange } = useDateRange();

  const [contentFilter, setContentFilter] = useState<
    "NONE" | "FOOD" | "CAFE" | "BEAUTY" | "CULTURE" | "ETC"
  >("FOOD");

  const [dateFilter, setDateFilter] = useState<DateState>({
    dates: dates.aWeek,
  });

  const [menu, setMenu] = useState("최근7일");

  useEffect(() => {
    calculateDateRange(1, "month");
  }, [dateFilter]);

  console.log(menu);
  return (
    <>
      <Head>
        <title>제대로 대시보드</title>
        <meta name="dashboard" content="대시보드" />
      </Head>
      <styles.Container>
        <styles.TitleContainer>
          <styles.Title>대시보드</styles.Title>
          <styles.SubTitleBox>
            학생들의 제휴 이용 현황을 확인해보세요.
          </styles.SubTitleBox>
          <styles.SearchButton
            onClick={() => {
              setIsSearch(true);
            }}
            className={css`
              align-self: flex-end;
            `}
          >
            가게별 검색
          </styles.SearchButton>
          <styles.SubTitle>
            {menu == "최근7일"
              ? datas.day7.date
              : menu == "최근14일"
              ? datas.day14.zero
              : menu == "이번달"
              ? datas.month.zero
              : menu == "지난달"
              ? datas.lastMonth.zero
              : datas.year.zero}
          </styles.SubTitle>
        </styles.TitleContainer>

        <styles.OptionContainer>
          <Filter setContentFilter={setContentFilter} />
          <styles.ButtonWrapper>
            <styles.IndexButton
              selected={menu == "최근7일"}
              onClick={() => {
                setMenu("최근7일");
              }}
            >
              최근 7일
            </styles.IndexButton>
            <styles.IndexButton
              selected={menu == "최근14일"}
              onClick={() => {
                setMenu("최근14일");
              }}
            >
              최근 14일
            </styles.IndexButton>
            <styles.IndexButton
              selected={menu == "이번달"}
              onClick={() => {
                setMenu("이번달");
              }}
            >
              이번 달
            </styles.IndexButton>
            <styles.IndexButton
              selected={menu == "지난달"}
              onClick={() => {
                setMenu("지난달");
              }}
            >
              지난 달
            </styles.IndexButton>
            <styles.IndexButton
              selected={menu == "올해"}
              onClick={() => {
                setMenu("올해");
              }}
            >
              올해
            </styles.IndexButton>
          </styles.ButtonWrapper>
        </styles.OptionContainer>

        <styles.ContentsContainer>
          <styles.FirstLayer>
            <styles.FirstBox>
              <FirstLayerChart
                title="일 방문 수"
                content={
                  menu == "최근7일"
                    ? datas.day7.first[1]
                    : menu == "최근14일"
                    ? datas.day14.first[1]
                    : menu == "이번달"
                    ? datas.month.first[1]
                    : menu == "지난달"
                    ? datas.lastMonth.first[1]
                    : datas.year.first[1]
                }
              />
            </styles.FirstBox>
            <styles.SecondBox>
              <FirstLayerChart
                title="누적 혜택"
                content={
                  menu == "최근7일"
                    ? datas.day7.second[1]
                    : menu == "최근14일"
                    ? datas.day14.second[1]
                    : menu == "이번달"
                    ? datas.month.second[1]
                    : menu == "지난달"
                    ? datas.lastMonth.second[1]
                    : datas.year.second[1]
                }
              />
            </styles.SecondBox>
            <styles.ThirdBox>
              <FirstLayerChart
                title="평균 혜택 이용 수"
                content={
                  menu == "최근7일"
                    ? datas.day7.third[1]
                    : menu == "최근14일"
                    ? datas.day14.third[1]
                    : menu == "이번달"
                    ? datas.month.third[1]
                    : menu == "지난달"
                    ? datas.lastMonth.third[1]
                    : datas.year.third[1]
                }
              />
            </styles.ThirdBox>
          </styles.FirstLayer>
          <styles.SecondLayer>
            <styles.FourthBox>
              <PieCharts
                data={
                  menu == "최근7일"
                    ? datas.day7.fourth
                    : menu == "최근14일"
                    ? datas.day14.fourth
                    : menu == "이번달"
                    ? datas.month.fourth
                    : menu == "지난달"
                    ? datas.lastMonth.fourth
                    : datas.year.fourth
                }
              />
            </styles.FourthBox>
            <styles.FifthBox>
              <StackCharts
                data={
                  menu == "최근7일"
                    ? datas.day7.fifth
                    : menu == "최근14일"
                    ? datas.day14.fifth
                    : menu == "이번달"
                    ? datas.month.fifth
                    : menu == "지난달"
                    ? datas.lastMonth.fifth
                    : datas.year.fifth
                }
              />
            </styles.FifthBox>
            <styles.SixthUpperBox>
              <ListChart
                title="제휴가게 방문자 수 상위 Top N (누적)"
                contents={
                  menu == "최근7일"
                    ? datas.day7.sixth
                    : menu == "최근14일"
                    ? datas.day14.sixth
                    : menu == "이번달"
                    ? datas.month.sixth
                    : menu == "지난달"
                    ? datas.lastMonth.sixth
                    : datas.year.sixth
                }
              />
            </styles.SixthUpperBox>
            <styles.SixthLowerBox>
              <ListChart
                title="제휴가게 방문자 수 하위 Top N (누적)"
                contents={
                  menu == "최근7일"
                    ? datas.day7.seventh
                    : menu == "최근14일"
                    ? datas.day14.seventh
                    : menu == "이번달"
                    ? datas.month.seventh
                    : menu == "지난달"
                    ? datas.lastMonth.seventh
                    : datas.year.seventh
                }
              />
            </styles.SixthLowerBox>
          </styles.SecondLayer>
          <styles.ThirdLayer>
            <styles.SeventhBox>
              <BarChart
                title="주 이용 요일"
                data={
                  menu == "최근7일"
                    ? datas.day7.eightth
                    : menu == "최근14일"
                    ? datas.day14.eightth
                    : menu == "이번달"
                    ? datas.month.eightth
                    : menu == "지난달"
                    ? datas.lastMonth.eightth
                    : datas.year.eightth
                }
                color="#3D4149"
              />
            </styles.SeventhBox>
            <styles.EightthBox>
              <BarChart
                title="학과 별 이용량 순위"
                data={
                  menu == "최근7일"
                    ? datas.day7.nineth
                    : menu == "최근14일"
                    ? datas.day14.nineth
                    : menu == "이번달"
                    ? datas.month.nineth
                    : menu == "지난달"
                    ? datas.lastMonth.nineth
                    : datas.year.eightth
                }
                color="#0E6EFF"
              />
            </styles.EightthBox>
          </styles.ThirdLayer>
        </styles.ContentsContainer>
      </styles.Container>
      {isSearch && <SearchModal setIsSearchOpen={setIsSearch} />}
    </>
  );
};

export default DashBoardPage;

const datas = {
  day7: {
    date: "최근 7일 [2023-11-18 ~ 2023-11-25] 기준입니다.",
    first: ["일 방문수", "21"],
    second: ["누적 혜택", "3,000"],
    third: ["평균 혜택 이용 수", "3회"],
    fourth: [
      { name: "대학교 1학년", value: 70 },
      { name: "대학교 2학년", value: 20 },
      { name: "대학교 3학년", value: 10 },
      { name: "대학교 4학년", value: 20 },
    ],
    fifth: [
      {
        name: "Page A",
        uv: 800,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "Page B",
        uv: 1100,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "Page C",
        uv: 1000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "Page D",
        uv: 2100,
        pv: 3908,
        amt: 2000,
      },
      {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: "Page F",
        uv: 3130,
        pv: 3800,
        amt: 2500,
      },
      {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ],
    sixth: ["탕화쿵푸", "황궁짜장면", "신의주 순대국"],
    seventh: ["서브웨이", "맥도날드", "도쿄라멘"],
    eightth: [
      {
        name: "월요일",
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "화요일",
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "수요일",
        uv: 4400,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "목요일",
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: "금요일",
        uv: 2200,
        pv: 4800,
        amt: 2181,
      },
      {
        name: "토요일",
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: "일요일",
        uv: 3100,
        pv: 4300,
        amt: 2100,
      },
    ],
    nineth: [
      {
        name: "경영",
        uv: 3000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "컴공",
        uv: 2600,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "경제",
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "산업디자인",
        uv: 1800,
        pv: 3908,
        amt: 2000,
      },
      {
        name: "영어영문",
        uv: 1400,
        pv: 4800,
        amt: 2181,
      },
      {
        name: "철학",
        uv: 800,
        pv: 3800,
        amt: 2500,
      },
      {
        name: "경제학",
        uv: 700,
        pv: 4300,
        amt: 2100,
      },
    ],
  },
  day14: {
    zero: "최근 14일 [2023-11-11 ~ 2023-11-25] 기준입니다.",
    first: ["일 방문수", "25"],
    second: ["누적 혜택", "165,000"],
    third: ["평균 혜택 이용 수", "2.8회"],
    fourth: [
      { name: "대학교 1학년", value: 50 },
      { name: "대학교 2학년", value: 30 },
      { name: "대학교 3학년", value: 15 },
      { name: "대학교 4학년", value: 25 },
    ],
    fifth: [
      {
        name: "Page A",
        uv: 1100,
        pv: 2800,
        amt: 2800,
      },
      {
        name: "Page B",
        uv: 1200,
        pv: 1580,
        amt: 2350,
      },
      {
        name: "Page C",
        uv: 1300,
        pv: 9000,
        amt: 2480,
      },
      {
        name: "Page D",
        uv: 1600,
        pv: 4108,
        amt: 2150,
      },
      {
        name: "Page E",
        uv: 3350,
        pv: 5300,
        amt: 1980,
      },
      {
        name: "Page F",
        uv: 2750,
        pv: 3200,
        amt: 2800,
      },
      {
        name: "Page G",
        uv: 4200,
        pv: 4800,
        amt: 2650,
      },
    ],
    sixth: ["스시", "스테이크", "랍스터"],
    seventh: ["피자헛", "버거킹", "KFC"],
    eightth: [
      {
        name: "월요일",
        uv: 8000,
        pv: 2800,
        amt: 2800,
      },
      {
        name: "화요일",
        uv: 3500,
        pv: 1580,
        amt: 2350,
      },
      {
        name: "수요일",
        uv: 2400,
        pv: 9600,
        amt: 2480,
      },
      {
        name: "목요일",
        uv: 2980,
        pv: 4108,
        amt: 2150,
      },
      {
        name: "금요일",
        uv: 1890,
        pv: 5300,
        amt: 1980,
      },
      {
        name: "토요일",
        uv: 2690,
        pv: 4200,
        amt: 2800,
      },
      {
        name: "일요일",
        uv: 3690,
        pv: 5600,
        amt: 2650,
      },
    ],
    nineth: [
      {
        name: "화학",
        uv: 3200,
        pv: 2600,
        amt: 2600,
      },
      {
        name: "물리학",
        uv: 2800,
        pv: 1898,
        amt: 2210,
      },
      {
        name: "생물학",
        uv: 2200,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "심리학",
        uv: 1900,
        pv: 4908,
        amt: 2000,
      },
      {
        name: "수학",
        uv: 1500,
        pv: 5500,
        amt: 2181,
      },
      {
        name: "사회학",
        uv: 1000,
        pv: 4800,
        amt: 2500,
      },
      {
        name: "영어문학",
        uv: 900,
        pv: 5300,
        amt: 2100,
      },
    ],
  },
  month: {
    zero: "이번달 [2023-11-01 ~ 2023-11-25] 기준입니다",
    first: ["일 방문수", "20"],
    second: ["누적 혜택", "189,000"],
    third: ["평균 혜택 이용 수", "2.6회"],
    fourth: [
      { name: "대학교 1학년", value: 60 },
      { name: "대학교 2학년", value: 25 },
      { name: "대학교 3학년", value: 20 },
      { name: "대학교 4학년", value: 22 },
    ],
    fifth: [
      {
        name: "Page A",
        uv: 1850,
        pv: 2500,
        amt: 2500,
      },
      {
        name: "Page B",
        uv: 1150,
        pv: 1480,
        amt: 2450,
      },
      {
        name: "Page C",
        uv: 1050,
        pv: 9200,
        amt: 2580,
      },
      {
        name: "Page D",
        uv: 4050,
        pv: 4308,
        amt: 2250,
      },
      {
        name: "Page E",
        uv: 1950,
        pv: 5100,
        amt: 2080,
      },
      {
        name: "Page F",
        uv: 4150,
        pv: 3500,
        amt: 2700,
      },
      {
        name: "Page G",
        uv: 3550,
        pv: 4000,
        amt: 2350,
      },
    ],
    sixth: ["중국음식", "일본음식", "이탈리아음식"],
    seventh: ["던킨도너츠", "서브웨이", "파파존스"],
    eightth: [
      {
        name: "월요일",
        uv: 1000,
        pv: 2600,
        amt: 2600,
      },
      {
        name: "화요일",
        uv: 3300,
        pv: 1598,
        amt: 2310,
      },
      {
        name: "수요일",
        uv: 400,
        pv: 9700,
        amt: 2390,
      },
      {
        name: "목요일",
        uv: 2880,
        pv: 4108,
        amt: 2050,
      },
      {
        name: "금요일",
        uv: 3000,
        pv: 5200,
        amt: 2181,
      },
      {
        name: "토요일",
        uv: 2290,
        pv: 3700,
        amt: 2600,
      },
      {
        name: "일요일",
        uv: 3290,
        pv: 4500,
        amt: 2250,
      },
    ],
    nineth: [
      {
        name: "물리학",
        uv: 2900,
        pv: 2200,
        amt: 2200,
      },
      {
        name: "화학",
        uv: 2400,
        pv: 1398,
        amt: 2110,
      },
      {
        name: "수학",
        uv: 1900,
        pv: 9900,
        amt: 2290,
      },
      {
        name: "생물학",
        uv: 1700,
        pv: 4008,
        amt: 1950,
      },
      {
        name: "영어문학",
        uv: 1300,
        pv: 5700,
        amt: 2071,
      },
      {
        name: "경제학",
        uv: 900,
        pv: 4200,
        amt: 2380,
      },
      {
        name: "사회학",
        uv: 800,
        pv: 4700,
        amt: 2000,
      },
    ],
  },
  lastMonth: {
    zero: "지난달 [2023-10-01 ~ 2023-10-31] 기준입니다.",
    first: ["일 방문수", "70"],
    second: ["누적 혜택", "200,000"],
    third: ["평균 혜택 이용 수", "14회"],
    fourth: [
      { name: "대학교 1학년", value: 65 },
      { name: "대학교 2학년", value: 18 },
      { name: "대학교 3학년", value: 12 },
      { name: "대학교 4학년", value: 24 },
    ],
    fifth: [
      {
        name: "Page A",
        uv: 900,
        pv: 2700,
        amt: 2700,
      },
      {
        name: "Page B",
        uv: 1250,
        pv: 1550,
        amt: 2500,
      },
      {
        name: "Page C",
        uv: 1150,
        pv: 9100,
        amt: 2680,
      },
      {
        name: "Page D",
        uv: 1500,
        pv: 4208,
        amt: 2350,
      },
      {
        name: "Page E",
        uv: 2050,
        pv: 5400,
        amt: 2180,
      },
      {
        name: "Page F",
        uv: 2550,
        pv: 3300,
        amt: 2750,
      },
      {
        name: "Page G",
        uv: 3750,
        pv: 4200,
        amt: 2500,
      },
    ],
    sixth: ["한식", "양식", "멕시코음식"],
    seventh: ["버거킹", "맘스터치", "토스트"],
    eightth: [
      {
        name: "월요일",
        uv: 7800,
        pv: 2700,
        amt: 2700,
      },
      {
        name: "화요일",
        uv: 900,
        pv: 1550,
        amt: 2500,
      },
      {
        name: "수요일",
        uv: 2200,
        pv: 9100,
        amt: 2680,
      },
      {
        name: "목요일",
        uv: 3080,
        pv: 4208,
        amt: 2350,
      },
      {
        name: "금요일",
        uv: 2990,
        pv: 5400,
        amt: 2180,
      },
      {
        name: "토요일",
        uv: 2490,
        pv: 3500,
        amt: 2750,
      },
      {
        name: "일요일",
        uv: 3590,
        pv: 4100,
        amt: 2500,
      },
    ],
    nineth: [
      {
        name: "정치학",
        uv: 3100,
        pv: 2700,
        amt: 2700,
      },
      {
        name: "심리학",
        uv: 2700,
        pv: 1498,
        amt: 2310,
      },
      {
        name: "사회학",
        uv: 2100,
        pv: 9000,
        amt: 2390,
      },
      {
        name: "문헌정보학",
        uv: 1900,
        pv: 4108,
        amt: 2050,
      },
      {
        name: "영어영문학",
        uv: 1500,
        pv: 5600,
        amt: 2181,
      },
      {
        name: "경영학",
        uv: 1100,
        pv: 4900,
        amt: 2380,
      },
      {
        name: "경제학",
        uv: 1000,
        pv: 5300,
        amt: 2000,
      },
    ],
  },
  year: {
    zero: "올해 [2023-01-01 ~ 2023-11-25) 기준입니다.",
    first: ["일 방문수", "34"],
    second: ["누적 혜택", "230,000"],
    third: ["평균 혜택 이용 수", "24회"],
    fourth: [
      { name: "대학교 1학년", value: 80 },
      { name: "대학교 2학년", value: 15 },
      { name: "대학교 3학년", value: 25 },
      { name: "대학교 4학년", value: 30 },
    ],
    fifth: [
      {
        name: "Page A",
        uv: 900,
        pv: 2800,
        amt: 2800,
      },
      {
        name: "Page B",
        uv: 1200,
        pv: 1700,
        amt: 2550,
      },
      {
        name: "Page C",
        uv: 1100,
        pv: 10500,
        amt: 2490,
      },
      {
        name: "Page D",
        uv: 9200,
        pv: 4300,
        amt: 2200,
      },
      {
        name: "Page E",
        uv: 2000,
        pv: 5500,
        amt: 2680,
      },
      {
        name: "Page F",
        uv: 8100,
        pv: 4100,
        amt: 2900,
      },
      {
        name: "Page G",
        uv: 10000,
        pv: 5200,
        amt: 2450,
      },
    ],
    sixth: ["햄버거", "스테이크", "파스타"],
    seventh: ["피자헛", "버거킹", "롯데리아"],
    eightth: [
      {
        name: "월요일",
        uv: 2000,
        pv: 2600,
        amt: 2600,
      },
      {
        name: "화요일",
        uv: 3200,
        pv: 1698,
        amt: 2400,
      },
      {
        name: "수요일",
        uv: 2200,
        pv: 8800,
        amt: 2590,
      },
      {
        name: "목요일",
        uv: 2980,
        pv: 3708,
        amt: 2300,
      },
      {
        name: "금요일",
        uv: 2100,
        pv: 5100,
        amt: 2481,
      },
      {
        name: "토요일",
        uv: 2600,
        pv: 4200,
        amt: 2800,
      },
      {
        name: "일요일",
        uv: 3800,
        pv: 5100,
        amt: 2450,
      },
    ],
    nineth: [
      {
        name: "생물학",
        uv: 2800,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "물리학",
        uv: 2500,
        pv: 1598,
        amt: 2210,
      },
      {
        name: "화학",
        uv: 2100,
        pv: 9500,
        amt: 2390,
      },
      {
        name: "수학",
        uv: 1800,
        pv: 3908,
        amt: 2100,
      },
      {
        name: "영어문학",
        uv: 1600,
        pv: 4700,
        amt: 2271,
      },
      {
        name: "사회학",
        uv: 1200,
        pv: 3600,
        amt: 2450,
      },
      {
        name: "음악",
        uv: 900,
        pv: 4300,
        amt: 2100,
      },
    ],
  },
};
