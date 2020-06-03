import React from 'react'
import { Nav } from 'react-bootstrap';

const items = [
    {
        image: 'https://images.pexels.com/photos/256468/pexels-photo-256468.jpeg',
        text: 'Try our little quiz to see what reccomendations we have for you and how can you become more confident.',
        possition: 1
    },
    {
        image: 'https://images.unsplash.com/photo-1500995617113-cf789362a3e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        text: 'Play along because exercising is more fun while playing games, it will actually feel like no exercising at all',
        possition: 2
    },
    {
        image: 'https://images.unsplash.com/photo-1540151812223-c30b3fab58e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        text: 'Discover new materials that may help you understand better what next steps you should take.',
        possition: 3
    },
    {
        image: 'https://images.unsplash.com/photo-1568639152391-61b4303bead7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        text: 'Navigate to your profile to see your past activity and past quizes you submited.',
        possition: 4
    },
]
export default class FooterDiv extends React.Component {
    render() {
        const { possition } = this.props;
        const item = items.filter((item ) => item.possition === possition)

        return (
            <div style={{ display: "flex", flexDirection: "row", margin: '50px', width:"100%"}}>
                <img src={item[0].image} style={{ maxWidth: "40%", maxHeight: "40%"}} />
                <div style={{ flexDirection: "column", padding : "40px"}}>
                    <p style={{ maxWidth: "50%", }}>{item[0].text}</p>
                    <Nav.Link style={{ border: "1px solid blue", maxWidth: "40%", borderRadius: "10px"}} href="/register">Get Started Now</Nav.Link>
                </div>
            </div>
        )
    }
}
