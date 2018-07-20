import React from 'react'
import { Segment, Divider } from 'semantic-ui-react'

const Footer = () => {
  const style = {
    color: 'white',
    zIndex: 100,
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    marginTop: 500
  }
  return (

    <Segment style={style} inverted>
      <Divider horizontal inverted>
        Footer
      </Divider>
    </Segment>
  )
}

export default Footer