import React from 'react';

import { Container, NavLink } from 'react-bootstrap'

const headerContent = [
    {
        name: "Dyslexia Help Center",
        href: "/"
    },
    {
        name: "ABOUT",
        href: "/about"
    },
    {
        name: "LOGIN",
        href: "/login"
    },
    {
        name: "REGISTER",
        href: "/register"
    }
]

export default class UnauthorisedMenu extends React.Component {
    render() {
        return (
            <Container maxwidth="md">
                <div style={{ display: "flex", flexDirection: "row"}}>
                    <img src="https://photos.smugmug.com/photos/i-SNDmCdF/0/5e629bef/XL/i-SNDmCdF-XL.png" width="200px" height="100px" />
                    <h3 style={{  marginTop: "30px" , color : "red", fontFamily: "Pacifico"}}>Dyslexia Help Center</h3>
                </div>
                <div style={{backgroundColor: "orange", color: "white", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                    {headerContent.map((el, index) => {
                        return (
                            <NavLink key={index} style={{ margin: "10px", paddingLeft: "30px",fontSize: "20px", fontWeight: "bold", color: "white", fontFamily: "Satisfy"} } href={el.href}>{el.name}</NavLink>
                        )
                    })}
                </div>
            </Container>
          );
    }
}
