import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: "bbc-sport", name: "BBC Sport" },
      author: null,
      title: "'Smith Sussex stint will not decide Ashes outcome'",
      description:
        "The signing of Steve Smith is great news for Sussex and county cricket, and should not only be seen as an Ashes warm-up, says Jonathan Agnew.",
      url: "http://www.bbc.co.uk/sport/cricket/64333506",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/165B6/production/_128347519_stevesmith.jpg",
      publishedAt: "2023-01-19T15:22:24.6991284Z",
      content:
        "Steve Smith has previously played county cricket with Worcestershire\r\nThe signing of Steve Smith is great news for Sussex, county cricket and all those who are going to play with or against him.\r\nIt … [+4820 chars]",
    },
    {
      source: { id: "news-com-au", name: "News.com.au" },
      author: null,
      title: "‘Utterly disgraceful’: Australia slams Clarke",
      description:
        "<p>Former Australian cricket captain Michael Clarke has been slammed after the video of his fight with his girlfriend Jade Yarbrough went viral.</p>",
      url: "https://www.news.com.au/sport/cricket/australia-reacts-to-utterly-disgraceful-michael-clarke-video/news-story/24ebfc4a80ab3fa96856c97b2bb3ab83",
      urlToImage:
        "https://content.api.news/v3/images/bin/2ae6b3eb7ed13f62599c1a233e4bb6fd",
      publishedAt: "2023-01-19T10:44:00Z",
      content:
        "Former Australian cricket captain Michael Clarke has been slammed after the video of his fight with his girlfriend Jade Yarbrough went viral.\r\nThe fracas, which was filmed by a bystander in Noosa on … [+4303 chars]",
    },
    {
      source: { id: "news-com-au", name: "News.com.au" },
      author: null,
      title: "Karl responds to Michael Clarke fracas",
      description:
        "<p>Karl Stefanovic has responded after he was seen getting involved in a fracas with Michael Clarke and the cricket legend&rsquo;s girlfriend Jade Yarbrough.</p>",
      url: "https://www.news.com.au/entertainment/karl-stefanovic-responds-after-video-of-michael-clarke-and-jade-yarbrough-fracas-emerges/news-story/2e86876ef6c4fb198ce1d0174812e1f0",
      urlToImage:
        "https://content.api.news/v3/images/bin/d9043fb5274436843a25680c67a96c0e",
      publishedAt: "2023-01-19T07:59:00Z",
      content:
        "Karl Stefanovic has responded after he was seen getting involved in a fracas with Michael Clarke and the cricket legend’s girlfriend Jade Yarbrough.\r\nThe clash, which was filmed by a bystander in Noo… [+3112 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <div className="row">
          <h2>Top Headlines</h2>
          {this.state.articles.map((element) => {
            console.log(element);
          })}
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDesc" imageUrl="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/165B6/production/_128347519_stevesmith.jpg"/>
          </div>
          {/* <div className="col-md-4">
            <NewsItem />
          </div>
          <div className="col-md-4">
            <NewsItem />
          </div> */}
        </div>
      </div>
    );
  }
}

export default News;
