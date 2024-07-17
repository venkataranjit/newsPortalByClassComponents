import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class NavBar extends Component {
  constructor() {
    super();
    this.navBarItems = [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Business",
        url: "/Business",
      },
      {
        name: "Entertainment",
        url: "/Entertainment",
      },
      {
        name: "General",
        url: "/General",
      },
      {
        name: "Health",
        url: "/Health",
      },
      {
        name: "Science",
        url: "/Science",
      },
      {
        name: "Sports",
        url: "/Sports",
      },
      {
        name: "Technology",
        url: "/Technology",
      },
    ];
  }
  render() {
    return (
      <>
        <nav
          className="navbar navbar-expand-lg bg-success"
          data-bs-theme="dark"
        >
          <div className="container">
            <Link className="navbar-brand" to="/">
              News Portal
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
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {this.navBarItems.map((item, index) => {
                  return (
                    <li className="nav-item" key={index}>
                      <Link className="nav-link" aria-current="page" to={item.url}>
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-light" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
