import React from 'react';

import Tweet from '../Tweet';

const TweetsList = props => {
  const { tweets } = props;
  return (
    <div>
      {tweets.map(tweet => (
        <Tweet text={tweet.text} />
      ))}
    </div>
  );
};

export default TweetsList;
