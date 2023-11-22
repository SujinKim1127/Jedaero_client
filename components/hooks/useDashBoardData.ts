import { useEffect, useState } from "react";

interface ChartData {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

interface DashBoardProps {
  selection: number;
}

export const useDashBoardData = ({ selection }: DashBoardProps) => {
  const [data, setData] = useState<ChartData[]>(exData);

  useEffect(() => {
    selection == 1 ? setData(exData) : setData(exData2);
  }, []);

  return { data };
};

const exData = [
  {
    name: "월요일",
    uv: 7000,
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
    uv: 2000,
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
    uv: 1890,
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
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const exData2 = [
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
];
