import React from 'react';

import './Currentday.scss';

export default function Currentday(props) {
	return (
		<>
			<div className="row">
				<div className="col text-center text-md-left">
					<img src={`http://openweathermap.org/img/wn/${props.data.weatherIcon}@2x.png`} alt="" className="current-day-image" />
				</div>
			</div>
			<div className="row text-center text-md-left">
				<div className="col-md-6 current-day-main">
					<div className="current-day-temperature">{ Math.round( props.data.currentTemp * 10 ) / 10 } <span>ºC</span></div>
					<div className="current-day-location">{props.location}</div>
				</div>
				<div className="col-md-6">
					<div className="row">
						<div className="col-6 weather-detail">
							<small className="weather-label">Min. Temp.</small><br/>
							{Math.round( props.data.minTemp * 10 ) / 10}ºC
						</div>
						<div className="col-6 weather-detail">
							<small className="weather-label">Max. Temp.</small><br/>
							{Math.round( props.data.maxTemp * 10 ) / 10}ºC
						</div>
						<div className="col-6 weather-detail">
							<small className="weather-label">Wind Speed</small><br/>
							{props.data.wind.speed} km/h
						</div>
						<div className="col-6 weather-detail">
							<small className="weather-label">Wind Orientation</small><br/>
							{props.data.wind.degree}º
							<span className="weather-wind-direction" style={{transform: `rotate(${props.data.wind.degree - 90 - 180}deg)`}}></span>
						</div>
						<div className="col-6 weather-detail">
							<small className="weather-label">Humidity</small><br/>
							{props.data.humidity}%
						</div>
						<div className="col-6 weather-detail">
							<small className="weather-label">Pressure</small><br/>
							{props.data.pressure} mb
						</div>
						<div className="col-6 weather-detail">
							<small className="weather-label">Description</small><br/>
							{ props.data.weatherDesc.charAt(0).toUpperCase() + props.data.weatherDesc.slice(1) }
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
