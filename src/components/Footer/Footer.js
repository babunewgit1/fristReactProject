import Nav from "../Header/Nav";
import Socialicon from "../Header/Social";
import "./Footer.css";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-wrapper text-center">
          <Nav text="text-white" />
          <Socialicon text="text-white" />
          <p className="text-white">
            copyright © Backroads travel tours company{" "}
            {new Date().getFullYear()} all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
