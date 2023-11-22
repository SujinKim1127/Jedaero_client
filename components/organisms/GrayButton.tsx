import * as styles from "@/components/styles/Button.styles";

interface ButtonProps {
  label?: string;
  width?: number;
  color?: string;
  onClick?: () => void;
}

const GrayButton = ({ label, width, color, onClick }: ButtonProps) => (
  <styles.Button width={width} color={color} onClick={onClick}>
    {label}
  </styles.Button>
);

export default GrayButton;
