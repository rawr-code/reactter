import React, { Fragment, useState, useEffect } from 'react';

// Icons
import { Settings } from 'react-feather';

// Atoms
import { Divider, Spinner } from '../../Atoms';

// Molecules
import { RightContent, Trend } from '../../Molecules';

const TrendLists = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = 'https://jsonplaceholder.typicode.com/users';
  const abortController = new AbortController();
  const signal = abortController.signal;

  const getRandomUsers = max => {
    return Math.floor(Math.random() * (max - 1)) + 1;
  };

  const getUsers = () =>
    fetch(url, { signal })
      .then(response => response.json())
      .then(jsonData => {
        const max = getRandomUsers(jsonData.length);
        const newData = [];

        for (let i = 0; i < max; i++) {
          let trend = jsonData[getRandomUsers(jsonData.length)];
          const tweets = Math.floor(Math.random() * (5987 - 0)) + 0;
          trend.tweets = tweets;

          newData.push(trend);
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
    <RightContent title="Tendencias para ti" icon={Settings}>
      {loading && <Spinner big />}
      {data.map((item, index) => (
        <Fragment key={index}>
          <Divider />
          <Trend
            city={item.address.city}
            name={item.company.name}
            tweets={item.tweets}
          />
        </Fragment>
      ))}
    </RightContent>
  );
};

export default TrendLists;
