import React, { Component } from "react";

class FullSizeNewsItem extends Component {
  render() {
    return (
      <>
        <div className="container fullsizepage">
          <div className="row ">
            <div className="col-sm-6">
              <img src="" className="card-img-top" alt="..." />
              <span className="badge rounded-pill bg-dark fixed">
                {"categoryDisplay"}
              </span>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{"title"}</h5>
                  <p className="card-text mb-5 desc_text desc_height">
                    {"description"}
                  </p>
                  <div className="author">
                    <p className="card-text float-start">
                      <small className="text-body-secondary">
                        By <b>{"author"}</b>
                      </small>
                    </p>
                    <p className="card-text float-end">
                      <small className="text-body-secondary">
                        {formattedDate}
                      </small>
                    </p>
                  </div>
                </div>
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-success btn-sm mb-1 mt-1"
                >
                  View Official Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(FullSizeNewsItem);
