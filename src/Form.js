import React from 'react';
import './Form.css';

class Form extends React.Component{
	state = {
		Name:'',
		Email:'',
		Message:''
	}

	change = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render(){
		return(
			<div className = "form_container">
			    <h1>Want to get in touch?</h1>
					<form action="POST" data-netlify="true">
							<p>Your Name: </p>
								<input
								id = "adjustName" 
								name="Name"
								placeholder='Your Name' 
								value = {this.state.Name}
								onChange = {e => this.change(e)} 
								/>
								<br />
							<p>Your Email: </p>
								<input 
								id = "adjustEmail"
								name="Email"
								placeholder='Your E-mail address' 
								value = {this.state.Email}
								onChange = {e => this.change(e)} 
								/>
								<br />
						<p>Your Message for me: </p>
						<div className = "msgBox"> 
							<input 
							id = "adjustMsg"
							size = "50"
							name="Message"
							placeholder='Your message for me..' 
							value = {this.state.Message}
							onChange = {e => this.change(e)} 
							/>
							<br />
						</div>
						<input type='submit' value = "Submit" id = "submitButton" />
				</form>
		</div>
		);
	}
}

export default Form;