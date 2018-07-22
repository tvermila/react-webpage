import React from 'react'
import { Segment, Grid, GridColumn, Image } from 'semantic-ui-react'
import skills from '../images/skills.png'
import workHistory from '../images/workHistory.png'
import ClickableImage from './ClickableImage'
import me from '../images/me.jpg'
import { NavLink } from 'react-router-dom'

const Home = () => (
  <div>
    <Segment style={{ backgroundColor: '#472b39', color: 'white' }} padded raised>
      <Grid columns={2}>
        <Grid.Column>
          <p>
              This page has been made with ReactJS.
          </p>
          <p>
          The site is still in progress...
          </p>
        </Grid.Column>
        <Grid.Column>
          <Image src={me} size='tiny' floated='right'/>
        </Grid.Column>
      </Grid>
    </Segment>
    <Grid>
      <GridColumn mobile={8} computer={8}>
        <NavLink to='/skills'>
          <ClickableImage src={skills} />
        </NavLink>
        <br />
        <NavLink to='/history'>
          <ClickableImage src={workHistory} />
        </NavLink>
      </GridColumn>
      <GridColumn mobile={8} computer={8}>
        <NavLink to='/skills'>
          <ClickableImage src={skills} />
        </NavLink>
        <br />
        <NavLink to='/history'>
          <ClickableImage src={workHistory} />
        </NavLink>
      </GridColumn>
    </Grid>
  </div>
)

export default Home