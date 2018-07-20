import React from 'react'
import { Dimmer, Header } from 'semantic-ui-react'

const MyDimmer = ({ active, handleClose }) => (
  <Dimmer active={active} onClick={handleClose} page>
    <Header style={{ color: 'white' }}>Welcome to my homepage!</Header>
  </Dimmer>
)

export default MyDimmer