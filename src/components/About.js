import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import raspberry from '../images/raspberry.png'
import couchdb from '../images/couchdb.png'
import react from '../images/react.png'
import nodejs from '../images/nodejs2.png'
import apache from '../images/apache.png'
import express from '../images/express.png'

const text = ({ lang }) => {
  if(lang === 'en') {
    return (
      <p>
        This site has been made with ReactJS. I also used React Router to move between sites and for styling Semantic UI React CSS framework.
        I also have NodeJS + Express as a backend server forwarding contact request to my email and handling database requests to my CouchDB database.
        I would rather have had MongoDB database, but since all this is running on Raspberry Pi 3 and Raspbian Stretch, it is not supported by
        the OS and it is also a bit demanding on the hardware. And finally, I have Apache as a web server. It also serves my PHP site. It was
        a small project for the PHP course at school. If you are interested, it can be found&nbsp;<a href='http://php.tvermila.fi'>here</a>.
      </p>
    )
  }
  return (
    <p>
      Tämä sivusto on tehty ReactJS:llä. Käytin myös React Routeria sivustolla liikkumiseen ja Semantic UI tyylikirjastoa. Backend-palvelimena toimii
      Expressillä höystetty NodeJS, joka hoitaa sähköpostiliikenteen sekä tietokantakyselyt CouchDB-tietokantaan. Olisin mieluummin käyttänyt MongoDB:tä
      tietokantana, mutta se oli vähän turhan raskas Raspberry Pi 3 raudalle, missä pyörii Rasbian Stretch käyttöjärjestelmä. Tukeakaan myöhemmille
      versioille ei MongoDB:stä enää ollut saatavilla. Webbipalvelimena toimii Apache, jota käytän myös PHP sivustolleni. Se oli vain pieni harjoitustyö
      koulussa, eikä sillä sivustolla käytetty mitään tyylikirjastoa, mikä näkyy lopputuloksessa &#9786;. Jos kuitenkin kiinnostaa, niin sivusto löytyy
      &nbsp;<a href='http://php.tvermila.fi'>täältä</a>.
    </p>
  )
}

const About = ({ lang }) => {
  return (
    <Segment size='huge' style={{ backgroundColor: '#472b39', color: 'white', paddingBottom: 100 }} padded raised>
      {text({ lang })}
      <div>
        <Image.Group size='tiny' >
          <Image src={react} href='https://reactjs.org/' target='_blank' rel="noopener noreferrer" />
          <Image src={nodejs} href='https://nodejs.org/en/' target='_blank' rel="noopener noreferrer" />
          <Image src={express} href='https://expressjs.com/' target='_blank' rel="noopener noreferrer" />
          <Image src={raspberry} href='https://www.raspberrypi.org/' target='_blank' rel="noopener noreferrer" />
          <Image src={couchdb} href='http://couchdb.apache.org/' target='_blank' rel="noopener noreferrer" />
          <Image src={apache} href='https://httpd.apache.org/' target='_blank' rel="noopener noreferrer" />
        </Image.Group>
      </div>
    </Segment>
  )
}

export default About