import React from 'react';
import './Navigation.css';

class Navigation extends React.Component {
  render(){
      const links = ['Home', 'About', 'Projects', 'Skills', 'Contacts'];
      const navLinks = links.map(link => {
        return(
          <li><a href= {'#' + link}> {link} </a></li>
        )
      });
      return (
        <nav>
          <h2 className = "logo"> hinduBale </h2>
            <ul>
              {navLinks}
            </ul>
        </nav>
    );
  }
}

export default Navigation;
