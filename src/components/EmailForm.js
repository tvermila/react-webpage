import React from 'react'
import { TextArea, Form, Message } from 'semantic-ui-react'
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
      successfullySent: false
    }
  }

    handleSubmit = async (e) => {
      e.preventDefault()
      const name = this.state.name
      const email = this.state.email
      const message = this.state.message

      if(!name) {
        await this.setState({ error: true, notification: this.state.notification.concat('name is required'), nameError: true })
      }
      if (!email) {
        await this.setState({ error: true, notification: this.state.notification.concat('email is required'), emailError: true })
      } else if (!this.validateEmail(email)) {
        await this.setState({ error: true, notification: this.state.notification.concat('invalid email address'), emailError: true })
      }
      if (!message) {
        await this.setState({ error: true, notification: this.state.notification.concat('message is required'), messageError: true })
      }

      const mailData = { name, email, message }

      if(!this.state.error){
        const response = await mailService.send(mailData)
        console.log('mailservicen response', response)
        if(response.status !== 200) {
          console.log('Response status ei 200')
          await this.setState({ error: true })
        }
      }

      if (!this.state.error) {
        await this.setState({
          notification: this.state.notification.concat('Sent successfully!'),
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
      if (this.state.successfullySent) {
        return <Redirect to='/' />
      }
      return (
        <Form success={this.state.success} error={this.state.error}>
          <Form.Field required>
            <Form.Input
              name='name'
              label='Name'
              placeholder='Full name'
              onChange={this.handleChange}
              value={this.state.name}
              error={this.state.nameError}
            />
          </Form.Field>
          <Form.Field required>
            <Form.Input
              name='email'
              label='Email'
              placeholder='example@mail.com'
              onChange={this.handleChange}
              value={this.state.email}
              error={this.state.emailError}
            />
          </Form.Field>
          <Form.Field required>
            <Form.Input error={this.state.messageError}>
              <TextArea
                name='message'
                placeholder='Type your message here...'
                onChange={this.handleChange}
                value={this.state.message}
              />
            </Form.Input>
          </Form.Field>
          <Message success header='Form Completed' content={this.state.notification.join()} />
          <Message error header='Error' content={this.state.notification.join(', ')} />
          <Form.Group>
            <Form.Button type='submit' onClick={this.handleSubmit}>Submit</Form.Button>
            <NavLink to='/'>
              <Form.Button>Cancel</Form.Button>
            </NavLink>
          </Form.Group>
        </Form>
      )
    }
}

export default EmailForm