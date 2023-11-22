import { COLORS } from "@/styles/colors";
import styled from "@emotion/styled";

interface props {
  title: string;
  width: number;
}

const Button = ({ title, width }: props) => {
  return <ButtonBox width={width}>{title}</ButtonBox>;
};

const ButtonBox = styled.div<{
  width: number;
}>`
  width: ${(props) => (props.width ? `${props.width}px` : "193px")};
  padding: 13px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: ${COLORS.blue};
  color: ${COLORS.yellow};
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px; /* 157.143% */
  margin: 33px auto 40px;
  cursor: pointer;
`;

export default Button;
