import { FlexTemplate } from "@/components/atoms/basics";
import styled from "@emotion/styled";

export const PreviewButton = styled(FlexTemplate)`
  border-radius: 5px;
  border: 1px solid var(--g0, #f4f4f4);

  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  width: 130px;

  align-self: flex-end;

  margin-right: 5rem;
  transition: all 0.5s ease;

  &:hover {
    background-color: #f7f7f7;
    transition: all 0.5s ease;
  }
`;

export const ContentsBox = styled(FlexTemplate)`
  width: 100%;
`;
