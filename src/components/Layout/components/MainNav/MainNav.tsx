import "./MainNav.css";
import logo from "@assets/icons/logo.svg";
import home from "./assets/icons/home.svg";
import homeActive from './assets/icons/home--active.svg'
import search from './assets/icons/search.svg';
import searchActive from './assets/icons/search--active.svg';

const MainNav = () => {
  return (
    <section className="section main-nav-section">
      <a className="main-nav-section__logo-link">
        <img className="main-nav-section__logo" src={logo} alt="" />
      </a>

      <nav className="main-nav">
        <ul className="main-nav__list">
          <li className="main-nav__item main-nav__item--active">
            <a className="main-nav__link" href="#">
              <img
                className="main-nav__icon main-nav__icon--hidden"
                src={home}
                alt=""
              />
              <img className="main-nav__icon" src={homeActive} alt="" />
              <span className="main-nav__name">Home</span>
            </a>
          </li>

          <li className="main-nav__item">
            <a className="main-nav__link" href="#">
              <img className="main-nav__icon" src={search} alt="" />
              <img
                className="main-nav__icon main-nav__icon--hidden"
                src={searchActive}
                alt=""
              />
              <span className="main-nav__name">Search</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default MainNav;
