import React from 'react'
import { Segment } from 'semantic-ui-react'

const About = () => {
  return (
    <Segment size='large' style={{ backgroundColor: '#472b39', color: 'white', paddingBottom: 100 }} padded raised>
      <p>
          This site has been made with ReactJS. I also used React Router to move between sites and for styling Semantic UI React CSS framework.
          I also have NodeJS + Express as a backend server forwarding contact request to my email and handling database requests to my CouchDB database.
          I would rather have had MongoDB database, but since all this is running on Raspberry Pi 3 and Raspbian Stretch, it is not supported by
          the OS and it is also a bit demanding for the hardware.
      </p>
      <p>
          The site is still in progress... More content to come in the near future.
      </p>
    </Segment>
  )
}

export default About