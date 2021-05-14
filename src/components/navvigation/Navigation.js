import React ,{useState} from 'react';
import './Navigation.css'
import {UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem ,Nav,Collapse, Navbar,NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import icon from '../../images/icon.png'

const Navigation=(props)=> {

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
      <div className="container">
        <Navbar color="faded" light expand >   
         {/* ^ here nav collopase and expand */}
          <NavbarBrand href="/" > <img src={icon} style={ {marginTop:-12,height:"38px"}} /> Skill</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={collapsed} navbar className="nav-collapse">
            <Nav navbar>
              <NavItem >
                <NavLink href="/components/" active >HOME</NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink href="/components/">ABOUT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">SERVICES</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">COURSES</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                PAGES
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Gallery
                </DropdownItem>
                <DropdownItem>
                  Login
                </DropdownItem>
                <DropdownItem>
                  Signup
                </DropdownItem>
                <DropdownItem>
                  Landing Single
                </DropdownItem>
                {/* <DropdownItem divider /> */}
            
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                BLOG
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Blog                </DropdownItem>
                <DropdownItem>
                  Single Post
                </DropdownItem>
                {/* <DropdownItem divider /> */}
            
              </DropdownMenu>
            </UncontrolledDropdown>
            
              <NavItem>
                <NavLink href="/components/">CONTACT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/" className="btn-primary">APPLYNOW</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

export default Navigation
