import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./header.css";

const Header = () => {
	return (
		<div className="header">
			<div className="header__bg-video">
				<video className="header__bg-video__content" autoPlay muted loop>
					<source src="./assets/img/landing/bg-video.mp4" type="video/mp4" />
					<source src="./assets/img/landing/bg-video.webm" type="video/webm" />
					Your browser is not supported
				</video>
			</div>

			<div className="header__text-box">
				<h1>Bandmater</h1>
				<h2>Connecting bands, fans, and venues</h2>

				<div className="header__btn">
					<Link to="#">Sign up / Sign in</Link>
				</div>
			</div>
		</div>
	)
}

export default Header;

