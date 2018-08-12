import React from 'react'
import { Segment, Grid, Divider, Message, Transition } from 'semantic-ui-react'

const Infrastructure = ({ visible, anim3, anim2, clearAnim, lang }) => {

  const container = { width: '100%', backgroundColor: 'gray' }
  const skills = { textAlign: 'right', padding: 5 }
  const hw = { width: '80%', backgroundColor: 'green', marginTop: 10 }
  const wsrv = { width: '70%', backgroundColor: 'blue' }
  const nc = { width: '55%', backgroundColor: 'turquoise', color: 'black' }
  const sccm = { width: '50%', backgroundColor: 'pink', color: 'black' }
  const backup = { width: '40%', backgroundColor: 'yellow', color: 'black' }
  const img = { width: '75%', backgroundColor: 'purple' }
  const linux = { width: '25%', backgroundColor: 'black' }
  return (
    <Segment size='large' raised style={{ backgroundColor: '#0d2347' }}>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column computer={6} mobile={16}>
            <Transition visible={visible} animation={anim2} duration={2000}>
              <Message style={{ marginTop: 10 }}>
                <Message.Header>{lang === 'en' ? 'IT Infrastructure' : 'IT-infra'}</Message.Header>
                {lang === 'en' ?
                  <p style={{ color: 'black' }}>
                    I was 11 years in pre-installation. First 3 years I worked mostly with workstations and after that my main focus was
                    in server pre-installation. It included software installation, OS imaging, hardware and rack installations.
                    So I am pretty familiar with the hardware. Operating systems were mostly Windows Servers but there were also some
                    RedHat Linux pre-installations. For the past 2,5 years I have been working in Operation Center. It includes system
                    monitoring and administration. I have gained knowledge in virtualization (mostly VMware based), backup solutions like
                    Symantec Backup Exec and Veeam Backup & Replication.
                  </p>
                  :
                  <p>
                    Olin 11 vuotta esiasennuksessa. Ensimmäiset kolme vuotta tein enimmäkseen työasema-asennuksia, jonka jälkeen seuraavat
                    kahdeksan vuotta pääsääntöisesti palvelimien esiasennuksia. Työtehtävät käsittivät ohjelmistojen asennuksia, käyttöjärjestelmien
                    imagejen tekemistä, rauta-asennuksia ja palvelimien räkkiasennuksia. Tästä syystä työasemien ja palvelimien rautapuoli on melko tuttua.
                    Suurin osa asennetuista käyttöjärjestelmistä olivat Windows Servereitä, mutta jonkin verran myös RedHat Linux -asennuksia. Viimeiset 2,5
                    vuotta olen työskennellyt Operation Centerissä. Työt koostuvat pääosin järjestelmien valvonnasta ja ylläpidosta. Päivittäin tulee
                    myös oltua tekemisissä virtuaalialustojen kanssa (enimmäkseen VMware-pohjaisia) sekä varmistusympäristöjen kanssa, kuten Symantec
                    Backup Exec ja Veeam Backup & Replication.
                  </p>
                }
              </Message>
            </Transition>
          </Grid.Column>
          <Grid.Column computer={10} mobile={16}>
            <Transition onStart={clearAnim} visible={visible} animation={anim3} duration={1000}>
              <div style={container}>
                <div style={{ ...skills, ...hw }}>Hardware 80%</div>
              </div>
            </Transition>
            <Divider />
            <Transition visible={visible} animation={anim3} duration={1500}>
              <div style={container}>
                <div style={{ ...skills, ...img }}>ImageX, Symantec Ghost 75%</div>
              </div>
            </Transition>
            <Divider />
            <Transition visible={visible} animation={anim3} duration={2000}>
              <div style={container}>
                <div style={{ ...skills, ...wsrv }}>Windows Server 2003-2016 70%</div>
              </div>
            </Transition>
            <Divider />
            <Transition visible={visible} animation={anim3} duration={2500}>
              <div style={container}>
                <div style={{ ...skills, ...nc }}>Solarwinds N-Central 55%</div>
              </div>
            </Transition>
            <Divider />
            <Transition visible={visible} animation={anim3} duration={3000}>
              <div style={container}>
                <div style={{ ...skills, ...sccm }}>Microsoft SCCM, VMware vCenter 50%</div>
              </div>
            </Transition>
            <Divider />
            <Transition visible={visible} animation={anim3} duration={3500}>
              <div style={container}>
                <div style={{ ...skills, ...backup }}>Symantec Backup Exec, Veeam backup & replication 40%</div>
              </div>
            </Transition>
            <Divider />
            <Transition visible={visible} animation={anim3} duration={4000}>
              <div style={container}>
                <div style={{ ...skills, ...linux }}>RedHat, VMware ESXi 25%</div>
              </div>
            </Transition>
            <Divider />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default Infrastructure