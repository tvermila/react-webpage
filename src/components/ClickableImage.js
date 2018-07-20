import React from 'react'
import { Image } from 'semantic-ui-react'

class ClickableImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: 'medium',
      hover: false
    }
  }

    handleClick = () => {
      this.state.size === 'medium' ? this.setState({ size: 'large' }) : this.setState({ size: 'medium' })
    }

    toggleHover = () => {
      const size =  this.state.size === 'medium' ? 'large' : 'medium'
      this.setState({ hover: !this.state.hover, size })
    }

    render() {
      return (
        <Image
          src={this.props.src}
          circular size={this.state.size}
          onClick={this.handleClick}
          /*     onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}*/
        />
      )
    }
}

export default ClickableImage