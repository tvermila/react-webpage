import React from 'react'
import { Segment, Divider, Header, Checkbox } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const MyHeader = () => (
  <NavLink exact to='/'>
    <Segment inverted style={{ marginBottom: 20 }}>
      <Divider horizontal inverted>
        <Header size='huge' style={{ color: 'white' }}>My homepage</Header>
      </Divider>
    </Segment>
  </NavLink>

)

export default MyHeader