import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: 8,
      totalResults: 0, // Added totalResults to state
      
    };
  }

  async componentDidMount() {
    console.log("componentDidMount");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page
    }&pageSize=${this.state.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults, // Set totalResults
      loading:false,
    });
    console.log(parsedData);
  }

  prevHandler = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page - 1
    }&pageSize=${this.state.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading:false,
    });
  };

  nextHandler = async () => {
    if (
      this.state.page + 1 <=
      Math.ceil(this.state.totalResults / this.state.pageSize)
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
        this.state.page + 1
      }&pageSize=${this.state.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading:false,
      });
    }
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 seven">
              <h1 className="mt-3 mb-3">{this.props.newsHeading}</h1>
              {this.state.loading && <Spinner />}
            </div>
          </div>
          <div className="row">
            {!this.state.loading && this.state.articles.map((e) => {
              return (
                <NewsItem
                  key={e.url}
                  id={e.index}
                  title={e.title ? e.title.slice(0, 44) : ""}
                  imgUrl={
                    e.urlToImage
                      ? e.urlToImage
                      : "https://cdn.vectorstock.com/i/500p/82/99/no-image-available-like-missing-picture-vector-43938299.jpg"
                  }
                  description={e.description ? e.title.slice(0, 80) : ""}
                  newsurl={e.url}
                  author={e.author? e.author.slice(0, 20) : "No Author"}
                  date={e.publishedAt}
                  category={this.props.category}
                />
              );
            })}
          </div>
          {!this.state.loading && <div className="d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              className="btn btn-success btn-sm"
              type="button"
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
              type="button"
              onClick={this.nextHandler}
            >
              Next &rarr;
            </button>
          </div>}
        </div>
      </>
    );
  }
}
