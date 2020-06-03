import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Main from '../components/Main';

export default function Index() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Main />
      </Box>
    </Container>
  );
}
