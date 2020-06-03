import React from 'react';
import { LinearProgress, Container } from '@material-ui/core';

import { getCurrentUser } from '../../services/user.service';

import UnauthorisedMenu from './UnauthorisedMenu';
import AuthorisedMenu from './AuthorisedMenu';
import ImageCarousel from '../ImageCarousel';

export default class Menu extends React.Component {
    state = {
        user : {},
        loading : false,
        token: ''
    }
    
    async componentDidMount() {
        await this.setState({ loading :true })

        const token = await localStorage.getItem('token')
        if (!token) {
            this.setState({ token: '', loading : false })
        } else {
            return getCurrentUser(token)
            .then((data) => this.setState({ user : data.data, loading: false, token }))
        }
        
    }

    render() {
        const { token, loading, user } = this.state;
        return (
            loading ? <LinearProgress /> : 
            token ? 
            <Container maxWidth="md">
                <AuthorisedMenu user = {{ name: user.firstName }}/> 
                <ImageCarousel />

            </Container>
           :
           <Container maxWidth="md">
                <UnauthorisedMenu />
                <ImageCarousel />
            </Container> 
          );
    }
}
