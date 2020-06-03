import React from 'react';
import { NavLink } from 'react-bootstrap';

import { withRouter } from 'next/router'

import { LinearProgress, Button, Box, Container } from '@material-ui/core';

import { getCurrentUser } from '../services/user.service';

import Menu from '../components/Menu';

const radiusImages = [
    {
        src: "https://images.unsplash.com/photo-1523292643061-ed55f8c45178?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        text:"Test yourself",
        href: '/quiz'
    },
    {
        src: "https://images.unsplash.com/photo-1500995617113-cf789362a3e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        text:"Practice",
        href: '/game'
    }
]

class Home extends React.Component {
    state = {
        loading: true,
        user: {}
    }

    componentDidMount() {
        return getCurrentUser(localStorage.getItem('token'))
        .then((data) => {
            this.setState({ user : data.data, loading: false })
        })
    }

    render () {
        const user = this.state.user

        return (
            <Container maxWidth="md">
                {
                    this.state.loading ? 
                        <LinearProgress style={{ marginTop: '50%' }}/> : 
                    <Box my={4}>
                        <Menu/>
                        <br />
                        <br />
                        <br />
                        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                            {radiusImages.map((image, index) => {
                            return ( <div style={{ height: "500px"}}>
                                <div 
                                    style={{
                                        position: "relative",
                                        textAlign: "center",
                                        color: "white"
                                    }}
                                    key={index}
                                >
                                <img src={image.src} width= "100%" height="auto" style={{objectFit : "cover", borderRadius: "50%", paddingLeft: "10px"}}/ >
                                <NavLink 
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        color: "white",
                                        fontWeight: "bold",
                                        transform: 'translate(-50%, -50%)',
                                        fontSize: "24px",
                                        textAlign: "left",
                                        padding: "20px",
                                        fontFamily: "Satisfy"
                                    }}
                                    href={image.href}
                                >{image.text}</NavLink>
                            </div>
                                
                            </div>
                            )
                        })}
                        </div>
                    </Box>
                }
            </Container>
          );
    }
  
}

export default withRouter(Home)
