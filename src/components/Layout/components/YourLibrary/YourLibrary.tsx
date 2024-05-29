import "./YourLibrary.css";
import plus from "@assets/icons/plus.svg";
import library from "./assets/icons/library.svg";
import CallToAction from "./components/CallToAction/CallToAction";

const YourLibrary = () => {
  return (
    <section className="section my-library-section">
      <div className="my-library-section__header">
        <div className="my-library-section__header-left">
          <img src={library} alt="" className="my-library-section__icon" />
          <div className="my-library-section__title">Your Library</div>
        </div>

        <button className="my-library-section__plus-button">
          <img src={plus} alt="" className="my-library-section__plus-icon" />
        </button>
      </div>

      <div className="my-library-section__body">
        <CallToAction />
      </div>
    </section>
  );
};

export default YourLibrary;
