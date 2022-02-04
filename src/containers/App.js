import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

function App() {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searfield: "",
  //   };
  // }

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => {
  //       this.setState({ robots: users });
  //     });
  // }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        setRobots(users)});
  }, [])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredrobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield);
  });

  return !robots.length ? (
    <h1 className="bg-teal-700 p-8 text-center text-white bold text-3xl">
      Loading...
    </h1>
  ) : (
    <div className="bg-teal-900">
      <h1 className="bg-teal-700 p-8 text-center text-white bold text-3xl">
        Robofriends
      </h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredrobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;
