import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

// Icons
import {
  ChevronDown,
  MessageCircle,
  Repeat,
  Heart,
  Upload
} from 'react-feather';

// Logo
import logo from '../../../images/twitter.png';

// Atoms
import { Icon } from '../../Atoms';

const Tweet = ({
  username,
  usertwitter,
  body,
  comments,
  retweets,
  likes,
  uploads
}) => {
  return (
    <div className="tweet">
      <div className="tweet__options">
        <Icon>
          <ChevronDown />
        </Icon>
      </div>
      <div className="tweet__avatar">
        <img alt="user-img" src={logo} />
      </div>
      <div className="tweet__content">
        <div className="tweet__content__userinfo">
          <span className="tweet__content__username">{username}</span>
          <span className="tweet__content__email">@{usertwitter}</span>
        </div>
        <div>{body}</div>
        <div className="tweet__content__options">
          <div className="tweet_content__options__option">
            <Icon>
              <MessageCircle />
            </Icon>
            <span>{comments}</span>
          </div>
          <div className="tweet_content__options__option">
            <Icon>
              <Repeat />
            </Icon>
            <span>{retweets}</span>
          </div>
          <div className="tweet_content__options__option">
            <Icon>
              <Heart />
            </Icon>
            <span>{likes}</span>
          </div>
          <div className="tweet_content__options__option">
            <Icon>
              <Upload />
            </Icon>
            <span>{uploads}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Tweet.propTypes = {
  username: PropTypes.string.isRequired,
  usertwitter: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  retweets: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  uploads: PropTypes.number.isRequired
};
export default Tweet;
