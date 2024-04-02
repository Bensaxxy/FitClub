import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerHeight <= 768);
    };

    handleResize(); // Call initially to set the correct value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header">
      <img className="logo" src={logo} />

      {menuOpened === false && mobile === true ? (
        <div
          onClick={() => setMenuOpened(true)}
          className="hamburger-background"
        >
          <img className="hamburger" src={bars} />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link onClick={() => setMenuOpened(false)} to="home" smooth={true}>
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)} to="plans" smooth={true}>
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonials"
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
