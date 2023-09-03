/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [burger, setBurger] = useState();

  const [navbar, setNavar] = useState("");

  const changeNavbar = () => {
    if (window.scrollY >= 30) {
      setNavar(true);
    } else {
      setNavar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <>
      <div
        className={`Navbar ${burger ? "active" : ""} ${
          navbar ? "activee" : ""
        } ${burger === true && navbar === true ? "activeee" : ""}`}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-2 col-sm-4 col-5">
              <div className="nav_logo">
                <Link onClick={() => setBurger(false)} to="/">
                  <img className="w-100" src={`/img/logo.svg`} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-2 d-flex justify-content-end">
              <div
                onClick={() => setBurger(!burger)}
                className={`nav_box ${burger ? "active" : ""}`}
              >
                <div className={`nav_btn ${burger ? "active" : ""}`}>Menu</div>
                <div className={`nav_btn_line_box`}>
                  <div
                    className={`nav_btn_line ${burger ? "active" : ""}`}
                  ></div>
                  <div
                    className={`nav_btn_line_2 ${burger ? "active" : ""}`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`nav_a_box ${burger ? "active" : ""}`}>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-12 d-flex flex-column justify-content-center h-100">
              <div className="bur_text">
                <Link
                  onClick={() => setBurger(false)}
                  to="/portfolio"
                  className="bur_name"
                >
                  Портфолио
                </Link>
                <Link
                  onClick={() => setBurger(false)}
                  to="/blog"
                  className="bur_name"
                >
                  Блог
                </Link>
                <Link
                  onClick={() => setBurger(false)}
                  to="/marketing"
                  className="bur_name"
                >
                  О маркетинге
                </Link>
                <Link
                  onClick={() => setBurger(false)}
                  to="/audit"
                  className="bur_h"
                >
                  Разбор сайта
                </Link>
                <Link
                  onClick={() => setBurger(false)}
                  to="/quiz"
                  className="bur_h"
                >
                  Квиз на разработку
                </Link>
                <Link
                  onClick={() => setBurger(false)}
                  to="/contact"
                  className="bur_h"
                >
                  Контакты
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
