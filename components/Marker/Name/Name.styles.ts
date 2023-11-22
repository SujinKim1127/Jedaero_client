import styled from "@emotion/styled";
import { COLORS } from "@/styles/colors";

const typeStyles: { [key: string]: { border?: string } } = {
  FOOD: {
    border: `1px solid ${COLORS.green}`,
  },
  CAFE: {
    border: `1px solid ${COLORS.yellow}`,
  },
  BEAUTY: {
    border: `1px solid ${COLORS.black}`,
  },
  CULTURE: {
    border: `1px solid ${COLORS.blue}`,
  },
  ETC: {
    border: `1px solid ${COLORS.purple}`,
  },
};

export const MarkerContainer = styled.div<{ type: string }>`
  border: ${(props) =>
    typeStyles[props.type]?.border || `1px solid ${COLORS.blue}`};
  border-radius: 16.5px;
  display: flex;
  background-color: white;
  height: 33px;
`;

export const MarkerIconBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1px;
`;

export const MarkerInfoBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
`;

export const MarkerTitleBox = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 12px;
`;

export const MarkerTypeBox = styled.div`
  font-size: 7.4px;
  line-height: 11px;
  font-weight: 500;
  color: #aeaeb2;
  display: flex;
  align-items: center;
  margin-left: 5px;
  margin-right: 8px;
`;
