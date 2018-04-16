import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./about.css";

const About = () => {
	return (
		<div className="about">
			<div className="about__title">
				<h2>Finding a gig can suck</h2>
				<h2>Finding a band to play with can suck</h2>
				<h2>We're here to make it not suck</h2>
			</div>

			<div className="about__content">
				<div className="about__content--box">
					<h2>Where to play?</h2>
					<p>
						The hardest part about planning a tour is figuring out WHERE exactly you're going to play. Sure, you know the best venues for your band in your hometown, or in major areas like LA or NY, but where exactly are you going to play in the middle of Nebraska? There's nothing worse than the long stretches of highway where you're just killing time.
					</p>
					<br />
					<p>
						That's where we come in.
					</p>
				</div>
				
				<div className="about__content--box">
					<h2>Who to play with?</h2>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus error dicta perferendis obcaecati labore unde soluta voluptate hic id nobis dolorum ullam vero temporibus placeat saepe quaerat, at rem tempora! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus error dicta perferendis obcaecati labore unde soluta voluptate hic id nobis dolorum ullam vero temporibus placeat saepe quaerat, at rem tempora!</p>
				</div>
			</div>
		</div>
	)
};

export default About;