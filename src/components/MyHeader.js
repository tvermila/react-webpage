import React from 'react'
import { Segment, Divider, Header, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const MyHeader = ({ activeItem, handleMenuClick }) => (
  <Segment inverted style={{ marginBottom: 20 }}>
    <Divider horizontal inverted>
      <Header size='huge' style={{ color: 'white' }}>My homepage</Header>
    </Divider>
    <Menu stackable inverted fluid widths={4} style={{ fontSize: '120%' }}>
      <Menu.Item as={NavLink} exact to='/' name='home' active={activeItem === 'home'} onClick={handleMenuClick}>home</Menu.Item>
      <Menu.Item as={NavLink} to='/skills' name='skills' active={activeItem === 'skills'} onClick={handleMenuClick}>skills</Menu.Item>
      <Menu.Item as={NavLink} to='/cv' name='cv' active={activeItem === 'cv'} onClick={handleMenuClick}>CV</Menu.Item>
      <Menu.Item as={NavLink} to='/about' name='about' active={activeItem === 'about'} onClick={handleMenuClick}>about</Menu.Item>
    </Menu>
  </Segment>
)

export default MyHeader