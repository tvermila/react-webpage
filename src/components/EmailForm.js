import React from 'react'
import { TextArea, Form, Message, Loader, Dimmer, Segment, Container } from 'semantic-ui-react'
import { NavLink, Redirect } from 'react-router-dom'
import mailService from '../services/mailService'


class EmailForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      nameError: false,
      email: '',
      emailError: false,
      message: '',
      messageError: false,
      error: false,
      success: false,
      notification: [],
      successfullySent: false,
      loaderActive: false
    }
  }

    handleSubmit = async (e) => {
      e.preventDefault()
      const lang = this.props.lang
      const { name, email, message } = this.state

      if(!name) {
        await this.setState({
          error: true,
          notification: this.state.notification.concat(lang === 'en' ? 'name is required' : 'nimi on pakollinen'),
          nameError: true
        })
      }
      if (!email) {
        await this.setState({
          error: true,
          notification: this.state.notification.concat(lang === 'en' ? 'email is required' : 'sähköposti on pakollinen'),
          emailError: true
        })
      } else if (!this.validateEmail(email)) {
        await this.setState({
          error: true,
          notification: this.state.notification.concat(lang === 'en' ? 'invalid email address' : 'sähköposti ei kelpaa'),
          emailError: true
        })
      }
      if (!message) {
        await this.setState({
          error: true,
          notification: this.state.notification.concat(lang ==='en' ? 'message is required' : 'viesti on pakollinen'),
          messageError: true
        })
      }

      const mailData = { name, email, message }

      if(!this.state.error){
        this.setState({ loaderActive: true })
        const response = await mailService.send(mailData)
        this.setState({ loaderActive: false })
        if(response.status !== 200) {
          this.setState({ loaderActive: false })
          await this.setState({ error: true })
        }
      }

      if (!this.state.error) {
        await this.setState({
          notification: this.state.notification.concat(lang === 'en' ? 'Sent successfully!' : 'Viestin lähetys onnistui!'),
          name: '',
          email: '',
          message: '',
          success: true
        })
        setTimeout(() => this.setState({ successfullySent: true }), 2000)
        return null
      }

      setTimeout(() => this.setState({
        error: false,
        success: false,
        notification: []
      }), 5000)

    }

    handleChange = async (event) => {
      const changedValue = { [event.target.name]: event.target.value }
      await this.setState(changedValue)

      if (this.state.nameError && this.state.name) {
        this.setState({ nameError: false })
      } else if (this.state.emailError && this.state.email) {
        this.setState({ emailError: false })
      } else if (this.state.messageError && this.state.message) {
        this.setState({ messageError: false })
      }

    }

    validateEmail = (email) => {
      const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g
      return re.test(email)
    }

    render() {
      const { lang } = this.props
      if (this.state.successfullySent) {
        return <Redirect to='/' />
      }
      return (
        <Container text >
          <Segment padded>
            <Form success={this.state.success} error={this.state.error}>
              <Form.Field required>
                <Form.Input
                  name='name'
                  label={lang === 'en' ? 'Name' : 'Nimi'}
                  placeholder={lang === 'en' ? 'Full name' : 'Koko nimi'}
                  onChange={this.handleChange}
                  value={this.state.name}
                  error={this.state.nameError}
                />
              </Form.Field>
              <Form.Field required>
                <Form.Input
                  name='email'
                  label={lang === 'en' ? 'Email' : 'Sähköposti'}
                  placeholder={lang === 'en' ? 'example@mail.com' : 'esimerkki@mail.fi'}
                  onChange={this.handleChange}
                  value={this.state.email}
                  error={this.state.emailError}
                />
              </Form.Field>
              <Form.Field required>
                <Form.Input error={this.state.messageError}>
                  <TextArea
                    name='message'
                    placeholder={lang === 'en' ? 'Type your message here...' : 'Kirjoita viestisi tähän...'}
                    onChange={this.handleChange}
                    value={this.state.message}
                  />
                </Form.Input>
              </Form.Field>
              <Dimmer active={this.state.loaderActive}>
                <Loader size='large' active={this.state.loaderActive} />
              </Dimmer>
              <Message success header={lang === 'en' ? 'Sent successfully' : 'Lähetys onnistui'}
                content={this.state.notification.join()} />
              <Message error header={lang === 'en' ? 'Error' : 'Virhe'}
                content={this.state.notification.join(', ')} />
              <Form.Group>
                <Form.Button primary type='submit' onClick={this.handleSubmit}>{lang === 'en' ? 'Submit' : 'Lähetä'}</Form.Button>
                <NavLink to='/'>
                  <Form.Button name='home' onClick={this.props.handleMenuClick}>{lang === 'en' ? 'Cancel' : 'Peruuta'}</Form.Button>
                </NavLink>
              </Form.Group>
            </Form>
          </Segment>
        </Container>
      )
    }
}

export default EmailForm