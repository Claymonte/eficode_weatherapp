import React from 'react';
import ReactDOM from 'react-dom';

const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async () => {
  try {
    const response = await fetch(`http://localhost:8000/api/weather`);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: "",
      temperature: "",
      location_city:"",
    };
  }
  //added temperature and location to query
  async componentWillMount() {
    const weather = await getWeatherFromApi();
    this.setState({icon: weather.icon.slice(0, -1),temperature: response.main.temp,location_city: response.main});
  }

  render() {
    const { icon } = this.state;
    const {temperature} = this.state;
    const {location_city} = this.state;

    return (
      <div className="icon">
        { icon && <img src={`/img/${icon}.svg`} /> }
    <h1>Temperature: {temperature}</h1>
    <h2>Location: {location_city}</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Weather />,
  document.getElementById('app')
);