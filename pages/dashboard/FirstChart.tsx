import { FlexTemplate } from "@/components/atoms/basics";
import styled from "@emotion/styled";

interface ChartProps {
  title: string;
  content: string;
}

const FirstChart: React.FC<ChartProps> = ({ title, content }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Contents>{content}</Contents>
    </Container>
  );
};

export default FirstChart;

const Container = styled(FlexTemplate)`
  width: 95%;
  height: 90%;
  padding: 3%;

  margin: 0px auto;
  border-bottom: 2px solid black;

  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;

  row-gap: 25px;
`;

const Title = styled.p`
  color: #676767;
  font-family: Pretendard Variable;
  font-size: 1.5rem;
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
