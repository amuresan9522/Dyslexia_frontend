import React from 'react';
import Iframe from 'react-iframe'

import { withRouter } from 'next/router'

import { Container, Box } from '@material-ui/core';

import AuthorisedMenu from '../components/Menu/AuthorisedMenu';
import Steps from '../components/Steps';

const photoMenu = [
    {
        photo: "https://image.flaticon.com/icons/svg/2302/2302834.svg",
        text: "Struggle with learning simple rhymes"
    },
    {
        photo: "https://image.flaticon.com/icons/svg/2972/2972543.svg",
        text: "Have a speech delay"
    },
    {
        photo: "https://image.flaticon.com/icons/svg/2947/2947774.svg",
        text: "Have trouble following directions"
    },
    {
        photo: "https://image.flaticon.com/icons/svg/2809/2809650.svg",
        text: `Repeat/forget to add short  words such as  'and', 'the', 'for' `
    },
    {
        photo: "https://image.flaticon.com/icons/svg/254/254054.svg",
        text: "Find it difficult to tell left from right"
    }
]

export default class Resources extends React.Component {
    render () {
        return (
            <Container maxWidth="md">
                    <Box my={4} >
                        <AuthorisedMenu />
                        <div style={{ display: "flex", flexDirection:"row", margin: "30px"}}>
                            <img src="https://image.flaticon.com/icons/svg/1698/1698558.svg" width="150px" height="150px" />
                            <h1 style={{ marginTop: "50px"}}>What is dyslexia?</h1>
                        </div>
                        <Iframe 
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/65psPXWzNic"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        />
                        <h5 style={{ display: "flex", flexDirection:"row", margin: "30px"}}>
                        Dyslexia is most commonly associated with trouble learning to read. It affects a child’s ability to recognize and manipulate the sounds in language. Kids with dyslexia have a hard time decoding new words, or breaking them down into manageable chunks they can then sound out. This causes difficulty with reading, writing and spelling. They may compensate by memorizing words, but they’ll have trouble recognizing new words and may be slow in retrieving even familiar ones.
                        <br />
                        <br />
                        Dyslexia is not a reflection of a child’s intelligence — in fact it’s defined as a gap between a student’s ability and achievement. Some youngsters with dyslexia are able to keep up with their peers with extra effort at least for the first few grades. But by the third grade or so, when they need to be able to read quickly and fluently in order to keep up with their work, they run into trouble.
                        <br/>
                        <br/>
                        </h5>

                        <h3 style={{ textAlign: "center"}}>A young person with dyslexia may:</h3>

                        <div style={{ display: "flex"}}>

                            <div style={{ display: "flex" , flexDirection: "row", wordWrap: "normal", flexWrap: "wrap",  justifyContent: "center", alignItems: "center"}}>

                            {photoMenu.map((item, index) => {
                                return (
                                    <div key={index} onClick={this.onMouseOverICon}>
                                        <img src={item.photo} width="150px" height="150px" style={{ margin: "40px"}}/>
                                        <div style={{ maxWidth: '90%',padding: "10px",  fontSize: "20px", fontWeight: "bold"}}>{item.text}</div>
                                    </div>
                                )
                            })}
                            </div>
                        </div>
                        <br />
                        <br />
                        <h5>
                        A dyslexia diagnosis does not mean you will never learn to read. There are a number of programs that can help, which might include these features:
                        </h5>
                        <Steps />
                        <div style={{ display: 'flex', flexDirection: "row"}}>
                            <img style={{ flex: "70%", maxWidth: '40%', maxHeight: '40%'}} src="https://images.unsplash.com/photo-1530462943125-677cc511c87e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1647&q=80" />
                            <div style={{ flexDirection: "column", padding :"20px"}}>
                                <h5>Reading programs that been shown to help with dyslexia include:</h5>
                                <ul>
                                    <li>
                                        <a href="http://www.wilsonlanguage.com/programs/wilson-reading-system/">The Wilson Method</a>
                                    </li>
                                    <li>
                                        <a href="https://www.pafprogram.com/">Preventing Academic Failure (PAF)</a>
                                    </li>
                                    <li>
                                        <a href="https://lindamoodbell.com/">The Lindamood-Bell Program</a>
                                    </li>
                                    <li>
                                        <a href="https://www.voyagersopris.com/literacy/rave-o/overview">RAVE-O</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Box>
            </Container>
          );
    }
  
}