import React, { Component } from 'react';

class Header extends Component {
    render() {
        const kaws = require('./images/kaws.png');
      return (
        <header>
        <nav id="skipTo">
					<ul>
						<li>
							<a href="#main" title="Skip to Main Content">Skip to Main Content</a>
						</li>
					</ul>
				</nav>
				
				<h1>Demo</h1>
				
				<nav>
					<ul>
						<li><a href="#" title="Home">Home</a></li>
						<li><a href="#" title="About">About</a></li>
						<li><a href="#" title="Work">Work</a></li>
						<li><a href="#" title="Contact">Contact</a></li>
					</ul>
				</nav>
				
				<div id="banner">
					<img src={kaws} alt="banner" />
				</div>
      </header>
      );
    }
  }
  
  export default Header;