import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount(){
    console.log("componenetdidmount");
  let url="https://newsapi.org/v2/everything?q=tesla&from=2024-06-16&sortBy=publishedAt&apiKey=23d76d049ea5419e90c8777c17ffdf6b";
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({articles:parsedData.articles});
  console.log(parsedData);
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="mt-2 mb-4">News</h2>
            </div>
          </div>
          <div className="row">
            {this.state.articles.map((e,index)=>{
              return(
                <NewsItem
                key={e.url}
                id={e.index}
                title={e.title?e.title.slice(0,44):""}
                imgUrl={e.urlToImage?e.urlToImage:"https://cdn.vectorstock.com/i/500p/82/99/no-image-available-like-missing-picture-vector-43938299.jpg"}
                description={e.description?e.title.slice(0,80):""}
                newsurl={e.url}
              />
              )
            })}
           
          </div>
        </div>
      </>
    );
  }
}
