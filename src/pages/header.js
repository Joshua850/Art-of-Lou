import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Header() {
  const [state, setState] = useState({
    menu: false,
    isOpen: false,
    homeLinkClass: "nav-item nav-link",
    aboutLinkClass: "nav-item nav-link",
    gallaryLinkClass: "nav-item nav-link",
    menuClass: "",
  });

  const toggleMenu = () => {
    setState({
      ...state,
      menu: !state.menu,
    });
  };

  const toggleOpen = () => setState({ ...state, isOpen: !state.isOpen });

  const show = state.menu ? "show" : "";
  const menuClass = `dropdown-menu${state.isOpen ? " show" : ""}`;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/"></Link>

      <button className="navbar-toggler" type="button" onClick={toggleMenu}>
        <span className="navbar-toggler-icon" />
      </button>

      <div className={"collapse navbar-collapse " + show}>
        <div className="navbar-nav">
          <Link
            className={state.homeLinkClass}
            to="/"
            onClick={() =>
              state.homeLinkClass === "nav-item nav-link"
                ? "nav-item nav-link active"
                : "nav-item nav-link"
            }
          >
            <h2>Home</h2> <span className="sr-only"></span>
          </Link>

          <Link
            className={state.aboutLinkClass}
            to="/submit"
            onClick={() =>
              state.aboutLinkClass === "nav-item nav-link"
                ? "nav-item nav-link active"
                : "nav-item nav-link"
            }
          >
            <h2>Submit a Request </h2>
          </Link>
          <Link
            className={state.gallaryLinkClass}
            to="/gallary"
            onClick={() =>
              state.aboutLinkClass === "nav-item nav-link"
                ? "nav-item nav-link active"
                : "nav-item nav-link"
            }
          >
            {/* <h2>Gallary</h2> */}
          </Link>
        </div>

        {/* <div className="dropdown" onClick={toggleOpen}>
          <div
            className="dropdown-toggle"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
          >
            Dropdown
          </div>
          <div className={menuClass} aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item" to="/submenu1">
              Sub Menu1
            </Link>
            <Link className="dropdown-item" to="/submenu2">
              Sub Menu2
            </Link>
          </div>
        </div> */}
      </div>
    </nav>
  );
}

export default Header;
