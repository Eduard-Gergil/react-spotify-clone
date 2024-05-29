import "../styles/styles.css";
import plus from "@shared/assets/icons/plus.svg";
import library from "../assets/icons/library.svg";
import CallToCreateFirstPlaylist from "./CallToCreateFirstPlaylist";
import CallToFollowSomePodcasts from "./CallToFollowSomePodcasts";

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
        <CallToCreateFirstPlaylist />
        <CallToFollowSomePodcasts />
      </div>
    </section>
  );
};

export default YourLibrary;
