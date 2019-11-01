import React from 'react';
import aboutMe from './img/aboutMe.jpg'; 
import './AboutMe.css';

class AboutMe extends React.Component{
	render(){
		return(
			<div className = "container">
				<h1>You are at the right place</h1>
					<div className = "AboutMeImage">
						<img src = {aboutMe} />
						<p className = "AboutMeText">Hi, my name is Rahul Saxena. I am third year Computer Science student at IIIT Bhubaneswar.
												I have a background in Networking and Cyber security with strong DS and Algo skills and also I am passionate about development. I try
												learn and grow everyday and I have also dipped my toes in Natural Language Processing. I firmly believe that while actually implementing 
												and creating stuff is important, we should not compromise on the underlying theories of the technologies we use and thus I am a frequent 
												learner from various MOOCs and ofcourse my college courses.
						</p>
					</div>
					<div className = "row">
						<div className = "github">
							<Icons myIcon={iconObj[0].icon} myAddress={iconObj[0].address}/>
						</div>
						<div className = "linkedIn">
							<Icons myIcon={iconObj[1].icon} myAddress={iconObj[1].address}/>
						</div>
						<div className = "quora">
							<Icons myIcon={iconObj[2].icon} myAddress={iconObj[2].address}/>
						</div>
						<div className = "gfg">
							<Icons myIcon={iconObj[3].icon} myAddress={iconObj[3].address}/>
						</div>
					</div>	
			</div>
		);
	}
}

const iconObj = [
{
	icon: <i class="fab fa-github-square"></i>,
	address: `https://github.com/hinduBale`
},
{
	icon: <i class="fab fa-linkedin"></i>,
	address: 'https://www.linkedin.com/in/saxena-rahul/'
},
{
	icon: <i class="fab fa-quora"></i>,
	address: 'https://www.quora.com/profile/Rahul-Saxena-30'
},
{
	icon: <i class="fas fa-laptop-code"></i>,
	address: 'https://auth.geeksforgeeks.org/user/hindu_bale/profile'
}

];

class Icons extends React.Component{
	render(){
		return(
			<div>
				<a href={this.props.myAddress} target="_blank">
					<span>
						{this.props.myIcon}
					</span></a>
			</div>
		);
	}
}

export default AboutMe; 