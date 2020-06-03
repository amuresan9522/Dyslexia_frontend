import React from 'react';
import { Card, Jumbotron, Container, Nav } from 'react-bootstrap'

import Menu from './Menu';
import Alert from './Alert/Alert';
import FooterDiv from './DivOnClick';

const photoMenu = [
    {
        photo: "https://image.flaticon.com/icons/svg/167/167709.svg",
        text: "Quiz",
        alertText: "Try our little quiz to see what reccomendations we have for you and how can you become more confident",
        possition: 1
    },
    {
        photo: "https://image.flaticon.com/icons/svg/167/167739.svg",
        text: "Play",
        alertText: "Play along because exercising is more fun while playing games, it will actually feel like no exercising at all",
        possition: 2

    },
    {
        photo: "https://image.flaticon.com/icons/svg/167/167756.svg",
        text: "Resources",
        alertText: "Discover new materials that may help you understand better what next steps you should take.",
        possition: 3
    },
    {
        photo: "https://image.flaticon.com/icons/svg/167/167750.svg",
        text: "Profile",
        alertText: "Navigate to your profile to see your past activity and past quizes you submited",
        possition: 4
    }
]

export default class Main extends React.Component {
    state = {
        showComponent: false,
        componentId: 1
    }
    
    render() {
        return (
            <React.Fragment>
                <Menu/>
                <Jumbotron fluid style={{ margin: '38px', backgroundColor: "orange", color: "white", fontFamily: "Satify"}}>
                    <Container>
                        <h4>
                        Reading should be a fun, relaxing activity that can help you spread your wings and conquer the world.
                        <br/>
                        <br/>
                        But sometimes, you can find yourself struggling with reading or spelling.
                        <br/>
                        <br/>
                        Don't worry, there is something you can do to overcome this feeling.
                        </h4>
                    </Container>
                   
                </Jumbotron>
                <div style={{ display: "flex", flexDirection: "row"}}>
                    {photoMenu.map((item, index) => {
                        return (
                            <div style={{ cursor: "pointer"}} key={index} onClick={async () => {
                                    await this.setState({ showComponent: true, componentId: item.possition })
                                    
                                }}
                                >
                                <img src={item.photo} width="150px" height="150px" style={{ margin: "40px"}}/>
                                <div style={{ textAlign: "center", fontSize: "24px"}}>{item.text}</div>
                            </div>
                        )
                    })}
                </div>
                <hr />
                {
                    this.state.showComponent ? 
                    (
                    <FooterDiv possition={this.state.componentId} />
                    ) : null
                }
          </React.Fragment>
          );
    }
  
}
