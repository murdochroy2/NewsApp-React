import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

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

  static defaultPros = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      props.category
    )} - NewsMonkey`;
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = data.json();
    this.props.setProgress(30);
    parsedData.then((json) => {
      this.props.setProgress(70);
      console.log("Total results: ", json.totalResults);
      this.setState({
        articles: json.articles,
        loading: false,
        totalResults: json.totalResults,
      });
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    // console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=59caab13f9bc472a8485fc671d842e48&page=1&pageSize=${this.props.pageSize}&page=1`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = data.json();
    // parsedData.then((json) => {
    //   console.log("Total results: ", json.totalResults);
    //   this.setState({
    //     articles: json.articles,
    //     loading: false,
    //     page: this.state.page,
    //     totalResults: json.totalResults,
    //   });
    // });
    this.updateNews();
  }
  handlePrevClick = async () => {
    this.setState({ page: this.state.page + 1 });
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=59caab13f9bc472a8485fc671d842e48&pageSize=${
    //   this.props.pageSize
    // }&page=${this.state.page - 1}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = data.json();
    // parsedData.then((json) => {
    //   console.log("Total results: ", json.totalResults);
    //   this.setState({
    //     articles: json.articles,
    //     loading: false,
    //     page: this.state.page - 1,
    //     totalResults: json.totalResults,
    //   });
    // });
    this.updateNews();
  };
  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=59caab13f9bc472a8485fc671d842e48&pageSize=${
    //   this.props.pageSize
    // }&page=${this.state.page + 1}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = data.json();
    // parsedData.then((json) => {
    //   console.log("Total results: ", json.totalResults);
    //   this.setState({
    //     articles: json.articles,
    //     loading: false,
    //     page: this.state.page + 1,
    //     totalResults: json.totalResults,
    //   });
    // });
    this.updateNews();
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    // updateNews()
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    // loading no longer required as InfiniteScroll handles showing the loading on scroll down. It is still shown the on 1st load
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = data.json();
    parsedData.then((json) => {
      console.log("Total results: ", json.totalResults);
      this.setState({
        articles: this.state.articles.concat(json.articles),
        // loading: false,
        totalResults: json.totalResults,
      });
    });
  };

  render() {
    return (
      // <div className="container my-3">
      <>
        <div className="row my-3">
          <h1 className="text-center">
            NewsMonkey - Top Headlines from{" "}
            {`${this.capitalizeFirstLetter(this.props.category)}`}
          </h1>
          {/* Checking loading and displaying Spinner has been replaced by infinite scroll */}
          {/* When no articles are loaded spinner will be shown for the first time */}
          {this.state.loading && <Spinner className="text-center" />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={
              <h4>
                <Spinner></Spinner>
              </h4>
            }
          >
            <div className="container my-3">
              <div className="className row">
                {this.state.articles.map((element) => {
                  // console.log(element);
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem
                        title={element.title ? element.title.slice(0, 48) : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 88)
                            : ""
                        }
                        imageUrl={element.urlToImage}
                        url={element.url}
                        author={element.author ? element.author : "Staff"}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
          {/* <div className="col-md-4">
            <NewsItem />
          </div>
          <div className="col-md-4">
            <NewsItem />
          </div> */}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            // onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            // onClick={this.handleNextClick}
            disabled={
              this.state.page >=
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
        {/* Commented out as this div was returning a horizontal scroll bar */}
        {/* </div> */}
      </>
    );
  }
}

export default News;
