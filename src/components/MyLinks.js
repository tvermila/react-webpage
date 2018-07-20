import React from 'react'
import { Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const MyLinks = () => (
  <div style={{ marginTop: 20 }}>
    <Icon link name='linkedin square' size='huge' onClick={() => window.open('https://www.linkedin.com/in/tomas-vermila/')} />
    <NavLink to='/form'>
      <Icon name='envelope' size='huge' />
    </NavLink>
    <Icon link name='git square' size='huge' onClick={() => window.open('https://github.com/tvermila')} />
  </div>
)

export default MyLinks