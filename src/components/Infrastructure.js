import React from 'react'
import { Segment, Grid, Divider, Message, Transition } from 'semantic-ui-react'

const Infrastructure = ({ visible, anim3, anim2, clearAnim }) => {

  const container = { width: '100%', backgroundColor: 'gray' }
  const skills = { textAlign: 'right', padding: 5 }
  const hw = { width: '80%', backgroundColor: 'green', marginTop: 10 }
  const java = { width: '65%', backgroundColor: 'blue' }
  const js = { width: '60%', backgroundColor: 'turquoise', color: 'black' }
  const php = { width: '40%', backgroundColor: 'pink', color: 'black' }
  const css = { width: '35%', backgroundColor: 'yellow', color: 'black' }
  const others = { width: '30%', backgroundColor: 'purple' }
  const ruby = { width: '25%', backgroundColor: 'black' }
  return (
    <Segment size='large' raised style={{ backgroundColor: '#0d2347' }}>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column computer={6} mobile={16}>
            <Transition visible={visible} animation={anim2} duration={2000}>
              <Message style={{ marginTop: 10 }}>
                <Message.Header>Infrastructure</Message.Header>
                <p style={{ color: 'black' }}>
                  I was 11 years in pre-installation. First 3 years I worked mostly with workstations and after that my main focus was
                  in server pre-installation. It included software installation, OS imaging, hardware and rack installations.
                  So I am pretty familiar with the hardware. Operating systems were mostly Windows Servers but there were also some
                  RedHat Linux pre-installations. For the past 2,5 years I have been working in Operation Center. It includes system
                  monitoring and administration. I have gained knowledge in virtualization (mostly VMware based), backup solutions like
                  Symantec Backup Exec and Veeam.
                </p>
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
                <div style={{ ...skills, ...java }}>Java 65%</div>
              </div>
            </Transition>
            <Divider />
            <Transition visible={visible} animation={anim3} duration={2000}>
              <div style={container}>
                <div style={{ ...skills, ...js }}>JavaScript 60%</div>
              </div>
            </Transition>
            <Divider />
            <Transition visible={visible} animation={anim3} duration={2500}>
              <div style={container}>
                <div style={{ ...skills, ...php }}>PHP 40%</div>
              </div>
            </Transition>
            <Divider />
            <Transition visible={visible} animation={anim3} duration={3000}>
              <div style={container}>
                <div style={{ ...skills, ...css }}>CSS 35%</div>
              </div>
            </Transition>
            <Divider />
            <Transition visible={visible} animation={anim3} duration={3500}>
              <div style={container}>
                <div style={{ ...skills, ...others }}>C++, C#, C, Python 30%</div>
              </div>
            </Transition>
            <Divider />
            <Transition visible={visible} animation={anim3} duration={4000}>
              <div style={container}>
                <div style={{ ...skills, ...ruby }}>Ruby 25%</div>
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