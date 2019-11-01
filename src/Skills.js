import React from 'react';
import CSSModules from 'react-css-module';
import {List} from 'semantic-ui-react';
import  styles from './Skills.css';

class SkillBars extends React.Component{
	constructor(props){
		super(props);

	this.state = {
		styleManager: {
			one: false,
			two: false,
			three: false,
			four: false,
		}
	}
	}

	render()
	{
		return(
			      <List horizontal>
        <List.Item key={1} styleName={this.state.styleManager.one === true ? "barOn" : "bar"} onClick={() => {
            this.setState({
              ...this.state,
              styleManager: {
                one: !this.state.styleManager.one,
                two: false,
                three: false,
                four: false
              }
            })
          }}>
	
			 </List.Item>
        <List.Item key={2} styleName={this.state.styleManager.two === true ? "barOn" : "bar"} onClick={() => {
            this.setState({
              ...this.state,
              styleManager: {
                one: true,
                two: !this.state.styleManager.two,
                three: false,
                four: false
              }
            })
          }}>	
          </List.Item>
        <List.Item key={3} styleName={this.state.styleManager.three === true ? "barOn" : "bar"} onClick={() => {
            this.setState({
              ...this.state,
              styleManager: {
                one: true,
                two: true,
                three: !this.state.styleManager.three,
                four: false
              }
            })
          }}>
          </List.Item>
        <List.Item key={4} styleName={this.state.styleManager.four === true ? "barOn" : "bar"} onClick={() => {
            this.setState({
              ...this.state,
              styleManager: {
                one: true,
                two: true,
                three: true,
                four: !this.state.styleManager.four
              }
            })
          }}>
        </List.Item>
      </List>
		);
	}
}




export default CSSModules(SkillBars, styles);