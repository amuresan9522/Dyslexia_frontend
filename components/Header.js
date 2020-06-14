import React from 'react';
import { Container } from 'react-bootstrap'
import ImageCarousel from './ImageCarousel';

const headerContent = ["HOME", "ABOUT", "TESTS", "EXERCISES", "RESOURCES", "REGISTER"]

export default class Header extends React.Component {
    render() {
        return (
            <Container maxWidth="md">
                <div style={{ display: "flex", flexDirection: "row"}}>
                    <img src="https://thumbs.dreamstime.com/z/happy-cartoon-laughing-boy-girl-character-happy-boy-girl-face-emotion-vector-logo-icon-design-element-companies-76016966.jpg" width="200px" height="100px" />
                    <h3 style={{  marginTop: "30px" , color : "pink", fontFamily: "Pacifico"}}>Dyslexia Help center</h3>
                </div>
                <div style={{backgroundColor: "#F08080", color: "white", display: "flex", flexDirection: "row"}}>
                    {headerContent.map((el) => {
                        return (
                            <div style={{ margin: "10px", paddingLeft: "50px",fontSize: "24px", fontWeight: "bold"}}>{el}</div>
                        )
                    })}
                </div>
                <ImageCarousel />
        </Container>
          );
    }
}
