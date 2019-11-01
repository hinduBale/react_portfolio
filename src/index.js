import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './Navigation';
import Header from './Header.js';
import AboutMe from './AboutMe.js';
//import Skills from './Skills.js';
import Form from './Form.js';
import * as serviceWorker from './serviceWorker';

class App extends React.Component{
	render(){
		return(
			<div>
				<Navigation />
				<Header />
				<AboutMe />
				<Form />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
