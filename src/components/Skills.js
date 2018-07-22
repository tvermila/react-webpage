import React from 'react'
import { Card } from 'semantic-ui-react'

const Skills = () => (
  <Card.Group>
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
)

export default Skills