import React, { Component } from "react";
import './Footer.css';
export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer bg-dark ">
          <div className="container">
            <span className="text-light float-end">
              Place sticky footer content here.
            </span>
          </div>
        </footer>
      </>
    );
  }
}
