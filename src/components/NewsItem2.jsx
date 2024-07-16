import React, { Component } from "react";
import "./NewsItem.css";

export default class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
    this.toggleHeight = this.toggleHeight.bind(this);
  }

  toggleHeight() {
    const descElement = document.getElementById(`desc-${this.props.id}`);
    if (descElement.classList.contains("desc_height")) {
      descElement.classList.remove("desc_height");
      descElement.classList.add("desc_heightAuto");
    } else {
      descElement.classList.remove("desc_heightAuto");
      descElement.classList.add("desc_height");
    }
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  }

  render() {
    const { title, description, imgUrl, newsurl } = this.props;
    const { isExpanded } = this.state;

    return (
      <>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="animate__animated animate bounce card">
            <div className="container mt-3">
              <img src={imgUrl} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title ms-1">{title}</h5>
              <p
                className="card-text ms-1 desc_text desc_height"
                id={`desc-${this.props.id}`}
              >
                {description}
              </p>
              <span
                onClick={this.toggleHeight}
                className="btn btn-secondary btn-sm float-end"
              >
                {isExpanded ? (
                  <>
                    Collapse{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrows-collapse"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8m7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0m-.5 11.707-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0z"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    Expand{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrows-angle-expand"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707"
                      />
                    </svg>
                  </>
                )}
              </span>
              <div style={{ clear: "both", marginTop: "40px" }}>
                <a
                  href={newsurl}
                  target="_blank"
                  className="btn btn-success btn-sm mb-1 mt-1"
                >
                  View Official Site
                </a>
                <a
                  href={newsurl}
                  target="_blank"
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
