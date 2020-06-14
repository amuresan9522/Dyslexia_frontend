import React from 'react';
import {Navbar, Nav, Container, NavLink} from 'react-bootstrap'

const headerContent = [
    {
        name: "HOME",
        href: "/home"
    },
    {
        name: "TESTS",
        href: "/quiz"
    },
    {
        name: "EXERCISES",
        href: "/game"
    },
    {
        name: "RESOURCES",
        href: "/resources"
    },
    {
        name: "PROFILE",
        href: "/profile"
    },
    {
        name: "LOGOUT",
        href: "/logout"
    }
]

export default class AuthorisedMenu extends React.Component {
    render() {
        return (
            <Container maxwidth="md">
                <div style={{ display: "flex", flexDirection: "row"}}>
                    <img src="https://photos.smugmug.com/photos/i-SNDmCdF/0/5e629bef/XL/i-SNDmCdF-XL.png" width="200px" height="100px" />
                    <h3 style={{  marginTop: "30px" , color : "pink", fontFamily: "Pacifico"}}>Dyslexia Help Center</h3>
                </div>
                <div style={{backgroundColor: "#F08080", color: "white", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                    {headerContent.map((el, index) => {
                        return (
                            <NavLink key={index} style={{ margin: "10px", paddingLeft: "10px",fontSize: "20px", fontWeight: "bold", color: "white", fontFamily: "Satisfy"} } href={el.href}>{el.name}</NavLink>
                        )
                    })}
                </div>
            </Container>
          );
    }
}
