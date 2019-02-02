import React, { Component } from 'react';

import TweetsList from '../TweetsList';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      tweets: [
        {
          text: 'texto de prueba'
        },
        {
          text: 'texto de prueba'
        },
        {
          text: 'texto de prueba'
        }
      ]
    };
  }
  render() {
    const { tweets } = this.state;
    return (
      <div>
        <TweetsList tweets={tweets} />
      </div>
    );
  }
}

export default Main;
