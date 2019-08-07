import React from 'react';
import axios from 'axios';
import { Container, Card } from 'semantic-ui-react';

import User from './components/User';
import FollowerList from './components/FollowerList';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
      follower: {}
    };
  }

  getMyFollowers = url => {
    axios.get(url)
      .then(response => {
        this.setState({
          followers: response.data
        })
      })
      .catch(err => {
        console.log("There was an error: ", err);
      })
  }


  componentDidMount() {
    axios.get('https://api.github.com/users/thisbenrogers')
      .then(response => {
        this.setState({
          user: response.data
        })
        this.getMyFollowers(response.data.followers_url);
      })
      .catch(err => {
        console.log("There was an error: ", err);
      })
  }

  render() {
    return (
      <div className="App">
        <h1>React Github User Card</h1>
        <Container className="user">
          <Card.Group centered>
            <User userData={this.state.user} />
          </Card.Group>
        </Container>
        <h2>Followed By: </h2>
        <Container className="followers">
          <Card.Group>
            <FollowerList followers={this.state.followers} />
          </Card.Group>
        </Container>
      </div>
    );
  }
}

export default App;
