import React from 'react';
//stateless functional component

const Header = (props) => {
		return(
			<header className="App-header">
        <img src="https://ajenta.net/wp-content/uploads/2015/07/ajenta_white2.png" className="mk-light-logo" alt="ajenta" />
        <ul className="App-links">
          <li><a href=''>Home</a></li>
          <li><a href=''>Recordings</a></li>
          <li><a href=''>Account</a></li>
        </ul>
      </header>
		)
}

export default Header;