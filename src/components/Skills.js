import React from 'react'
import { Segment, Grid, Divider, Message } from 'semantic-ui-react'

const Skills = () =>  {
  const container = { width: '100%', backgroundColor: '#ddd' }
  const skills = { textAlign: 'right', padding: 5 }
  const html = { width: '75%', backgroundColor: 'green' }
  const java = { width: '65%', backgroundColor: 'blue' }
  const js = { width: '60%', backgroundColor: 'turquoise' }
  const php = { width: '40%', backgroundColor: 'pink', color: 'black' }
  const css = { width: '35%', backgroundColor: 'yellow', color: 'black' }
  const others = { width: '30%', backgroundColor: 'purple' }
  const ruby = { width: '25%', backgroundColor: 'black' }
  return (
    <Segment size='large' raised>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column computer={10} mobile={16}>
            <div style={container}>
              <div style={{ ...skills, ...html }}>HTML 75%</div>
            </div>
            <Divider />
            <div style={container}>
              <div style={{ ...skills, ...java }}>Java 65%</div>
            </div>
            <Divider />
            <div style={container}>
              <div style={{ ...skills, ...js }}>JavaScript 60%</div>
            </div>
            <Divider />
            <div style={container}>
              <div style={{ ...skills, ...php }}>PHP 40%</div>
            </div>
            <Divider />
            <div style={container}>
              <div style={{ ...skills, ...css }}>CSS 35%</div>
            </div>
            <Divider />
            <div style={container}>
              <div style={{ ...skills, ...others }}>C++, C#, C, Python 30%</div>
            </div>
            <Divider />
            <div style={container}>
              <div style={{ ...skills, ...ruby }}>Ruby 25%</div>
            </div>
            <Divider />
          </Grid.Column>

          <Grid.Column computer={6} mobile={16}>
            <Message>
              <Message.Header>Programming</Message.Header>
              <p style={{ color: 'black' }}>
                  I have been programming mostly with Java during my studies, but also with PHP,
                  C, C++ and Python. Lately I have been studying latest JavaScript Frameworks,
                  espescially React, which I&#39;ve used to build this website.
              </p>
            </Message>
          </Grid.Column>

        </Grid.Row>
      </Grid>
    </Segment>
  /*<Segment size='large' style={{ backgroundColor: '#472b39', color: 'white', paddingBottom: 100 }} padded raised>
    <Card.Group centered>
      <Card>
        <Card.Content>
          <Card.Header>Programming</Card.Header>
          <Card.Meta>At the end of my studies</Card.Meta>
          <Card.Description>
            I have been programming mostly with Java during my studies, but also with PHP,
            C, C++ and Python. Lately I have been studying latest JavaScript Frameworks,
            espescially React, which I&#39;ve used to build this website.
          </Card.Description>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Card.Header>Infrastructure</Card.Header>
          <Card.Meta>Working as a System Specialist at the moment</Card.Meta>
          <Card.Description>
            I have a long 14 year experiment in ICT infrastructure. I have done workstation,
            server pre-installations including rack installations. I also have experience in
            Backup Exec and Veeam backup environments, VMware vCenter and N-Able N-Central
            monitoring environment.
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  </Segment>*/
  )
}

export default Skills