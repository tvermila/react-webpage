import React from 'react'
import { Segment, Divider, Header, Menu, Checkbox, Flag } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const MyHeader = ({ activeItem, handleMenuClick, handleLangChange, lang }) => (
  <Segment inverted style={{ marginBottom: 20 }}>
    <div>
      <Flag name='fi' />fi&nbsp;
      <Checkbox toggle onChange={handleLangChange} />
      &nbsp;en&nbsp;<Flag name='gb' />
    </div>
    <Divider horizontal inverted>
      <Header size='huge' style={{ color: 'white' }}>{lang === 'en' ? 'My homepage' : 'Kotisivuni'}</Header>
    </Divider>
    <Menu stackable inverted fluid widths={4} style={{ fontSize: '120%' }}>
      <Menu.Item as={NavLink} exact to='/' name='home' active={activeItem === 'home'} onClick={handleMenuClick}>{lang === 'en' ? 'home' : 'etusivu'}</Menu.Item>
      <Menu.Item as={NavLink} to='/skills' name='skills' active={activeItem === 'skills'} onClick={handleMenuClick}>{lang === 'en' ? 'skills' : 'taidot'}</Menu.Item>
      <Menu.Item as={NavLink} to='/cv' name='cv' active={activeItem === 'cv'} onClick={handleMenuClick}>CV</Menu.Item>
      <Menu.Item as={NavLink} to='/about' name='about' active={activeItem === 'about'} onClick={handleMenuClick}>{lang === 'en' ? 'about site' : 'sivustosta'}</Menu.Item>
    </Menu>
  </Segment>
)

export default MyHeader