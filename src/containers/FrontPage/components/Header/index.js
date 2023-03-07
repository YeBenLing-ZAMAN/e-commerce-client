import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
import logo from "../../../../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const [stickyNav, setStickyNav] = useState(false);
  const stickyNavbar = () => {
    if (window.pageYOffset > 100) {
      setStickyNav(true);
      return;
    } else {
      setStickyNav(false);
      return;
    }
  };

  const [navToggle, setNavToggle] = useState(false);

  window.addEventListener("scroll", stickyNavbar);

  return (
    <>
      {navToggle && (
        <div
          className="backdrop_effect"
          onClick={() => setNavToggle(false)}
        ></div>
      )}
      <div className="header_main">
        <div className={`header_wrapper ${stickyNav ? "sticky_active" : ""}`}>
          <div className="container">
            <div className="header_content_first">
              <div className="logo">
                <img onClick={() => navigate("/")} src={logo} alt="logo" />
              </div>
              <div className="search_bar">
                <input placeholder="search you product..." />
              </div>
              <div className={`nav_product_menu`}>
                <MdOutlineFavoriteBorder
                  style={{
                    fontSize: "25px",
                    color: "#ffffff",
                    cursor: "pointer",
                  }}
                  onClick={() => setNavToggle(true)}
                />
                <FiUser
                  style={{
                    fontSize: "25px",
                    color: "#ffffff",
                    cursor: "pointer",
                  }}
                  onClick={() => setNavToggle(true)}
                />
                <BsBagCheck
                  style={{
                    fontSize: "25px",
                    color: "#ffffff",
                    cursor: "pointer",
                  }}
                  onClick={() => setNavToggle(true)}
                />
              </div>
            </div>
            <div className="header_content_second">
              <div className={`logo`}>
                <img onClick={() => navigate("/")} src={logo} alt="logo" />
              </div>
              <div className={`nav_menu ${navToggle ? "active" : ""}`}>
                <ul className="nav_lists">
                  <li className="nav_list">
                    <Link
                      to="hero"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="nav_link"
                      onClick={() => navigate("/")}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav_list">
                    <Link
                      to="sale"
                      spy={true}
                      smooth={true}
                      offset={100}
                      duration={500}
                      className="nav_link"
                    >
                      Sale
                    </Link>
                  </li>
                  <li className="nav_list">
                    <Link
                      to="product"
                      spy={true}
                      smooth={true}
                      offset={100}
                      duration={500}
                      className="nav_link"
                    >
                      Product
                      <MdOutlineKeyboardArrowDown
                        style={{ marginBottom: "-3px", marginLeft: "5px" }}
                      />
                    </Link>
                    <ul className="service_drop">
                      <li className="service_list">
                        <Link
                          className="service_link"
                          to="/product/mobile"
                          onClick={() => navigate("/product/mobile")}
                        >
                          Mobile
                          <span>
                            <MdOutlineKeyboardArrowRight />
                          </span>
                        </Link>
                        {/* nested 1 */}
                        <ul className="service_drop_nested">
                          <li className="service_list_nested">
                            <Link
                              className="service_link_nested"
                              to="/product/mobile"
                              onClick={() => navigate("/product/mobile")}
                            >
                              iPhone
                            </Link>
                          </li>
                          <li className="service_list_nested">
                            <Link
                              className="service_link_nested"
                              to="/product/mobile"
                              onClick={() => navigate("/product/mobile")}
                            >
                              Xaomi
                            </Link>
                          </li>
                          <li className="service_list_nested">
                            <Link
                              className="service_link_nested"
                              to="/product/mobile"
                              onClick={() => navigate("/product/mobile")}
                            >
                              oppo
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="service_list">
                        <Link
                          className="service_link"
                          to="/product/laptop"
                          onClick={() => navigate("/product/laptop")}
                        >
                          laotop
                          <span>
                            <MdOutlineKeyboardArrowRight />
                          </span>
                        </Link>
                        {/* nested 2 */}
                        <ul className="service_drop_nested">
                          <li className="service_list_nested">
                            <Link
                              className="service_link_nested"
                              to="/product/laptop"
                              onClick={() => navigate("/product/laotop")}
                            >
                              dell
                            </Link>
                          </li>
                          <li className="service_list_nested">
                            <Link
                              className="service_link_nested"
                              to="/product/asus"
                              onClick={() => navigate("/product/asus")}
                            >
                              asus
                            </Link>
                          </li>
                          <li className="service_list_nested">
                            <Link
                              className="service_link_nested"
                              to="/product/msi"
                              onClick={() => navigate("/product/msi")}
                            >
                              Msi
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="service_list">
                        <Link
                          className="service_link"
                          to="/product/camera"
                          onClick={() => navigate("/product/camera")}
                        >
                          camera
                          <span>
                            <MdOutlineKeyboardArrowRight />
                          </span>
                        </Link>
                        {/* nested 3 */}
                        <ul className="service_drop_nested">
                          <li className="service_list_nested">
                            <Link
                              className="service_link_nested"
                              to="/product/camera"
                              onClick={() => navigate("/product/camera")}
                            >
                              DSLR
                            </Link>
                          </li>
                          <li className="service_list_nested">
                            <Link
                              className="service_link_nested"
                              to="/product/action-camera"
                              onClick={() => navigate("/product/action-camera")}
                            >
                            Action camera
                            </Link>
                          </li>
                          <li className="service_list_nested">
                            <Link
                              className="service_link_nested"
                              to="/product/dash-camera"
                              onClick={() => navigate("/product/dash-camera")}
                            >
                              Dash camera
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="service_list">
                        <Link
                          className="service_link"
                          to="/product/monitor"
                          onClick={() => navigate("/product/monitor")}
                        >
                          monitor
                          <span>
                            <MdOutlineKeyboardArrowRight />
                          </span>
                        </Link>
                        {/* nested 4 */}
                        <ul className="service_drop_nested">
                          <li className="service_list_nested">
                            <Link
                              className="service_link_nested"
                              to="/product/monitor"
                              onClick={() =>
                                navigate("/product/monitor")
                              }
                            >
                              LG
                            </Link>
                          </li>
                          <li className="service_list_nested">
                            <Link
                              className="service_link_nested"
                              to="/product/msi-monitor"
                              onClick={() =>
                                navigate("/product/msi-monitor")
                              }
                            >
                              MSI
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="service_list">
                        <Link
                          className="service_link"
                          to="/product/Tablet"
                          onClick={() => navigate("/product/Tablet")}
                        >
                          Tablet
                          <span>
                            <MdOutlineKeyboardArrowRight />
                          </span>
                        </Link>
                        {/* nested 5 */}
                        <ul className="service_drop_nested">
                          <li className="service_list_nested">
                            <Link
                              className="service_link_nested"
                              to="/product/Tablet"
                              onClick={() =>
                                navigate("/product/Tablet")
                              }
                            >
                              samsung
                            </Link>
                          </li>
                          <li className="service_list_nested">
                            <Link
                              className="service_link_nested"
                              to="/product/lanovo-tablet"
                              onClick={() =>
                                navigate("/product/lanovo-tablet")
                              }
                            >
                              lanovo
                            </Link>
                          </li>
                          <li className="service_list_nested">
                            <Link
                              className="service_link_nested"
                              to="/product/xaomi-tablet"
                              onClick={() => navigate("/product/xaomi-tablet")}
                            >
                              Xaomi
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav_list">
                    <Link
                      to="deals"
                      spy={true}
                      smooth={true}
                      offset={100}
                      duration={500}
                      className="nav_link"
                    >
                      Deals
                    </Link>
                  </li>
                  <li className="nav_list">
                    <Link
                      spy={true}
                      smooth={true}
                      offset={100}
                      duration={500}
                      className="nav_link"
                      to="/team"
                      onClick={() => navigate("/offers")}
                    >
                      offers
                    </Link>
                  </li>
                  <li className="nav_list">
                    <Link
                      to="contacts"
                      spy={true}
                      smooth={true}
                      offset={100}
                      duration={500}
                      className="nav_link"
                    >
                      contact us
                    </Link>
                  </li>
                  <button
                    className="sideBar_closed_btn"
                    onClick={() => setNavToggle(false)}
                  >
                    <AiOutlineCloseCircle className="closed_icon" />
                  </button>
                </ul>
              </div>
              <div className={`mobile-navbar-btn ${stickyNav ? "active" : ""}`}>
                <FaBars
                  style={{
                    fontSize: "25px",
                    color: "#ffffff",
                    cursor: "pointer",
                  }}
                  onClick={() => setNavToggle(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
