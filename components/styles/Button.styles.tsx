import styled from "@emotion/styled";

interface ButtonProps {
  width?: number;
  color?: string;
}

export const Button = styled.div<ButtonProps>`
  width: ${(props) => (props.width ? `${props.width}px` : "358px")};
  border-radius: 6px;
  border: 1px solid var(--g1, #c6c6c6);
  text-align: center;
  color: ${(props) => props.color};
  background-color: white;
  display: flex;
  height: 33px;
  justify-content: center;
  align-items: center;
  font-size: 13.984px;
  line-height: 19.264px; /* 137.751% */
  letter-spacing: -0.839px;
  cursor: pointer;
`;
