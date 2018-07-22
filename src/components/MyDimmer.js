import React from 'react'
import { Dimmer, Header } from 'semantic-ui-react'

const MyDimmer = ({ active, handleClose }) => (
  <Dimmer active={active} onClick={handleClose} page>
    <Header style={{ color: 'white' }}>Welcome to my homepage!</Header>
    <Header.Subheader>You can get back to homepage by clicking the header at the top</Header.Subheader>
    <Header.Subheader>If you like my page, go ahead and send me a message by clicking the envelope icon</Header.Subheader>
  </Dimmer>
)

export default MyDimmer