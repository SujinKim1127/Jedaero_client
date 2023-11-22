import styled from "@emotion/styled";

interface LayerChartProps {
  title: string;
  content: string;
}

const FirstLayerChart: React.FC<LayerChartProps> = ({ title, content }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  );
};

export default FirstLayerChart;

const Container = styled.div`
  width: 100%;

  row-gap: 10px;
  border-radius: 10px;
  border: 1px solid var(--g1, #c6c6c6);
  background: #fff;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  padding: 1rem;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--g3, #636366);
  font-weight: 500;
`;

const Content = styled.p`
  font-size: 2rem;
  color: black;
  font-weight: 500;
`;
