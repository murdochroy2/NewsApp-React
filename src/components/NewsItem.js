import React, { Component } from "react";

export class NewsItem extends Component {
  // Constructor will be used in the News Component
  // constructor() {
  //   super()
  //   console.log("Hello from NewsItem constructor");
  // }
  render() {
    let { title, description, imageUrl, url } = this.props;
    return (
      <div>
        <div className="card" style={{ width: " 18rem" }}>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://i-invdn-com.investing.com/news/world_news_3_69x52._800x533_L_1419494235.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
              {/* Some quick example text to build on the card title and make up the
              bulk of the card's content. */}
            </p>
            <a href={url} target="_blank" className="btn btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
