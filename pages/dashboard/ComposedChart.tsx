import { FlexTemplate } from "@/components/atoms/basics";
import styled from "@emotion/styled";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface ChartProps {
  title: string;
}

const ComposedChart: React.FC<ChartProps> = ({ title }) => {
  return (
    <Container>
      <UpperBox>
        <Title>{title}</Title>
      </UpperBox>
      <ContentBox>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#2C5AFF"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="black" />
          </LineChart>
        </ResponsiveContainer>
      </ContentBox>
    </Container>
  );
};

export default ComposedChart;

const Container = styled(FlexTemplate)`
  width: 100%;
  height: 100%;

  flex-flow: column nowrap;
`;
const Title = styled.p`
  width: 100%;
  color: #676767;
  font-family: Pretendard Variable;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
`;

const UpperBox = styled(FlexTemplate)`
  height: 10%;
  margin-bottom: 20px;
`;

const ContentBox = styled(FlexTemplate)`
  height: 90%;
  justify-content: center;
  align-items: center;
`;

const data = [
  {
    name: "Page A",
    uv: 800,
    pv: 2400,
    amt: 600,
  },
  {
    name: "Page B",
    uv: 1000,
    pv: 1398,
    amt: 990,
  },
  {
    name: "Page C",
    uv: 1230,
    pv: 9800,
    amt: 1100,
  },
  {
    name: "Page D",
    uv: 2500,
    pv: 3908,
    amt: 1250,
  },
  {
    name: "Page E",
    uv: 1600,
    pv: 4800,
    amt: 1300,
  },
  {
    name: "Page F",
    uv: 1700,
    pv: 3800,
    amt: 1600,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
