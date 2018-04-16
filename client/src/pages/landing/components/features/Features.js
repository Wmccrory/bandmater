import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./features.css";

const Features = () => {
	return (
		<div className="features">
			<h2>How it works:</h2>

			<ul className="features__list">
				<li>You create a profile</li>
				<li>You start entering your gigs into the database</li>
				<li>You rate the venues you played at and the bands you've played with</li>
				<li>The database uses advanced algorithms to find venues and bands that match with your sound based on where you've played and who you've played with</li>
				<li>As the database grows and your web increases, the more sophisticated the suggestions become</li>
			</ul>

			<h2>That's it. No cost. Hassle-free.</h2>
		</div>
	)
};

export default Features;