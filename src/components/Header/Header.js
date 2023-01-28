import logo from "../../Images/logo.svg";
import Nav from "./Nav";
import Socialicon from "./Social";
import "../Header/Header.css";

const Header = () => {
  return (
    <header className="sticky-top bg-white">
      <div className="container">
        <div className="header-wrapper d-block d-lg-flex">
          <div className="logo">
            <div className="logo-wrapper d-flex align-items-center justify-content-between">
              <a href="index.html">
                <img src={logo} alt="Logo" />
              </a>
              <div className="bar d-block d-lg-none">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <nav>
            <div className="navLink">
              <Nav text="text-dark" />
            </div>
          </nav>
          <div className="social d-none d-lg-block">
            <Socialicon text="text-blue" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
