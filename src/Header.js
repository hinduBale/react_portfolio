import React from 'react';
import './Header.css'
import coverPhoto from './img/2.jpg';

const myStyle = {
	backgroundImage: `url(${coverPhoto})`,
	height: '70vh',
	backgroundSize: 'cover'
}

class Header extends React.Component{
	render(){
		return(
			<header style = {myStyle}>
				<h1> Looking <br/> for a <br/> <strong>problem-solver</strong>? </h1>
			</header>
		);
	}
}

export default Header;