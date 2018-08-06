import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import Footer from './components/Footer'
import EmailForm from './components/EmailForm'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Skills from './components/Skills'
import MyHeader from './components/MyHeader'
import MyDimmer from './components/MyDimmer'
import CV from './components/CV'
import About from './components/About'

class App extends Component {
  constructor() {
    super()
    this.state = {
      dimmerActive: true,
      activeItem: '',
      showWorkDetails: [],
      counter: 0
    }
  }

  handleMenuClick = (e, { name }) => {
    if(name === 'skills')
      this.setState({ activeItem: name, counter: this.state.counter + 1 })
    else
      this.setState({ activeItem: name })
  }

  handleClose = () => {
    this.setState({ dimmerActive: false })
  }

  render() {
    return (
      <div>
        <Route exact to='/' />
        <Container style={{ marginBottom: 150 }}>
          <MyDimmer active={this.state.dimmerActive} handleClose={this.handleClose} />
          <Container>
            <MyHeader activeItem={this.state.activeItem} handleMenuClick={this.handleMenuClick} />
            <Route exact path='/' component={Home} />
            <Route path='/skills' render={() => <Skills counter={this.state.counter} />} />
            <Route path='/form' component={EmailForm} />
            <Route path='/cv' component={CV} />
            <Route path='/about' component={About} />
          </Container>
          <Footer />
        </Container>
      </div>
    )
  }
}

export default App
