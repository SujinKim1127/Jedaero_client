import Empty from "./ListNoneIcon.svg";
import styled from "@emotion/styled";
import { FlexTemplate } from "./basics";

interface EmptyProps {
  content?: string;
}

const EmptyComponent: React.FC<EmptyProps> = ({
  content = "등록된 내용이 없습니다",
}) => {
  return (
    <Container>
      <Empty />
      <Content>{content}</Content>
    </Container>
  );
};

export default EmptyComponent;

const Container = styled(FlexTemplate)`
  flex-flow: column nowrap;

  align-items: center;
  justify-content: center;

  row-gap: 31px;
`;

const Content = styled.p`
  color: var(--, #3d4149);
  font-family: Pretendard Variable;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -1.02px;
`;
