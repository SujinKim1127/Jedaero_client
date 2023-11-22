import { ReactNode } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
interface ThirdBoxProps {
  children?: ReactNode;
}

import * as styles from "./SecondBox.styles";

const ThirdBox: React.FC<ThirdBoxProps> = () => {
  return (
    <styles.Container>
      <styles.TitleBox>
        <styles.Title>이용 증감률</styles.Title>
      </styles.TitleBox>
      <styles.ChartBox>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="name" /> */}
            {/* <YAxis /> */}
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </styles.ChartBox>
    </styles.Container>
  );
};

const data = [
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
    uv: 1300,
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
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export default ThirdBox;
