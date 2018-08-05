import React from 'react'
import { List, Segment, Header } from 'semantic-ui-react'

class CV extends React.Component {
  constructor(props) {
    super(props)
    this.state = { jobIndexes: [], educationIndexes: [] }
  }

  handleJobClick = (e) => {
    const index = e.target.id
    const activeIndexes = [...this.state.jobIndexes]
    const newIndexes = activeIndexes.includes(index) ? activeIndexes.filter(i => i !== index) : activeIndexes.concat(index)
    this.setState({ jobIndexes: newIndexes })
  }

  handleEducationClick = (e) => {
    const index = e.target.id
    const activeIndexes = [...this.state.educationIndexes]
    const newIndexes = activeIndexes.includes(index) ? activeIndexes.filter(i => i !== index) : activeIndexes.concat(index)
    this.setState({ educationIndexes: newIndexes })
  }

  render() {
    return (
      <div>
        <Segment color='blue' size='large'>
          <Header>Work history</Header>
          <List selection relaxed divided>
            {this.props.history.map(job => (
              <List.Item key={job.id} id={job.id} onClick={this.handleJobClick}>
                <List.Icon name='arrow alternate circle right' id={job.id} onClick={this.handleJobClick} />
                <List.Content>
                  <List.Header style={{ color: '#1d36d6' }} id={job.id} onClick={this.handleJobClick} >
                    {job.title}
                  </List.Header>
                  <List.Description style={this.state.jobIndexes.includes(job.id.toString()) ? { display: '' } : { display: 'none' } }>
                    <p>{job.description}</p>
                  </List.Description>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </Segment>

        <Segment color='black' size='large'>
          <Header>Education</Header>
          <List selection relaxed divided>
            {this.props.education.map(edu => (
              <List.Item key={edu.id} id={edu.id} onClick={this.handleEducationClick}>
                <List.Icon name='square full' color='black' id={edu.id} onClick={this.handleEducationClick} />
                <List.Content>
                  <List.Header style={{ color: '#1d36d6' }} id={edu.id} onClick={this.handleEducationClick}>{edu.title}</List.Header>
                  <List.Description style={this.state.educationIndexes.includes(edu.id.toString()) ? { display: '' } : { display: 'none' } }>
                    {edu.description}
                  </List.Description>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </Segment>
      </div>
    )
  }
}


export default CV