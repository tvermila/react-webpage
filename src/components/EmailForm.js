import React from 'react'
import { FormField, FormButton, FormInput, TextArea, Form, Message, FormGroup } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'


class EmailForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

    handleSubmit = (e) => {
      e.preventDefault()
      console.log('klikkasit SUBMIT')
    }

    render() {
      return (
        <Form success>
          <FormField required>
            <FormInput label='Name' placeholder='Full name' />
          </FormField>
          <FormField required>
            <FormInput label='Email' placeholder='example@mail.com' />
          </FormField>
          <FormField>
            <TextArea placeholder='Type your message here...' />
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