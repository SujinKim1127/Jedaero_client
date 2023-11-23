import { FlexTemplate } from "@/components/atoms/basics";
import styled from "@emotion/styled";
import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";
interface ChartProps {
  title: string;
  color?: string;
  data: Array<Data>;
}

interface Data {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

const BackgroundedChart: React.FC<ChartProps> = ({
  title,
  color = "#8884d8",
  data,
}) => {
  return (
    <Container>
      <LayerBox>
        <LayerTitleBox>
          <ChartTitle>{title}</ChartTitle>
        </LayerTitleBox>
        <ChartBox>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={50} height={40} data={data}>
              <Bar dataKey="uv" fill={color} barSize={40} />
              <XAxis dataKey="name" />
            </BarChart>
          </ResponsiveContainer>
        </ChartBox>
      </LayerBox>
    </Container>
  );
};

export default BackgroundedChart;

const Container = styled(FlexTemplate)`
  height: 100%;
  width: 100%;
  position: relative;
`;

const LayerBox = styled(FlexTemplate)`
  position: absolute;
  z-index: 10;

  width: 565px;
  height: 347px;

  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const LayerTitleBox = styled(FlexTemplate)`
  width: 100%;

  justify-content: center;
`;

const ChartTitle = styled.p`
  width: 50%;
  text-align: center;
  padding-bottom: 1rem;
  padding-top: 1rem;
  font-weight: 500;
  font-size: 1.5rem;
  border-bottom: 2px solid black;
`;
const ChartBox = styled(FlexTemplate)`
  width: 100%;
  height: 80%;

  padding-top: 10px;
`;

const Title = styled.p`
  color: #676767;
  font-family: Pretendard Variable;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
`;

const Contents = styled.p`
  color: #000;
  font-family: Pretendard Variable;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: bolder;
`;
