import React, { Component } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";

import { fetchData } from "./api";

class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchdata = await fetchData();
    this.setState({ data: fetchdata });
  }

  handleCountryChange = async (country) => {
    console.log(country);
    const fetchdata = await fetchData(country);
    this.setState({ data: fetchdata, country: country });
  };

  render() {
    let { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src="https://i.ibb.co/7QpKsCX/image.png" alt="" />
        <h2> Covid-19 Tracker By Manas</h2>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />

        <div
          class="fb-post"
          data-href="https://www.facebook.com/ranjan.manas.7/posts/2981925478583655"
          data-show-text="true"
          data-width=""
        >
          <blockquote
            cite="https://developers.facebook.com/ranjan.manas.7/posts/2981925478583655"
            class="fb-xfbml-parse-ignore"
          >
            <p>
              https://covid19-tracker-reactapp-by-manas.netlify.app Here is my
              coontribution by building an web application using...
            </p>
            Posted by{" "}
            <a href="https://www.facebook.com/ranjan.manas.7">
              Ranjan Manas Er
            </a>{" "}
            on&nbsp;
            <a href="https://developers.facebook.com/ranjan.manas.7/posts/2981925478583655">
              Tuesday, 19 May 2020
            </a>
          </blockquote>
        </div>
      </div>
    );
  }
}

export default App;
