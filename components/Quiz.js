import React, { Fragment } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

import Router from 'next/router'

import MuiAlert from '@material-ui/lab/Alert';

import { Link, CircularProgress, Box, Container, LinearProgress } from '@material-ui/core';

import { getCurrentUser, addUserQuizActitvity } from '../services/user.service';
import { getQuizQuestions } from '../services/quiz.service'
import { calculateAssesmentPoints } from '../utils/calculateAssesmentPoints';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default class Quiz extends React.Component {
    state = {
        infoMessage: {
            type: "",
            message: ""
        },
        loading: false,
        user: {},
        questions: [],
        userResources: {}
    }

    async componentDidMount() {
        await this.setState({ loading :true })
        return Promise.all([
            getCurrentUser(localStorage.getItem('token')),
            getQuizQuestions()
        ]).then(([user, questions]) => {
            this.setState({ user : user.data, questions: questions.data, loading: false })
        })
    }

    async handleSubmit(values) {
        values.persist()
        await this.setState({ loading : true })

        const userResources = await calculateAssesmentPoints(await values)  

        await this.setState({ userResources: userResources })

        return addUserQuizActitvity({ resources: userResources.resources , points: userResources.points }, localStorage.getItem('token'))
    }

    async setError (errorMessage) {
        await this.setState({
          infoMessage: {
            type: "error",
            message: errorMessage
          },
          loading: false
        });
    };

    render () {
        const user = this.state.user
        const quiz = this.state.questions

        return (
            <Container maxWidth="md">
           { this.state.loading ? <LinearProgress /> : 
            <Fragment>
                <Box my={4}>
                    <Form onSubmit={(values) => {
                            return this.handleSubmit(values).then(() => {
                                this.setState({ loading: false })
                                Router.push('/profile')
                            })
                            .catch((error) => {
                                this.setError(error.message)
                            })
                        }}>
                            {quiz.map((entity, index) => {
                                return (
                                    <Form.Group key={index} as={Col} controlId="formGridState">
                                        <Form.Label>{entity.question}</Form.Label>
                                        <Form.Control as="select" >
                                            {entity.answers.map((answer, index) => {
                                                return (
                                                    <option key={index}>{answer}</option>
                                                )
                                            })}
                                        </Form.Control>
                                    </Form.Group>
                                )
                            })}
                            
                            <Button variant="primary" type="submit" style={{marginLeft: "16px", backgroundColor: "#F08080", fontFamily: "Satisfy", fontWeight: "bold", border: "1px solid #F08080"}}>
                                {this.state.loading ? <CircularProgress color="inherit" style={{ width: "20px", height: '15px'}}/>  : 'Submit'}
                            </Button>
                        </Form>
                    {!!this.state.infoMessage.message ? <Alert severity="error" style={{ margin: '20px'}}>{this.state.infoMessage.message}</Alert> : null}
                </Box>
              </Fragment>
    }
            </Container>
          );
    }
  
}
