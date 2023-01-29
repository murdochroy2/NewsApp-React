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
          <img src={imageUrl?imageUrl:"https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/165B6/production/_128347519_stevesmith.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
              {/* Some quick example text to build on the card title and make up the
              bulk of the card's content. */}
            </p>
            <a href={url} target="_blank" className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
