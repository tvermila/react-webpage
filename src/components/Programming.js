import React from 'react'
import { Segment, Grid, Divider, Message, Transition } from 'semantic-ui-react'

const Programming = ({ visible, anim1, anim2, clearAnim }) => {

  const container = { width: '100%', backgroundColor: 'gray' }
  const skills = { textAlign: 'right', padding: 5 }
  const html = { width: '75%', backgroundColor: 'green', marginTop: 10 }
  const java = { width: '65%', backgroundColor: 'blue' }
  const js = { width: '60%', backgroundColor: 'turquoise', color: 'black' }
  const php = { width: '40%', backgroundColor: 'pink', color: 'black' }
  const css = { width: '35%', backgroundColor: 'yellow', color: 'black' }
  const others = { width: '30%', backgroundColor: 'purple' }
  const ruby = { width: '25%', backgroundColor: 'black' }
  return (
    <Segment size='large' raised style={{ backgroundColor: '#472b39' }}>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column computer={10} mobile={16}>
            <Transition onStart={clearAnim} visible={visible} animation={anim1} duration={1000}>
              <div style={container}>
                <div style={{ ...skills, ...html }}>HTML 75%</div>
              </div>
            </Transition>
            <Divider />
            <Transition visible={visible} animation={anim1} duration={1500}>
              <div style={container}>
                <div style={{ ...skills, ...java }}>Java 65%</div>
              </div>
            </Transition>
            <Divider />
            <Transition visible={visible} animation={anim1} duration={2000}>
              <div style={container}>
                <div style={{ ...skills, ...js }}>JavaScript 60%</div>
              </div>
            </Transition>
            <Divider />
            <Transition visible={visible} animation={anim1} duration={2500}>
              <div style={container}>
                <div style={{ ...skills, ...php }}>PHP 40%</div>
              </div>
            </Transition>
            <Divider />
            <Transition visible={visible} animation={anim1} duration={3000}>
              <div style={container}>
                <div style={{ ...skills, ...css }}>CSS 35%</div>
              </div>
            </Transition>
            <Divider />
            <Transition visible={visible} animation={anim1} duration={3500}>
              <div style={container}>
                <div style={{ ...skills, ...others }}>C++, C#, C, Python 30%</div>
              </div>
            </Transition>
            <Divider />
            <Transition visible={visible} animation={anim1} duration={4000}>
              <div style={container}>
                <div style={{ ...skills, ...ruby }}>Ruby 25%</div>
              </div>
            </Transition>
            <Divider />
          </Grid.Column>
          <Grid.Column computer={6} mobile={16}>
            <Transition visible={visible} animation={anim2} duration={2000}>
              <Message style={{ marginTop: 10 }}>
                <Message.Header>Programming</Message.Header>
                <p style={{ color: 'black' }}>
                  I have been programming mostly with Java during my studies, but also with PHP,
                  C, C++ and Python. Lately I have been studying latest JavaScript Frameworks,
                  espescially React, which I&#39;ve used to build this website.
                </p>
              </Message>
            </Transition>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default Programming