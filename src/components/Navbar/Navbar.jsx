import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/joystick.png";
export default function Navbar({ userData, logOut }) {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light shadow fixed-top bg-white">
        <div className="container">
          <Link
            className="navbar-brand fw-bold d-flex align-items-center"
            to="home"
          >
            <img src={logo} className="logo me-2 mb-2 " alt="logo"></img>GameOver
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse ms-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-5 mb-2 mb-lg-0">
              {userData ? (
                <Fragment>
                  <li className="nav-item me-3">
                    <Link className="nav-link" aria-current="page" to="home">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item me-3">
                    <Link className="nav-link" aria-current="page" to="All">
                      All
                    </Link>
                  </li>
                  <li className="nav-item dropdown me-3">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="Platforms"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Platforms
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <Link className="dropdown-item" to={`/Platforms/pc`}>
                          pc
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={`/Platforms/browser`}>
                          Browser
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown me-3">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="sortby"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      sort-by
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <Link className="dropdown-item" to={`/SortBy/release-date`}>
                          release-date
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={`/SortBy/popularity`}>
                          popularity
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={`/SortBy/alphabetical`}>
                          alphabetical
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={`/SortBy/relevance`}>
                          relevance
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown me-3">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="categories"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Categories
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <Link className="dropdown-item" to={`/Categories/racing`}>
                          racing
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={`/Categories/sports`}>
                          sports
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={`/Categories/social`}>
                          social
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={`/Categories/shooter`}>
                          shooter
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={`/Categories/open-world`}>
                          open-world
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={`/Categories/zombie`}>
                          zombie
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={`/Categories/fantasy`}>
                          fantasy
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={`/Categories/action-rpg`}>
                          action-rpg
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={`/Categories/action`}>
                          action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={`/Categories/flight`}>
                          flight
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={`/Categories/battle-royale`}>
                          battle-royale
                        </Link>
                      </li>
                    </ul>
                  </li>
                </Fragment>
              ) : (
                ""
              )}
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {userData ? (
                <Fragment>
                  <li className="nav-item me-3">
                    <span className="nav-link text-info">{userData.first_name}</span>
                  </li>
                  <li className="nav-item me-3">
                    <span className="nav-link" onClick={logOut}>Logout</span>
                  </li>
                </Fragment>
              ) :
                <Fragment>
                  <li className="nav-item me-3">
                    <Link className="nav-link" to="">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item me-3">
                    <Link className="nav-link" to="register">
                      Join Free
                    </Link>
                  </li>
                </Fragment>
              }
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
