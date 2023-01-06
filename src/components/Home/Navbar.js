import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ictLogo from "../../assets/ictLog2.png";
import InvAuthContext from "../Store/Inv-authContext";

function Navbar() {
  const invAuthCtx = useContext(InvAuthContext);

  const isInvLoggedIn = invAuthCtx.isInvLoggedIn;

  const logoutHandler = () => {
    invAuthCtx.logout();
  };

  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-lg"
        style={{ backgroundColor: "rgb(4,170,109)" }}
      >
        <div className="container-fluid">
          <span className="navbar-brand">
            <img
              src={ictLogo}
              alt="IctPark"
              width={80}
              className="ms-4 rounded-3"
            />
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a href="/" className="nav-link text-white fw-bold">
                Home
              </a>
            </div>
            <div className="navbar-nav ms-auto">
              {!isInvLoggedIn && (
                <Link
                  to="/loginInvestor"
                  className="nav-link text-white fw-bold"
                >
                  Log in
                </Link>
              )}
              {isInvLoggedIn && (
                <button onClick={logoutHandler}>Log out</button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
