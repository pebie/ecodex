import React from 'react';
import {Link} from 'react-router';
import {Navbar, Nav, NavItem, DropdownButton, MenuItem} from 'react-bootstrap';

class Navigation extends React.Component {
  render() {
    return (
      <div>
      <Navbar brand='React-Bootstrap'>
        <Nav>
          <li><Link to='/' eventKey={1}>Home</Link></li>
          <li><Link to='/swager' eventKey={2}>Test API</Link></li>
          <DropdownButton eventKey={3} title='Create'>
            <MenuItem eventKey='1'>Options</MenuItem>
            <MenuItem eventKey='2'>Warlord traits</MenuItem>
            <MenuItem eventKey='3'>Special rules</MenuItem>
            <MenuItem eventKey='4'>Wargear</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey='5'>Datasheet</MenuItem>
          </DropdownButton>
        </Nav>
      </Navbar>
        </div>
    );
  }
}

export default Navigation;
