import React from 'react';
import {Link} from 'react-router';
import {Nav, NavItem} from 'react-bootstrap';

class Navigation extends React.Component {
  handleSelect(selectedKey) {
    console.log('selected ' + selectedKey);
  }

  render() {
    return (
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/swager'>Swager</Link></li>
      </ul>


    );
  }
}

export default Navigation;
