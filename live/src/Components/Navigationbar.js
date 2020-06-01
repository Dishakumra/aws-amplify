
import '../App.css';

import book1 from '../book1.png';
import book2 from '../book2.jpeg';
import book3 from '../book3.png';
import book4 from '../ll.jpg';
import book from '../book.jpeg';
import logo from '../logg.jpeg';
import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Example extends React.Component {
constructor(props) {
       super(props);

       this.toggleNav = this.toggleNav.bind(this);
       this.state = {
         isNavOpen: false
       };
     }

     toggleNav() {
       this.setState({
         isNavOpen: !this.state.isNavOpen
       });
     }
   render() {
  return (
    <div >
    <Navbar light expand="md">
               <div>

                   <NavbarToggler onClick={this.toggleNav} />
                   <NavbarBrand className="mr-auto" href="/"><img src={logo} height="90" width="80"  /></NavbarBrand>
                   <Collapse isOpen={this.state.isNavOpen} navbar>
                       <Nav tabs>
                       <NavItem>
                           <NavLink className="nav-link"  to='/home'><img src={book1} className="iconn"/></NavLink>
                       </NavItem>
                       <NavItem>
                           <NavLink className="nav-link" to='/aboutus'><img src={book2} className="iconn"/> </NavLink>
                       </NavItem>
                       <NavItem>
                           <NavLink className="nav-link"  to='/menu'><img src={book3} className="iconn"/></NavLink>
                       </NavItem>
                       <NavItem>
                           <NavLink to='/contactus'><img src={book4} className="iconn"/> </NavLink>
                       </NavItem>
                       </Nav>
                   </Collapse>
               </div>
           </Navbar>
    </div>
  );
}
}

export default Example;
