import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/userActions'


export const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar expand="lg" className='navbar-dark bg-primary' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>AWP Shop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to='/cart'>
                <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>                
              </LinkContainer>

              {userInfo
              ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>Sign Out</NavDropdown.Item>
                </NavDropdown>
              )
              : (
                <LinkContainer to='/login'>
                  <Nav.Link href="/login"><i className='fas fa-user'></i>Sign In</Nav.Link>
                </LinkContainer>
              )}

            </Nav>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
    </header>
  )
}
