import React, { Component } from 'react';
import {Container, Menu} from 'semantic-ui-react';

class Navigation extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Container>
        <Menu fixed large pointing secondary inverted>
          <Menu.Item
            name='editorials'
            active={activeItem === 'editorials'}
            onClick={this.handleItemClick}>
            Editorials
          </Menu.Item>

          <Menu.Item
            name='reviews'
            active={activeItem === 'reviews'}
            onClick={this.handleItemClick}>
            Reviews
          </Menu.Item>

          <Menu.Item
            name='upcomingEvents'
            active={activeItem === 'upcomingEvents'}
            onClick={this.handleItemClick}>
            Upcoming Events
          </Menu.Item>
        </Menu>
      </Container>
    );
  }
}

export default Navigation;