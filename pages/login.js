import React from 'react';
import { Form, Button } from 'react-bootstrap';

import Router from 'next/router'

import MuiAlert from '@material-ui/lab/Alert';

import { Link, CircularProgress, Container, Box } from '@material-ui/core';

import { login } from '../services/auth.service';

import Menu from '../components/Menu';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default class Login extends React.Component {
    state = {
        infoMessage: {
            type: "",
            message: ""
        },
        loading: false
    }

    handleSubmit(value) {
        event.preventDefault()

        this.setState({ loading : true })

        const email = value.target[0].value
        const password = value.target[1].value

        const data = {
            email,
            password
        }
        return login(data)
    }
    setError (errorMessage) {
        this.setState({
          infoMessage: {
            type: "error",
            message: errorMessage
          },
          loading: false
        });
    };

    render () {
        return (
            <Container maxWidth="md">
                <Menu/>
              <Box my={4} style={{ margin : "38px"}}>
                <Form onSubmit={(values) => {
                    return this.handleSubmit(values).then((data) => {
                        this.setState({ loading: false })
                        localStorage.setItem('token', data.data.accesToken)
                        Router.push({ pathname: '/home'})
                    })
                    .catch((error) => {
                        this.setError(error.message)
                    })
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
                    <Button variant="primary" type="submit" style={{ backgroundColor: "orange", fontFamily: "Satisfy", fontWeight: "bold", border: "1px solid orange"}}>
                        {this.state.loading ? <CircularProgress color="inherit" style={{ width: "20px", height: '15px'}}/>  : 'Log in'}
                    </Button>
                </Form>
                {!!this.state.infoMessage.message ? <Alert severity="error" style={{ margin: '20px'}}>{this.state.infoMessage.message}</Alert> : null}

                <Link href="/register">Dont have an account? Register</Link>

              </Box>
            </Container>
          );
    }
  
}
