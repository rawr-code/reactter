import React, { Fragment, useState, useEffect } from 'react';

// Atoms
import { Divider, Spinner } from '../../Atoms';

// Molecules
import { RightContent, FollowTrend } from '../../Molecules';

const Follow = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = 'https://jsonplaceholder.typicode.com/users';
  const abortController = new AbortController();
  const signal = abortController.signal;

  const getRandomUsers = max => {
    return Math.floor(Math.random() * (max - 1)) + 1;
  };

  const getUsers = () =>
    fetch(url, { signal: signal })
      .then(response => response.json())
      .then(jsonData => {
        const max = getRandomUsers(jsonData.length);
        const newData = [];

        for (let i = 0; i < max; i++) {
          newData.push(jsonData[getRandomUsers(jsonData.length)]);
        }
        setLoading(false);
        setData(newData);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.error('Fetch aborted');
        } else {
          console.error('Another error', err);
        }
      });

  useEffect(() => {
    getUsers();

    return () => abortController.abort();
  }, []);

  return (
    <RightContent title="A quién seguir">
      {loading && <Spinner big />}
      {data.map((item, index) => (
        <Fragment key={index}>
          <Divider />
          <FollowTrend name={item.name} username={item.username} />
        </Fragment>
      ))}
    </RightContent>
  );
};

export default Follow;
