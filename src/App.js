import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import Footer from './components/Footer'
import EmailForm from './components/EmailForm'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Skills from './components/Skills'
import MyHeader from './components/MyHeader'
import MyDimmer from './components/MyDimmer'
import MyLinks from './components/MyLinks'


class App extends Component {
  constructor() {
    super()
    this.state = {
      dimmerActive: true
    }
  }

  handleClose = () => this.setState({ dimmerActive: false })

  render() {
    return (
      <div>
        <Route exact to='/' />
        <Container style={{ marginBottom: 100 }}>
          <MyDimmer active={this.state.dimmerActive} handleClose={this.handleClose} />
          <Container text>
            <MyHeader />
            <Route exact path='/' component={Home} />
            <Route path='/skills' component={Skills} />
            <Route path='/form' render={() => <EmailForm />} />
            <MyLinks />
          </Container>
          <Footer />
        </Container>
      </div>
    )

  }
}

export default App
