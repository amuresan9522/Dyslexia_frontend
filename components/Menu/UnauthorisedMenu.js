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
                    <img src="https://photos.smugmug.com/photos/i-SNDmCdF/0/5e629bef/XL/i-SNDmCdF-XL.png" width="220px" height="110px"
                    style={{  marginTop: "-2%",position: "absolute ", left:"-1%"}} />
                    <h3 style={{  marginTop: "20px", color : "#40E0D0", fontFamily: "Pacifico",position: "relative ", left:"0",fontSize:"30px",
                right:"0",margin:"0 auto"}}>Dyslexia Help Center</h3>
                </div>
                <div style={{backgroundColor: "#F08080",marginBottom:"10px",marginTop:"-20px", color: "white", display: "flex", flexDirection: "row",marginTop:"7%",justifyContent: "center"}}>
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
