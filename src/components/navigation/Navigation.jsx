import 'bootstrap-sass';
import './navigation.scss';

import React from 'react';
import {Link} from 'react-router';
import {Navbar, Nav, DropdownButton} from 'react-bootstrap';

class Navigation extends React.Component {
  render() {
    return (
      <div>
      <Navbar brand='EcOd3x'>
        <Nav>
          <li><Link to='/'>Home</Link></li>
          <DropdownButton title='Create'>
            <li eventKey='5'><Link to='/datasheet'>Datasheet</Link></li>
          </DropdownButton>
        </Nav>
      </Navbar>
        </div>
    );
  }
}

export default Navigation;
