import { FlexBox } from "@/components/atoms/basics";
import styled from "@emotion/styled";
import { CheckBox } from "@mui/icons-material";
import { Button } from "@mui/material";

interface EllipseProps {
  selected?: boolean;
}

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(7, minmax(10%, auto));
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));

  width: 100%;
  min-height: calc(100vh - 70px);
`;

export const PhaseBox = styled.div`
  grid-column-start: 2;
  grid-column-end: 5;

  grid-row-start: 1;
  grid-row-end: 3;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  column-gap: 1rem;
`;

export const PhaseItem = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  row-gap: 16px;
`;

export const PhaseTitle = styled.p<EllipseProps>`
  color: ${(props) => (props.selected ? "#2C5AFF" : "#898A8D")};

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.96px;
`;

export const PhaseEllipse = styled.div<EllipseProps>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50px;
  background-color: ${(props) =>
    props.selected ? "var(--sub3, #DFFF60)" : "#E8E8E8"};

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bolder;
`;

export const AgreementBox = styled.div`
  grid-column-start: 2;
  grid-column-end: 5;

  grid-row-start: 3;
  grid-row-end: 7;

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
`;

export const ConnectLine = styled.div`
  width: 41.5px;
  height: 0.3px;
  flex-shrink: 0;
  background-color: #c0c0c0;

  position: relative;
  top: -12px;
`;

export const AgreementTitle = styled.p`
  color: #ff1f7d;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.84px;

  margin-bottom: 0.3rem;
`;

export const AgreementInnerBox = styled.div`
  border-radius: 10px;
  background: #fbfbfb;
  padding: 0px 10px 10px 10px;
  margin-top: 1rem;

  display: flex;
  flex-flow: column nowrap;
`;

export const Checks = styled(FlexBox)`
  align-items: center;
  margin: 10px 0px 10px 0px;

  // Titles
  color: var(--g3, #636366);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.96px;
`;

export const NextBtn = styled(Button)`
  border-radius: 6px;
  background: var(--sb, #2d3036);
  color: white;

  width: 193px;
  height: 39px;
  padding: 13px 16px;
  align-self: center;

  margin-top: 31px;

  z-index: 0;
`;
