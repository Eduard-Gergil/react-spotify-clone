import { Button } from "@shared/ui/Button";
import "./CallToAction.styles.css";

interface ICallToActionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onClickButton: () => void;
}

const CallToAction: React.FC<ICallToActionProps> = ({
  title,
  subtitle,
  buttonText,
  onClickButton,
}) => {
  return (
    <section className="call-to-action">
      <div className="call-to-action__title">{title}</div>
      <div className="call-to-action__subtitle">{subtitle}</div>
      <div className="call-to-action__actions">
        <Button text={buttonText} onClick={onClickButton} />
      </div>
    </section>
  );
};

export default CallToAction;
