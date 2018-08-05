import React from 'react'
import { Segment, Divider } from 'semantic-ui-react'
import MyLinks from './MyLinks'

const Footer = () => {
  const style = {
    color: 'white',
    zIndex: 100,
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    marginTop: 0,
    padding: 0
  }
  return (

    <Segment style={style} inverted>
      <Divider horizontal inverted>
        <MyLinks />
      </Divider>
    </Segment>
  )
}

export default Footer