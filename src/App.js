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
import dbService from './services/dbService'
import About from './components/About'

class App extends Component {
  constructor() {
    super()
    this.state = {
      dimmerActive: true,
      activeItem: 'home',
      showWorkDetails: [],
      history: [],
      education: []
    }
  }

  componentDidMount = async () => {
    console.log('App.js componentDidMount()')
    const history = await dbService.getHistory()
    const education = await dbService.getEducation()
    this.setState({ history, education })
  }

  handleMenuClick = ({ name }) => this.setState({ activeItem: name })

  handleWorkClick = ({ name }) => {
    const copy = [...this.state.showWorkDetails]
    if(copy.includes(name)) {
      const updatedArr = copy.filter(el => el !== name)
      this.setState({ showWorkDetails: updatedArr })
    }else {
      this.setState({ showWorkDetails: copy.concat(name) })
    }
  }

  handleClose = () => {
    this.setState({ dimmerActive: false, showPopup: true })
    setTimeout(() => this.setState({ showPopup: false }), 2500)
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
            <Route path='/skills' component={Skills} />
            <Route path='/form' component={EmailForm} />
            <Route path='/cv' component={() => <CV history={this.state.history} education={this.state.education} />} />
            <Route path='/about' component={About} />
          </Container>
          <Footer />
        </Container>
      </div>
    )
  }
}

export default App
