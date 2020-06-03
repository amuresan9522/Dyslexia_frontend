import React from 'react';

import { Container, LinearProgress} from '@material-ui/core';

export default class Logout extends React.Component{
    state = {
        loading: true
    }

    async componentDidMount() {
        localStorage.removeItem('token')
        await this.setState({loading : false })
        window.location.replace('/')
    }

    render () {
        return (
            <Container maxWidth="md">
                {this.state.loading ? <LinearProgress style={{ marginTop: '50%' }}/> : 
                    null
                    
                }

            </Container>
          );
    }
  
}