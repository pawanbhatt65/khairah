import React, { Fragment, useRef } from "react";
import { Container, Navbar } from "react-bootstrap";
import classes from "./KhairahNab.module.css";
import Button from "../../../UI/Button";

// import images
import Logo from "../../../images/logo.png";
import { Link, NavLink } from "react-router-dom";

const KhairaNab = () => {
  const navRef = useRef();

  const addActiveHandler = () => {
    navRef.current.classList.toggle("active");
  };

  return (
    <Fragment>
      <Navbar className={classes["navbar-main"]}>
        <Container fluid="xxl" className={classes.containerBox}>
          <Navbar.Brand href={void 0} className={classes.logo}>
            <img src={Logo} alt="logo" />
            KHAI <span>RAH</span>
          </Navbar.Brand>
          <div className={classes["nav-list-item"]}>
            <button
              className={classes["btn-collapse"]}
              onClick={addActiveHandler}
            >
              <i className="fas fa-bars"></i>
            </button>

            <div
              ref={navRef}
              className={classes["collapse-navbar"]}
              id="btnCollapseNavbar"
            >
              <ul className={`list-inline`}>
                <span id="collapsable" onClick={addActiveHandler}>
                  <i className="fas fa-times"></i>
                </span>
                {/* navbar home start */}
                <li className={`list-inline-item`}>
                  <div className={`list-inline-item`}>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? classes.active : undefined
                      }
                      end
                    >
                      home +
                    </NavLink>
                  </div>
                </li>
                {/* navbar home end */}
                <li className={`list-inline-item`}>
                  <NavLink
                    to="/aboutus"
                    className={({ isActive }) =>
                      isActive ? classes.active : undefined
                    }
                  >
                    about
                  </NavLink>
                </li>
                {/* navbar-causes start */}
                <li className={`list-inline-item`}>
                  <div className="navbarItems">
                    <NavLink
                      to="/causes"
                      className={({ isActive }) =>
                        isActive ? classes.active : undefined
                      }
                    >
                      Causes +
                    </NavLink>
                  </div>
                </li>
                {/* navbar-causes end */}
                {/* navbar-events start */}
                <li className={`list-inline-item`}>
                  <div className="navbarItems">
                    <NavLink
                      to="/events"
                      className={({ isActive }) =>
                        isActive ? classes.active : undefined
                      }
                    >
                      Event +
                    </NavLink>
                  </div>
                </li>
                {/* navbar-events end */}
                {/* navbar-pages start */}
                <li className={`list-inline-item`}>
                  <div className="navbarItems">
                    <NavLink
                      to="/pages"
                      className={({ isActive }) =>
                        isActive ? classes.active : undefined
                      }
                    >
                      pages +
                    </NavLink>
                  </div>
                </li>
                {/* navbar-pages end  */}
                {/* navbar-blog start */}
                <li className={`list-inline-item`}>
                  <div className="navbarItems">
                    <NavLink
                      to="/blog"
                      className={({ isActive }) =>
                        isActive ? classes.active : undefined
                      }
                    >
                      Blog +
                    </NavLink>
                  </div>
                </li>
                {/* navbar-blog end */}
                <li className={`list-inline-item`}>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? classes.active : undefined
                    }
                  >
                    contact
                  </NavLink>
                </li>
              </ul>
            </div>

            <ul className={`list-inline ${classes["navbar-list"]}`}>
              <li className={`list-inline-item`}>
                <Link to={void 0} id="cart">
                  <i className="far fa-calendar-check"></i> <span>02</span>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  to={void 0}
                  className="searchAnything"
                  onClick="searchHere()"
                >
                  <i className="fas fa-search"></i>
                </Link>
              </li>
            </ul>
            <div className={classes["cart-search-contact"]}>
              <Button>Join a volunteer</Button>
            </div>
          </div>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default KhairaNab;
