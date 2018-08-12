import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import Footer from './components/Footer'
import EmailForm from './components/EmailForm'
import { Route, Switch } from 'react-router-dom'
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
      dimmerActive: false,
      activeItem: '',
      showWorkDetails: [],
      skills: 0,
      home: 0,
      lang: 'fi'
    }
  }

  handleLangChange = () => this.setState({ lang: this.state.lang === 'fi' ? 'en' : 'fi' })

  handleMenuClick = (e, { name }) => {
    if(name === 'skills' || name === 'home')
      this.setState({ activeItem: name, [name]: this.state[name] + 1 })
    else
      this.setState({ activeItem: name })
  }

  handleClose = () => this.setState({ dimmerActive: false })

  render() {
    const { home, skills, lang } = this.state
    return (
      <div>
        <Route exact to='/' />
        <Container style={{ marginBottom: 150 }}>
          <MyDimmer active={this.state.dimmerActive} handleClose={this.handleClose} />
          <Container>
            <MyHeader
              activeItem={this.state.activeItem}
              handleMenuClick={this.handleMenuClick}
              handleLangChange={this.handleLangChange}
              lang={lang}
            />
            <Switch>
              <Route exact path='/' render={() => <Home counter={home} lang={lang} />} />
              <Route path='/skills' render={() => <Skills counter={skills} lang={lang} />} />
              <Route path='/mail' render={() => <EmailForm handleMenuClick={this.handleMenuClick} lang={lang} />} />
              <Route path='/cv' render={() => <CV lang={lang} />}/>
              <Route path='/about' render={() => <About lang={lang} />} />
              <Route component={App} />
            </Switch>
          </Container>
          <Footer />
        </Container>
      </div>
    )
  }
}

export default App
