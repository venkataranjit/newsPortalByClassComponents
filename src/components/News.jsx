import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import noImage from "../assets/images/noImage.jpg";

export default class News extends Component {
  capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: 8,
      totalResults: 0,
    };

    document.title = `${this.capitalize(this.props.category)} - News`;
  }

  async updateNews() {
    try {
      this.setState({ loading: true });

      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.state.pageSize}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const parsedData = await response.json();
      this.setState({
        articles: parsedData.articles || [],
        totalResults: parsedData.totalResults || 0,
        loading: false,
      });

      console.log(parsedData);
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.updateNews();
  }

  prevHandler = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page - 1 }),
      this.updateNews
    );
  };

  nextHandler = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      this.updateNews
    );
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 seven">
            <h1 className="mt-3 mb-3">{this.props.newsHeading}</h1>
            {this.state.loading && <Spinner />}
          </div>
        </div>
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((e) => (
              <NewsItem
                key={e.url}
                title={e.title ? e.title.slice(0, 44) : "No Title"}
                imgUrl={e.urlToImage || noImage}
                description={
                  e.description ? e.description.slice(0, 80) : "No Description"
                }
                newsurl={e.url}
                author={e.author || "Unknown Author"}
                date={e.publishedAt}
                category={this.props.category}
              />
            ))}
        </div>
        {!this.state.loading && (
          <div className="d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              className="btn btn-success btn-sm"
              onClick={this.prevHandler}
            >
              &larr; Prev
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.state.pageSize)
              }
              className="btn btn-success btn-sm"
              onClick={this.nextHandler}
            >
              Next &rarr;
            </button>
          </div>
        )}
      </div>
    );
  }
}
