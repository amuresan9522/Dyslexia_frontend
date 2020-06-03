import React from 'react';

import { withRouter } from 'next/router'

import { Container, Box } from '@material-ui/core';

import Quiz from '../components/Quiz'

import AuthorisedMenu from '../components/Menu/AuthorisedMenu';

class Home extends React.Component {
    render () {
        return (
            <Container maxWidth="md">
                    <Box my={4}>
                        <AuthorisedMenu />
                        <Quiz />
                    </Box>
            </Container>
          );
    }
  
}

export default withRouter(Home)
