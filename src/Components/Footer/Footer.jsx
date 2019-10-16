import React from 'react';
import './Footer.scss';

const Footer = () => {	
	return (
		<div className="container mt-5 mb-2 footer">
			<div className="row">
				<div className="col-xs-12 col-md-6 author-container text-center text-md-left">
					<a href="https://github.com/tiagocastro070" target="_blank" rel="noopener noreferrer" className="author">
						<img src="https://avatars0.githubusercontent.com/u/35606973" alt="" width="35" height="35" />
						<b>Tiago Castro</b> &copy; {new Date().getFullYear()}
					</a>
				</div>
				<div className="col-xs-12 col-md-6 text-monospace text-center text-md-right credits">
					<small>
						API data by Rapidapi&copy; and Open Weather Map&copy;
						<br/>
					</small>
				</div>
			</div>
		</div>
	)
}

export default Footer;