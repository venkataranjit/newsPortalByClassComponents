import React, { Component } from "react";
import "./NewsItem.css";

export default class NewsItem extends Component {
  render() {
    const { title, description, imgUrl, newsurl } = this.props;
    return (
      <>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="animate__animated animate bounce card">
            <div className="container mt-3">
              <img src={imgUrl} className="card-img-top " alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title ms-1">{title}...</h5>
              <p className="card-text mb-5 ms-1 desc_text desc_height">
                {description}
                <a href="/">...</a>
              </p>

              <div className="">
                <a
                  href={newsurl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-success btn-sm mb-1 mt-1 "
                >
                  View Official Site
                </a>
                <a
                  href={newsurl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-success btn-sm mb-1 mt-1 float-end"
                >
                  View Full Article
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
