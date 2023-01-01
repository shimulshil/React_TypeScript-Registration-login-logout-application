import React from 'react'
import {SyntheticEvent } from "react"
import { useNavigate} from 'react-router-dom';
import {Navbar,Container,Nav} from 'react-bootstrap';

function Header() {
  const navigate = useNavigate();

  const logout = async(e:SyntheticEvent)=>{
    e.preventDefault();
    console.log('Logout');

    // CLEAR DATA FROM STORAGE
    localStorage.clear();
    sessionStorage.clear();
    navigate("/login");
  }

  return (
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
      <Container>
        <Navbar.Brand href='/'>React_Typescript Login_Registration_logout project</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='/signup'>Sign Up</Nav.Link>
              <Nav.Link href='/login'>Login</Nav.Link>
              <Nav.Link onClick={logout}>Logout</Nav.Link>
              </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;