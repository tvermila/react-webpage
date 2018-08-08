import React from 'react'
import { Segment, Image, Transition } from 'semantic-ui-react'
import me from '../images/me.jpg'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: false, animation: 'zoom', duration: 2000  }
  }

  componentDidMount = () => this.setState({ visible: true })

  clearAnim = () => {
    if(this.props.counter >= 1)
      this.setState({ animation: null, duration: 0 })
  }

  render() {
    const { visible, duration, animation } = this.state
    return (
      <div>
        <Segment size='large' style={{ backgroundColor: '#472b39', color: 'white', paddingBottom: 100 }} padded raised>
          <div>
            <Transition onStart={this.clearAnim} visible={visible} animation={animation} duration={duration}>
              <Image src={me} size='small' floated='right' />
            </Transition>
            <p>
              Hello, and welcome to my site! I am a 37-year-old guy studying software development at Haaga-Helia
              University of Applied Sciences. I am already at the end of my studies and looking for job opportunities
              related to SW development. I have been in the IT industry for 14 years already and am currently working
              at Atea. You can find more info about me on this site. If you like the site or have interest in hiring
              me, please click the envelope at the bottom to contact me.
            </p>
            <p>
                The site is still in progress... More content to come in the near future.
            </p>
          </div>
        </Segment>
      </div>
    )
  }
}

export default Home