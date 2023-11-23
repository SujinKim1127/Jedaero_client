import { ReactNode } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import * as styles from "../../components/styles/SecondBox.styles";

interface ChartProps {
  data: Data[];
}

interface Data {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}
const ThirdBox: React.FC<ChartProps> = ({ data }) => {
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
            <Area type="monotone" dataKey="uv" stroke="black" fill="#0E6EFF" />
          </AreaChart>
        </ResponsiveContainer>
      </styles.ChartBox>
    </styles.Container>
  );
};

export default ThirdBox;
