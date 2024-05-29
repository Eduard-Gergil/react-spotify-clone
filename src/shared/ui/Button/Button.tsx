import "./Button.styles.css";

interface IButton {
  text: string;
  onClick: (event: any) => void;
}

const Button: React.FC<IButton> = ({ text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
