import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredrobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield);
    });
    if (!robots.length) {
      return (
        <h1 className="bg-teal-700 p-8 text-center text-white bold text-3xl">
          Loading...
        </h1>
      );
    } else {
      return (
        <div className="bg-teal-900">
          <h1 className="bg-teal-700 p-8 text-center text-white bold text-3xl">
            Robofriends
          </h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredrobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
