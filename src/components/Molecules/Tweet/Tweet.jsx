import React from 'react';
import './styles.scss';

// Icons
import {
  ChevronDown,
  MessageCircle,
  Repeat,
  Heart,
  Upload
} from 'react-feather';

// Atoms
import { Icon } from '../../Atoms';

const Tweet = () => {
  return (
    <div className="tweet">
      <div className="tweet__options">
        <Icon>
          <ChevronDown />
        </Icon>
      </div>
      <div className="tweet__avatar">
        <img
          alt="user-img"
          src="https://pbs.twimg.com/profile_images/1023303162122387456/RjVJbJVf_normal.jpg"
        />
      </div>
      <div className="tweet__content">
        <div className="tweet__content__userinfo">
          <span className="tweet__content__username">Emmanuel Villegas</span>
          <span className="tweet__content__email">@emmanuelV</span>
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ex
          sint, temporibus pariatur excepturi tenetur. A debitis repudiandae,
          enim laborum nisi maxime sapiente facere voluptatem possimus, libero
          hic provident beatae.
        </div>
        <div className="tweet__content__options">
          <div className="tweet_content__options__option">
            <Icon>
              <MessageCircle />
            </Icon>
            <span>500</span>
          </div>
          <div className="tweet_content__options__option">
            <Icon>
              <Repeat />
            </Icon>
            <span>500</span>
          </div>
          <div className="tweet_content__options__option">
            <Icon>
              <Heart />
            </Icon>
            <span>500</span>
          </div>
          <div className="tweet_content__options__option">
            <Icon>
              <Upload />
            </Icon>
            <span>500</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
