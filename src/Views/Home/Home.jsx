import React from 'react';
import LoadingPlaceholder from '../../Components/LoadingPlaceholder/LoadingPlaceholder.jsx';
import api from '../../services/api';

import Currentday from '../../Components/Currentday/Currentday.jsx';
import Nextdays from '../../Components/Nextdays/Nextdays.jsx';

import './Home.scss';

const currentLocation = localStorage.getItem('userLocation') ? localStorage.getItem('userLocation') : 'Santa Maria da Feira, Portugal'

class Home extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			currentDay: {
				loading: true,
				currentTemp: 0,
				minTemp: 0,
				maxTemp: 0,
				humidity: 0,
				pressure: 0,
				wind: {
					speed: 0,
					degree: 0
				},
				weatherDesc: '',
			},
			nextDays: {
				loading: true
			}
		}

		this.currentDay = this.currentDay.bind(this);
		this.buildFutureDays = this.buildFutureDays.bind(this);
		this.nextDays = this.nextDays.bind(this);
	}
	
	componentDidMount() {
		this.currentDay();
		this.nextDays();
	}


	// Current Day

	async currentDay() {
		console.log(currentLocation)
		const request = await api.get('weather', {
			params: {
				'q': currentLocation,
				'lang': 'en',
				'units': 'metric'
			}
		});

		const {status, data} = request;

		if ( status === 200 && request ) {
			this.setState({
				currentDay: {
					loading: false,
					currentTemp: data.main.temp,
					minTemp: data.main.temp_min,
					maxTemp: data.main.temp_max,
					humidity: data.main.humidity,
					pressure: data.main.pressure,
					wind: {
						speed: data.wind.speed,
						degree: data.wind.deg
					},
					weatherDesc: data.weather[0].description,
					weatherIcon: '10d',
				}
			})
		}
	}


	// Next days

	async nextDays() {

		const request = await api.get('forecast/daily', {
			params: {
				'q': currentLocation,
				'cnt': 5,
				'units': 'metric'
			}
		});

		const {status, data} = request;

		if ( status === 200 && request ) {
			this.setState({
				nextDays: {
					loading: false,
					data: data
				}
			})
		}
		
	}


	buildFutureDays() {
		return this.state.nextDays.data.list.map((day, key) => {
			return key > 0 ? <Nextdays data={day} key={key} /> : '';
		})
	}
	
	
	render() {
		return (
			<>
				<div className="current-day">
					<div className="container">
						{ this.state.currentDay.loading ? <LoadingPlaceholder /> : <Currentday data={this.state.currentDay} location={currentLocation} /> }
						<div className="mb-5"></div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						{ this.state.nextDays.loading ? '' : this.buildFutureDays() }
					</div>
				</div>
			</>
		)
	}

}

export default Home;