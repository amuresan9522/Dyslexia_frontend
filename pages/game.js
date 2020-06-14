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
        console.log('words = ', words)
        console.log('length = ', words.length)
        await this.setState({ textArray : words })
    }

    startGame = async () => {
        await this.setState({ hasStarted : true, startTime : moment() })
    }

    onTypeFinished = async(event) => {
        if(this.state.index === this.state.textArray.length -1 ) {

            await this.setState({ gameOver : true, endTime: moment() })

            const { startTime, endTime, textArray } = this.state;

            const userWords =  _.concat(this.state.userWords, [this.state.userWord])
            
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
                    <Button variant="primary" onClick={this.startGame} style={{marginLeft: "16px", backgroundColor: "#F08080", fontFamily: "Satisfy", fontWeight: "bold", border: "1px solid #F08080"}}>Start Game</Button>
                </div>
                : 
                (
                    
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "50px"}}>
                        <h1> Try to type this word: <span style={{ color: "red"}}><b>{this.state.textArray[this.state.index]} </b> </span> </h1>
                        <h4>You are currently at word: <span style={{ color: "green", fontfamily: "Satisfy"}}  ><b> {this.state.index +1} </b></span> out of 5 </h4>
                    <Form >
                        <Form.Group>
                            <Form.Control value={this.state.userWord} size="md" type="text" placeholder="Type Here" required onChange={this.handleChange}/>
                            <br />
                        </Form.Group>
                        <Button variant="primary" onClick={this.onTypeFinished} style={{marginLeft: "20px", backgroundColor: "red", fontFamily: "Satisfy", fontWeight: "bold", border: "1px solid #F08080"}}>Next word</Button>
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