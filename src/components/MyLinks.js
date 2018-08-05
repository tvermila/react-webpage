import React from 'react'
import { Icon, Popup } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const MyLinks = () => (
  <div>
    <Popup trigger={
      <Icon link name='linkedin square' size='huge' onClick={() => window.open('https://www.linkedin.com/in/tomas-vermila/')} />
    } content="Click to go to my linkedin profile" />
    <NavLink to='/form'>
      <Popup trigger={
        <Icon name='envelope' size='huge' />
      } content='Click to contact me' />
    </NavLink>
    <Popup trigger={
      <Icon link name='git square' size='huge' onClick={() => window.open('https://github.com/tvermila')} />
    } content='See my GitHub profile' />
  </div>
)

export default MyLinks