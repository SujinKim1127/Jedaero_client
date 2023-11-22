import React from "react";
import * as ChartStyles from "./SecondBox.styles";
import { Bar, ResponsiveContainer, BarChart, XAxis } from "recharts";

interface DataProps {
  title: string;
  data: Array<ChartElement>;
  color?: string;
}

interface ChartElement {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}
const BarCharts: React.FC<DataProps> = ({ title, data, color = "#8884d8" }) => {
  return (
    <ChartStyles.Container>
      <ChartStyles.TitleBox>
        <ChartStyles.Title>{title}</ChartStyles.Title>
      </ChartStyles.TitleBox>
      <ChartStyles.ChartBox>
        {data && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
              <Bar dataKey="uv" fill={color} />
              <XAxis dataKey="name" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </ChartStyles.ChartBox>
    </ChartStyles.Container>
  );
};

export default BarCharts;
