import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      city: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ city: event.target.value });
  }

  handleSubmit(event) {
    fetch(
      "http://api.openweathermap.org/data/2.5/forecast?APPID=b5b5be990915bf18f851f86d73398368&units=metric&q=" +
        this.state.city
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ weather: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <label>
            City:
            <input
              type="text"
              value={this.state.city}
              onChange={this.handleChange}
            />
          </label>
          <button onClick={this.handleSubmit}>Fetch</button>
          {this.state.weather && (
            <div>
              <h2>{this.state.weather.list[0].main.temp}</h2>
              <h2>{this.state.weather.list[0].main.humidity}</h2>
              <h2>{this.state.weather.list[0].wind.speed}</h2>
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default App;
