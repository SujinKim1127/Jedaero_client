import { FlexTemplate } from "@/components/atoms/basics";
import styled from "@emotion/styled";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface ChartProps {
  title: string;
}

const OneStackChart: React.FC<ChartProps> = ({ title }) => {
  return (
    <Container>
      <UpperBox>
        <Title>{title}</Title>
      </UpperBox>
      <ContentBox>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={300} height={100} data={data}>
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#2C5AFF"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </ContentBox>
    </Container>
  );
};

export default OneStackChart;

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
  margin-bottom: 10px;
`;

const ContentBox = styled(FlexTemplate)`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const data = [
  {
    name: "Page A",
    uv: 800,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 1400,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 700,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 1100,
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
    uv: 3000,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 5000,
    pv: 4300,
    amt: 2100,
  },
];
