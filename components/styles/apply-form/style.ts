import styled from "@emotion/styled";
import { PageTitle, FlexBox, Container } from "@/components/atoms/basics";

export const ContainerP = styled(Container)`
  min-height: 100vh;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
`;

export const UpperBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;

  width: 100%;
  row-gap: 2rem;
`;

export const FormTitleBox = styled(FlexBox)`
  align-items: flex-start;
  justify-content: center;

  column-gap: 1rem;
`;

export const FormBox = styled.article`
  display: flex;
  flex-flow: column nowrap;

  width: 100%;
  margin-top: 3rem;
`;

export const PageTitleP = styled(PageTitle)`
  color: var(--, #1c1c1e);
  font-size: 26px;
  font-style: normal;
`;

export const PageSubTitle = styled.p`
  color: var(--sub2, #0e6eff);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16.53px;
  letter-spacing: -0.84px;
`;

export const InputTitle = styled.p``;

export const InputBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
