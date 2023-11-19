import "./Button.scss";

const Button = ({ label, isDisabled, className, type, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={isDisabled} className={`btn ${className}`} type={type}>
      <p>{label}</p>
    </button>
  );
};

export default Button;

interface ButtonProps {
  label: string | JSX.Element;
  className: string;
  type: "button" | "submit" | "reset";
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick: () => void;
}
