import React from 'react';

import './LoadingPlaceholder.scss';

export default function LoadingPlaceholder() {
	return (
		<div className="loading-placeholder">
			<div className="row text-center text-md-left">
				<div className="col-md-6">
					<div className="placeholder-temperature">ºC</div>
					<div className="placeholder-location"></div>
				</div>
				<div className="col-md-6">
					<div className="row">
						<div className="col-6 placeholder-detail">
							<small className="weather-label"></small>
						</div>
						<div className="col-6 placeholder-detail">
							<small className="weather-label"></small>
						</div>
						<div className="col-6 placeholder-detail">
							<small className="weather-label"></small>
						</div>
						<div className="col-6 placeholder-detail">
							<small className="weather-label"></small>
						</div>
						<div className="col-6 placeholder-detail">
							<small className="weather-label"></small>
						</div>
						<div className="col-6 placeholder-detail">
							<small className="weather-label"></small>
						</div>
						<div className="col-6 placeholder-detail">
							<small className="weather-label"></small>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}