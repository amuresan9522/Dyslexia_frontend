import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash'

import {  Container, Card, LinearProgress } from '@material-ui/core';
import { Button, Form } from 'react-bootstrap';
import {  addUserGameActitvity, recordGameResult } from '../services/user.service';
import { getWords } from '../services/game.service';
import AuthorisedMenu from '../components/Menu/AuthorisedMenu';

class Game extends Component {
    state = {
        index: 0,
        isWritenCorrectly: false,
        hasStarted: false,
        gameOver : false,
        startTime: '',
        endTime: '',
        textArray: [],
        userWords: [],
        userWord: ''
    }

    async componentDidMount() {
        const words = await getWords()
        await this.setState({ textArray : words })
    }

    startGame = async () => {
        await this.setState({ hasStarted : true, startTime : moment() })
    }

    onTypeFinished = async(event) => {
        if(this.state.index === 9) {
            await this.setState({ gameOver : true, endTime: moment() })

            const { startTime, endTime, textArray, userWords } = this.state;
            await recordGameResult({ start: startTime, end: endTime, words: textArray, userInput: userWords }, localStorage.getItem('token'))
        }

        await this.setState({ index: this.state.index + 1, isWritenCorrectly: false, userWords: _.concat(this.state.userWords, [this.state.userWord]), userWord : '' })
   }

    checkWordIsWritenCorrectly = async (event) => {
        if (event.target.value === this.state.textArray[this.state.index]) {
            await this.setState({ isWritenCorrectly: true })
        }

    }

    handleChange = (event) => {
        this.setState({ userWord : event.target.value })
    }

   render() {
       return (
        <Container maxWidth="md" >
            <AuthorisedMenu />
            <Card style={{ margin : "16px"}}>
                {this.state.gameOver ? 
                <div style={{ display: "flex", margin: "50px", justifyContent: "center"}}>
                    <Button variant="dark" >Game over. </Button>
                    {
                        window.location.replace('/profile')
                    }
                </div>
                :
                !this.state.hasStarted ? 
                <div style={{ display: "flex", margin: "50px", justifyContent: "center"}}>
                    <Button variant="primary" onClick={this.startGame} style={{marginLeft: "16px", backgroundColor: "orange", fontFamily: "Satisfy", fontWeight: "bold", border: "1px solid orange"}}>Start Game</Button>
                </div>
                : 
                (
                    
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "50px"}}>
                        <h1>Your Word Is : <span style={{ color: "red"}}><b>{this.state.textArray[this.state.index]} </b> </span> </h1>
                    <Form >
                        <Form.Group>
                            <Form.Control value={this.state.userWord} size="md" type="text" placeholder="Type Here" required onChange={this.handleChange}/>
                            <br />
                        </Form.Group>
                        <Button variant="primary" onClick={this.onTypeFinished} style={{marginLeft: "16px", backgroundColor: "orange", fontFamily: "Satisfy", fontWeight: "bold", border: "1px solid orange"}}>Next word</Button>
                    </Form>
                    </div>
                )
                }
            </Card>
        </Container>
       )
   }
}

export default Game;