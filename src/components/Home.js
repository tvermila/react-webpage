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
      <p>
                This page has been made with ReactJS.
      </p>
      <Image src={me} size='tiny' floated='right' />
      <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at.
                Qui te porro electram, ea dico facete utroque quo.
                Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.
                Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne,
                his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.
      </p>
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