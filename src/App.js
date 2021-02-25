import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/src/components/NavBar";
import ContentArea from "./components/ContentArea/src/components/ContentArea";

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>MyTest from App</h1>
				<NavBar />
				<ContentArea id={0}/>
			</div>
		);
	}
}

export default App;
