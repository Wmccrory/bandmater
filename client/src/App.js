import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Landing from "./pages/landing/Landing";
const Dashboard = () => {return <h1>Dashboard</h1>};

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>	
					<div className="container">
						<Route exact path="/" component={Landing} />
						<Route exact path="/dashboard" component={Dashboard} />
					</div>
				</BrowserRouter>
      </div>
    );
  }
}

export default App;
