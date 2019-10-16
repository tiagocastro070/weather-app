/* eslint-disable no-useless-constructor */
import React from 'react';

import './Header.scss';
import gitHubLogo from '../../images/github-logo.svg';

class Header extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			userLocation: ''
		}
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			userLocation: e.target.value,
		});
	}

	async handleSubmit(e) {
		e.preventDefault();
		localStorage.setItem('userLocation', this.state.userLocation);
		window.location.reload();
	}

	render() {
		return (
			<div className="header">
				<div className="container">
					<nav className="navbar">
						<a href="" title="" className="header__fork" target="_blank" rel="noreferer noopener">
							<img src={gitHubLogo} alt="GitHub logo" width="20" height="20" />
						</a>
						<form className="search-form" onSubmit={ this.handleSubmit }>
							<input type="text" placeholder="ex: Porto, Portugal" className="search-input" required onChange={this.handleChange} />
							<button></button>
						</form>
					</nav>
				</div>
			</div>
		)
	}

}

export default Header;