import React from 'react';
import { Form, Button } from 'react-bootstrap';

import Router from 'next/router'

import { Container, Box, CircularProgress } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';


import { register } from '../services/auth.service';

import Menu from '../components/Menu';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default class Register extends React.Component {
    state = {
        infoMessage: {
            type: "",
            message: ""
        },
        canRedirect: true,
        loading: false
    }

    setError (errorMessage) {
        this.setState({
          infoMessage: {
            type: "error",
            message: errorMessage
          },
          canRedirect: false
        });
      };

    handleSubmit(event) {
        event.preventDefault()
        
        this.setState({ loading : true })

        const email = event.target[0].value
        const password = event.target[1].value
        const firstName = event.target[2].value
        const lastName = event.target[3].value

        const data = {
            email,
            password,
            firstName,
            lastName
        }

       return register(data)
    }

    render () {
        return (
            <Container maxWidth="md">
                <Menu />
              <Box my={4} style={{ margin : "38px"}}>
                <Form onSubmit={(values) => {
                    this.handleSubmit(values)
                    .then(() => {
                        this.setState({ loading: false })

                        Router.push('/login')
                    })
                    .catch((error) => this.setError(error.message))
                }}>
                    <Form.Group controlId="formGroupEmail" controlId="validationCustom01">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required/>
                        <Form.Control.Feedback type="invalid">
                            Email
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"required />
                        <Form.Control.Feedback type="invalid">
                            Password is required
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control size="md" type="text" placeholder="First Name" required/>
                        <Form.Control.Feedback type="invalid">
                            First name is required
                        </Form.Control.Feedback>
                        <br />
        
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="md" placeholder="Last Name" required />
                        <Form.Control.Feedback type="invalid">
                            Last name is required
                        </Form.Control.Feedback>
                        <br />
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{ backgroundColor: "orange", fontFamily: "Satisfy", fontWeight: "bold", border: "1px solid orange"}}>
                        {this.state.loading ? <CircularProgress color="inherit" style={{ width: "20px", height: '15px'}}/>  : 'Register'}
                    </Button>
                </Form>
            {!!this.state.infoMessage.message ? <Alert severity="error" style={{ margin: '20px'}}>{this.state.infoMessage.message}</Alert> : null}
                
              </Box>
            </Container>
          );
    }
  
}
