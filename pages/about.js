import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import UnauthorisedMenu from '../components/Menu/UnauthorisedMenu';

export default function About() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <UnauthorisedMenu />
          <div style={{ margin :"0px 15px 0px 15px"}}>
            <img src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" width="100%" height="300px" />
            <br/><br/><br/><br/>
            <h1 style={{ textAlign: "center"}}>
              <span style={{ color: "red"}}>Support,</span>
              <span style={{ color: "#F08080"}}>Practice,</span>
              <span style={{ color: "Purple"}}>& Education</span>
            </h1>
            <div style={{ display: "flex", flexDirection: "row", margin: '50px', width:"100%"}}>
                <img src="https://images.unsplash.com/photo-1532774682361-95f0831019d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1379&q=80" style={{ maxWidth: "40%", maxHeight: "40%"}} />
                <div style={{ flexDirection: "column", padding : "20px"}}>
                    <h4 style={{ maxWidth: "70%", color: "purple" }}>Welcome to our help center!</h4>
                    <p>
                      All children learn, but not in exactly the same way <br/>
                      and often not on the same day. We are here to    <br/>                                                                                                     help you improve your reading abilities and to                                                                                                          offer more insights upon the issues you may have
                      encountered until now.<br/>
                      Take our quiz, read some information or play a <br/>
                      game while you are here. Enjoy!
                    </p>
                </div>
            </div>
            <div style= {{ position: "relative", textAlign: "left", color: "white", fontSize: "15px"}}>
              <img src="https://images.unsplash.com/photo-1590509028942-0ac2b8412dbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1379&q=80" width="100%" height="100px"/>
              <div style={{ position: "absolute", top: "8px", left: "10px"}}>
                <div>Contact</div>
                <div><i>Dyslexia Help Center</i></div>
                <div><b>Located</b> Cluj Napoca, Romania</div>
                <div><b>Email</b> <i>dyshelpcenter@gmail.com</i></div>
              </div>
            </div>
          </div>
          
        
      </Box>
    </Container>
  );
}
