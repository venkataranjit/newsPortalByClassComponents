import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      naguApi: "deeb086a1fd040aca4d3651410f1373f",
      ranjitApi: "23d76d049ea5419e90c8777c17ffdf6b",
      sivaApi: "a1ff457f853d4f5eae7d69b86a6b66d9",
    };
    this.navBarItems = [
      {
        newsHeading: "All News",
        category: "",
        path: "/",
      },
      {
        newsHeading: "Business News",
        category: "business",
        path: "/business",
      },
      {
        newsHeading: "entertainment News",
        category: "entertainment",
        path: "/entertainment",
      },
      {
        newsHeading: "General News",
        category: "general",
        path: "/general",
      },
      {
        newsHeading: "Health News",
        category: "health",
        path: "/health",
      },
      {
        newsHeading: "Science News",
        category: "science",
        path: "/science",
      },
      {
        newsHeading: "Sports News",
        category: "sports",
        path: "/sports",
      },
      {
        newsHeading: "Technology News",
        category: "technology",
        path: "/technology",
      },
    ];
  }

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Routes>
            {this.navBarItems.map((item, index) => (
              <Route
                path={item.path}
                key={item.path}
                element={
                  <News
                    key={item.path}
                    country="us"
                    category={item.category}
                    newsHeading={item.newsHeading}
                    apiKey={this.state.naguApi}
                  />
                }
              />
            ))}
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}
