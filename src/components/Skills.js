import React from 'react'
import Programming from './Programming'
import Infrastructure from './Infrastructure'


class Skills extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      anim1: 'fly right',
      anim2: 'scale',
      anim3: 'fly left'
    }
  }

  componentDidMount = () => this.setState({ visible: true })

  clearAnim = () => {
    if(this.props.counter >= 2)
      this.setState({ anim1: null, anim2: null, anim3: null })
  }

  render() {
    const { visible, anim1, anim2, anim3 } = this.state
    return (
      <div>
        <Programming visible={visible} anim1={anim1} anim2={anim2} clearAnim={this.clearAnim} />
        <Infrastructure visible={visible} anim3={anim3} anim2={anim2} clearAnim={this.clearAnim} />
      </div>
    )
  }
}

export default Skills