import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/tmovie.png";
function Home() {
  const { pathname } = useLocation();
  const headerRef = useRef();
  const headerNav = [
    { display: "Home", path: "/" },
    { display: "Movie", path: "/movie" },
    { display: "Tv Series", path: "/tv" },
  ];
  const active = headerNav.findIndex((e) => e.path === pathname);
  useEffect(() => {
    const shrink = window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
      return () => {
        window.removeEventListener("scroll", shrink);
      };
    });
  }, []);
  return (
    <div ref={headerRef} className="header">
      <div className="header_wrapper container">
        <div className="logo">
          <img src={logo} alt="" />

          <Link to="/">tMovies</Link>
        </div>
        <ul className="header_nav">
          {headerNav.map((item, index) => (
            <li className={active === index ? "active" : ""} key={index}>
              <a href={item.path}>{item.display}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
