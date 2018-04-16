import React from "react";
import "./landing.css";

import Header from "./components/header/Header";
import About from "./components/about/About";
import Features from "./components/features/Features";
import Additional from "./components/additional/Additional";

const Landing = () => {
	return (
		<div className="landing">
			<Header />
			<About />
			<Features />
			<Additional />
		</div>
	)
}

export default Landing;