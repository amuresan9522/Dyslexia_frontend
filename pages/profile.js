import React from 'react';
import moment from 'moment'

import { withRouter } from 'next/router'


import { Container, Box, Avatar, LinearProgress, Card, CardContent,CardActions,  Button, Typography, Badge,  } from '@material-ui/core';
import LocalActivityIcon  from '@material-ui/icons/LocalActivity';
import Alert from '@material-ui/lab/Alert';

import { getCurrentUser } from '../services/user.service';

import Menu from '../components/Menu';
import Resources from '../components/Resources';


class Home extends React.Component {
    state = {
        loading: true,
        user: {}
    }

    componentDidMount() {
        return getCurrentUser(localStorage.getItem('token'))
        .then((data) => this.setState({ user : data.data, loading: false }))
    }

    render () {
        const user = this.state.user

        return (
            <Container maxWidth="md">
                {this.state.loading ? <LinearProgress style={{ marginTop: '50%' }}/> : 
              <Box my={4}>
                  <Menu />
                <div style={{display: 'flex', flexDirection: 'row', marginTop: '10%'}}>
                    {user.userQuizActivity ? 
                    <Badge badgeContent={user.userQuizActivity.length} color="primary">
                        <LocalActivityIcon />
                    </Badge>
                    :null 
                    }
                    <h1 style={{ paddingLeft: '10px'}}>{user.firstName} {user.lastName} profile page  </h1>
                    
                </div>
                    <div style={{ display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: '50%'}}>
                            <Alert severity="success">Quiz Activity History</Alert>
                            {user.userQuizActivity ? 
                            user.userQuizActivity.map((activity, index) => {
                                return (
                                    <Card key={index}>
                                        <CardContent>
                                        <Typography color="textSecondary" gutterBottom>
                                            On {moment(activity.createdAt).format('YYYY MM DD')}, you made the following progress with your quiz:
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            You got {activity.points} points and we offered you the following resources: 
                                            <br />
                                        </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Resources points={activity.points} />
                                        </CardActions>
                                        <br />
                                        <br />
                                    </Card>
                                )
                            })
                        : null}
                        </div>
                    
                        <div style={{ flex: "50%"}}>
                            <Alert severity="success">Game Activity History</Alert>
                            {user.userGameActivity ? 
                                user.userGameActivity.map((activity, index) => {
                                return (
                                    <Card key={index}>
                                        <CardContent>
                                        <Typography color="textSecondary" gutterBottom>
                                            On {moment(activity.start).format('YYYY MM DD')}, you made the following progress with your game:
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            You started the game at <b>{moment(activity.start).format('HH:mm:ss')} </b>
                                             and end it at  <b>{moment(activity.end).format('HH:mm:ss')}</b>
                                            <br />
                                        </Typography>
                                        <div style={{ display: "flex", flexDirection: "row"}}>
                                        <Typography variant="body2" component="div" style={{ flex: "50%"}}>
                                            We gave you the following words: 
                                            <ul>
                                            {activity.words.map((word, index) => {
                                                return (<li key={index}>{word}</li>)
                                            })}
                                            </ul>
                                        </Typography>
                                        <Typography variant="body2" component="div" style={{ flex: "50%"}}>
                                            You typed the following words: 
                                            <ul>
                                            {activity.userInput.map((word, index) => {
                                                return (<li key={index}>{word}</li>)
                                            })}
                                            </ul>
                                        </Typography>
                                        </div>
                                        
                                        </CardContent>
                                        
                                        <br />
                                        <br />
                                    </Card>
                                )
                            })
                            :null
                            }
                        </div>
                    </div>
                    
              </Box>
              }
            </Container>
          );
    }
  
}

export default withRouter(Home)
