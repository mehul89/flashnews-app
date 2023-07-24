import React, { Component } from "react";
import Newsitem from "./Newsitem";
import "../cardstyle.css";
import { BarLoader } from "react-spinners";
import PropTypes from "prop-types";

class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 5,
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      currentPage: 1,
      totalPages: 1,
      loading: true,
    };
    document.title = ` ${this.props.category.toUpperCase()} - Flash news`;
  }

  async componentDidMount() {
    this.fetchData();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.country !== this.props.country ||
      prevProps.category !== this.props.category
    ) {
      this.setState({ currentPage: 1 }, () => this.fetchData());
    } else if (prevState.currentPage !== this.state.currentPage) {
      this.fetchData();
    }
  }

  async fetchData() {
    try {
      const { country, category, pageSize } = this.props;
      const url = `https://flashnews-seven.vercel.app/api/news?country=${country}&category=${category}&pageSize=${pageSize}`;

      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        totalPages: Math.ceil(parsedData.totalResults / 10),
        loading: false,
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleNextPage = () => {
    this.setState(
      (prevState) => ({
        currentPage: prevState.currentPage + 1,
        loading: true,
      }),
      () => this.fetchData()
    );
  };

  handlePreviousPage = () => {
    this.setState(
      (prevState) => ({
        currentPage: prevState.currentPage - 1,
        loading: true,
      }),
      () => this.fetchData()
    );
  };

  render() {
    const { darkMode } = this.props;
    const { loading, articles } = this.state;

    return (
      <>
        {loading && (
          <BarLoader
            color="#0076bd"
            height={5}
            speedMultiplier={0.4}
            width={5000}
          />
        )}
        <div className="container py-5">
          <h1
            className={`text-center heading ${
              darkMode ? "text-white" : "text-black"
            }`}
            style={{ margin: "50px" }}
            id="pageHeaderTitle"
          >
            Flash news - top {this.props.category} Headlines
          </h1>
          {!loading &&
            articles &&
            articles.map((element) => (
              <div key={element.url}>
                <Newsitem
                  title={element.title}
                  description={element.description}
                  publishedAt={element.publishedAt}
                  imgurl={element.urlToImage}
                  url={element.url}
                  darkMode={darkMode}
                />
              </div>
            ))}

          <div className="d-flex justify-content-between py-5">
            <button
              className="btn btn-primary"
              disabled={this.state.currentPage === 1}
              onClick={this.handlePreviousPage}
            >
              &laquo; Previous
            </button>
            <button
              className="btn btn-primary"
              disabled={this.state.currentPage === this.state.totalPages}
              onClick={this.handleNextPage}
            >
              Next &raquo;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
