import React from 'react';

import './Nextdays.scss';

const weekday = new Array(7);
weekday[0] = 'Sunday';
weekday[1] = 'Monday';
weekday[2] = 'Tuesday';
weekday[3] = 'Wednesday';
weekday[4] = 'Thursday';
weekday[5] = 'Friday';
weekday[6] = 'Saturday';

export default function Nextdays(props) {
	
	// convert date to weekdays
	const timestamp = props.data.dt; // UNIX timestamp in seconds
	const myDate = new Date();
	myDate.setTime(timestamp * 1000); // javascript timestamps are in milliseconds
	
	return (
		<div className="col-md-6 col-lg-3 text-center">
			<div>
				<div className="image-weather-container"><img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt={props.data.weather[0].description} width="50" height="50" /></div>
				<span className="next-day-title">{ weekday[myDate.getDay()] }</span>
			</div>
			<hr/>
			<div className="row">
				<div className="col-6 weather-detail">
					<small className="weather-label">Min. Temp.</small><br/>
					{Math.round( props.data.temp.min * 10 ) / 10}ºC
				</div>
				<div className="col-6 weather-detail">
					<small className="weather-label">Max. Temp.</small><br/>
					{Math.round( props.data.temp.max * 10 ) / 10}ºC
				</div>
			</div>
		</div>
	);
}
