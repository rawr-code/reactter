import React, { Fragment, useState, useEffect } from 'react';
import './styles.scss';

// Icons
import { Star } from 'react-feather';

// Atoms
import {
  MainContainer,
  Toolbar,
  Divider,
  Spinner
} from '../../components/Atoms';

// Molecules
import { Tweet } from '../../components/Molecules';

// Organisms
import { TrendLists, Follow } from '../../components/Organisms';

const HomeView = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const urlPosts = 'https://jsonplaceholder.typicode.com/posts';
  const urlUsers = 'https://jsonplaceholder.typicode.com/users';
  const abortController = new AbortController();
  const signal = abortController.signal;

  const getRandomUsers = max => {
    return Math.floor(Math.random() * (max - 1)) + 1;
  };

  const getPost = () => {
    fetch(urlUsers, { signal: signal })
      .then(response => response.json())
      .then(users =>
        fetch(urlPosts, { signal: signal })
          .then(response => response.json())
          .then(jsonPosts => {
            const max = getRandomUsers(jsonPosts.length);
            const newData = [];

            for (let i = 0; i < max; i++) {
              let tweet = jsonPosts[getRandomUsers(jsonPosts.length)];
              const user = users.find(item => item.id === tweet.userId);
              const comments = Math.floor(Math.random() * (100 - 0)) + 0;
              const retweets = Math.floor(Math.random() * (30 - 0)) + 0;
              const likes = Math.floor(Math.random() * (50 - 0)) + 0;
              const uploads = Math.floor(Math.random() * (10 - 0)) + 0;
              tweet.user = user;
              tweet.comments = comments;
              tweet.retweets = retweets;
              tweet.likes = likes;
              tweet.uploads = uploads;

              newData.push(tweet);
            }
            setLoading(false);
            setPosts(newData);
          })
          .catch(err => {
            if (err.name === 'AbortError') {
              console.error('Fetch aborted');
            } else {
              console.error('Another error', err);
            }
          })
      )
      .catch(err => {
        if (err.name === 'AbortError') {
          console.error('Fetch aborted');
        } else {
          console.error('Another error', err);
        }
      });
  };

  useEffect(() => {
    getPost();

    return () => abortController.abort();
  }, []);
  return (
    <MainContainer>
      <div className="homepage_left">
        <Toolbar title="Inicio" icon={Star} />
        {loading && <Spinner big />}
        {posts.map((item, index) => (
          <Fragment key={index}>
            <Divider />
            <Tweet
              username={item.user.name}
              usertwitter={item.user.username}
              body={item.body}
              comments={item.comments}
              retweets={item.retweets}
              likes={item.likes}
              uploads={item.uploads}
            />
          </Fragment>
        ))}
      </div>
      <div>
        <TrendLists />
        <Follow />
      </div>
    </MainContainer>
  );
};

export default HomeView;
