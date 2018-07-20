import React from 'react'
import { FormField, FormButton, FormInput, TextArea, Form, Message, FormGroup } from 'semantic-ui-react'
import { NavLink, Redirect, Route } from 'react-router-dom'


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
        await this.setState({ error: true, notification: this.state.notification.concat('email is required'), emailError: true})
      } else if (!this.validateEmail(email)) {
        await this.setState({ error: true, notification: this.state.notification.concat('invalid email address'), emailError: true })
      }
      if (!message) {
        await this.setState({ error: true, notification: this.state.notification.concat('message is required'), messageError: true})
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
      const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
      return re.test(email)
  }

    render() {
      if (this.state.successfullySent) { 
        return <Redirect to='/' />
      }
      return (
        <Form success={this.state.success} error={this.state.error}>
          <FormField required>
            <FormInput
              name='name'
              label='Name'
              placeholder='Full name'
              onChange={this.handleChange}
              value={this.state.name}
              error={this.state.nameError}
              />
          </FormField>
          <FormField required>
            <FormInput 
              name='email' 
              label='Email' 
              placeholder='example@mail.com' 
              onChange={this.handleChange} 
              value={this.state.email} 
              error={this.state.emailError}
              />
          </FormField>
          <FormField required>
          <FormInput error={this.state.messageError}>
            <TextArea 
              name='message' 
              placeholder='Type your message here...' 
              onChange={this.handleChange} 
              value={this.state.message}
              />
            </FormInput>
          </FormField>
          <Message success header='Form Completed' content={this.state.notification.join()} />
          <Message error header='Error' content={this.state.notification.join(', ')} />
          <FormGroup>
            <FormButton type='submit' onClick={this.handleSubmit}>Submit</FormButton>
            <NavLink to='/'>
              <FormButton>Cancel</FormButton>
            </NavLink>
          </FormGroup>
        </Form>
      )
    }
}

export default EmailForm