import React from 'react'
import "./Descriptions.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faDroplet, faMinimize, faTemperature0, faWind } from '@fortawesome/free-solid-svg-icons';
const Descriptions = ({weather,units}) => {
    const tempUnit = units === "metric" ? "°C" : "°F";
    const windUnit = units === "metric" ? "m/s" : "m/h";
    const cards = [
        {
          id: 1,
          icon: <FontAwesomeIcon icon={faArrowDown}/>,
          title: "min",
          data: weather.temp_min.toFixed(),
          unit: tempUnit,
        },
        {
          id: 2,
          icon: <FontAwesomeIcon icon={faArrowUp}/>,
          title: "max",
          data: weather.temp_max.toFixed(),
          unit: tempUnit,
        },
        {
          id: 3,
          icon: <FontAwesomeIcon icon={faTemperature0}/>,
          title: "feels like",
          data: weather.feels_like.toFixed(),
          unit: tempUnit,
        },
        {
          id: 4,
          icon: <FontAwesomeIcon icon={faMinimize}/>,
          title: "pressure",
          data: weather.pressure,
          unit: "hPa",
        },
        {
          id: 5,
          icon: <FontAwesomeIcon icon={faDroplet}/>,
          title: "humidity",
          data: weather.humidity,
          unit: "%",
        },
        {
          id: 6,
          icon: <FontAwesomeIcon icon={faWind}/>,
          title: "wind speed",
          data: weather.speed.toFixed(),
          unit: windUnit,
        },
      ];
  return (
    <div className="section section__descriptions">
      {cards.map(({ id, icon, title, data, unit }) => (
        <div key={id} className="card">
          <div className="description__card-icon">
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}
    </div>
  )
}

export default Descriptions;