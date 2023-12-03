import React, { useContext, useEffect, useState, useRef } from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";
import { WindowSizeContext } from "../../ContextApi/WindowSize";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
  const menuRef = useRef(null);
  const [click, setClick] = useState(false);
  const { size } = useContext(WindowSizeContext);

  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    const handleResize = () => {
      if (size > 810 && click) {
        setClick(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [size, click]);

  return (
    <header>
      <div
        className="header-menu"
        style={{ backgroundColor: click ? "#fff" : undefined }}
        ref={menuRef}
      >
        <nav>
          <div className="logo">
            <img src={logo} alt="manage wise logo" />
          </div>
          {size > 810 ? (
            <div className="menu">
              <div className="menu-con">
                <ul>
                  <li key="features">
                    <a href="#Features">Features</a>
                  </li>
                  <li className="dotafter" key="faq">
                    <a href="#FAQ">FAQ</a>
                  </li>
                  <li className="dotafter" key="pricing">
                    <a href="#Pricing">Pricing</a>
                  </li>
                  <li className="dotafter" key="testimonials">
                    <a href="#Testimonials">Testimonials</a>
                  </li>
                </ul>
              </div>
              <div className="menu-but">
                <button>Buy Template</button>
              </div>
            </div>
          ) : (
            <>
              <div className="menu-container">
                <div className="menu-icon" onClick={handleClick}>
                  {click === false ? (
                    <AiOutlineMenu
                      style={{ fontSize: "25px", fontWeight: "bolder" }}
                    />
                  ) : (
                    <RxCross1
                      style={{ fontSize: "25px", fontWeight: "bolder" }}
                    />
                  )}
                </div>
              </div>
            </>
          )}
        </nav>
        {click === true && (
          <div className="menu-con-con">
            <div className="menu-c-con">
              <ul>
                <li key="features">
                  <a href="#Features">Features</a>
                </li>
                <li className="dotafter" key="faq">
                  <a href="#FAQ">FAQ</a>
                </li>
                <li className="dotafter" key="pricing">
                  <a href="#Pricing">Pricing</a>
                </li>
                <li className="dotafter" key="testimonials">
                  <a href="#Testimonials">Testimonials</a>
                </li>
              </ul>
            </div>
            <div className="menu-but">
              <button>Buy Template</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
