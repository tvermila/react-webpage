import React from 'react'
import { FormField, FormButton, FormInput, TextArea, Form, Message, FormGroup } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'


class EmailForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

    handleSubmit = (e) => {
      e.preventDefault()
      console.log('klikkasit SUBMIT')
      const name = this.state.name
      const email = this.state.email
      const message = this.state.message

      if(!name) {
        alert('name missing')
      } else if (!email) {
        alert('email missing')
      } else if (!message) {
        alert('You forgot to write a message!')
      }
      
    }

    handleChange = (event) => {
      const changedValue = { [event.target.name]: event.target.value }
      this.setState(changedValue)
      console.log(changedValue)
    }

    render() {
      return (
        <Form success>
          <FormField required>
            <FormInput name='name' label='Name' placeholder='Full name' onChange={this.handleChange} />
          </FormField>
          <FormField required>
            <FormInput name='email' label='Email' placeholder='example@mail.com' onChange={this.handleChange} />
          </FormField>
          <FormField required>
            <TextArea name='message' placeholder='Type your message here...' onChange={this.handleChange} />
          </FormField>
          <Message success header='Form Completed' content='message sent successfully!' />
          <Message
            error
            header='Action Forbidden'
            content='You can only sign up for an account once with a given e-mail address.'
          />
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