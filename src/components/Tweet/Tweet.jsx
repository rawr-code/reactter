import React from 'react';

// Material UI Components
import { Card, CardHeader, CardContent } from '@material-ui/core';

const Tweet = props => {
  const { text } = props;
  return (
    <Card>
      <CardHeader title="Titulo" />
      <CardContent>{text}</CardContent>
    </Card>
  );
};

export default Tweet;
