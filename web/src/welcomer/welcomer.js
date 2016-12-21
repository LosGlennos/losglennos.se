import React, { Component } from 'react';
import { Container, Header, Image, Grid } from 'semantic-ui-react';
import picture from '../assets/martin.jpg'

class Welcomer extends Component {
  render() {
    return (
      <div className="masthead inverted vertical">
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width="5">
                <Image className="welcomer-image" src={picture} size="medium" shape="circular" />
              </Grid.Column>
              <Grid.Column width="11">
                <Container text>
                  <Header as="h1" inverted header>Martin Svensson</Header>
                  <Header as="h2" inverted header>System Developer</Header>
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Welcomer;