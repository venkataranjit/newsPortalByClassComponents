import React, { Component } from "react";
import "./NewsItem.css";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsurl, author, date, category } =
      this.props;
    const dateObj = new Date(date);

    // Extract the date and time parts
    const formattedDate = dateObj.toLocaleDateString();
    // const formattedTime = dateObj.toLocaleTimeString();

    let categoryDisplay;
    switch (category) {
      case "health":
        categoryDisplay = "Health";
        break;
      case "sports":
        categoryDisplay = "Sports";
        break;
      case "business":
        categoryDisplay = "Business";
        break;
      case "entertainment":
        categoryDisplay = "Entertainment";
        break;
      case "general":
        categoryDisplay = "General";
        break;
      case "science":
        categoryDisplay = "Science";
        break;
      case "technology":
        categoryDisplay = "Technology";
        break;
      default:
        categoryDisplay = "All News";
        break;
    }
    return (
      <>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="animate__animated animate bounce card">
            <div className="container mt-3">
              <img src={imgUrl} className="card-img-top " alt="..." />
              <span className="badge rounded-pill bg-dark fixed">
                {categoryDisplay}{" "}
              </span>
            </div>
            <div className="card-body">
              <p className="card-text float-start">
                <small className="text-body-secondary">
                  By <b>{author}</b>
                </small>
              </p>
              <p className="card-text float-end">
                <small className="text-body-secondary">{formattedDate}</small>
              </p>
              <h5 className="card-title">
                {title}
                <a href="/">...</a>
              </h5>
              <p className="card-text mb-5 desc_text desc_height">
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
