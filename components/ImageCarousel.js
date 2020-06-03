import React from 'react';
import { Container, Carousel } from 'react-bootstrap'

const carouselImagesUrls = [
    {
        src: "https://images.unsplash.com/photo-1549737221-bef65e2604a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        text: "Read"
    },
    {
        src: "https://images.unsplash.com/photo-1455884981818-54cb785db6fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1290&q=80",
        text: "Learn"
    },
    {
        src: "https://images.unsplash.com/photo-1504169448388-60f322bebb2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        text: "Explore"
    }
]

export default class ImageCarousel extends React.Component {
    render() {
        return (
            <Container maxwidth="md">
                <Carousel >
                {carouselImagesUrls.map((image, index) => {
                    return ( <Carousel.Item key={index} style={{ height: "500px"}}>
                        <div 
                            style={{
                                position: "relative",
                                textAlign: "center",
                                color: "white"
                            }}
                            key={index}
                        >
                        <img  src={image.src} width= "100%" height="500px" style={{objectFit : "cover"}}/ >
                        {image.text ? 
                        <div 
                            style={{
                                position: "absolute",
                                bottom: "8px",
                                left: "16px",
                                backgroundColor: "orange",
                                fontSize: "24px",
                                textAlign: "left",
                                padding: "20px",
                                fontFamily: "Satisfy"
                            }}
                        >{image.text}</div>
                        : null}
                    </div>
                        
                    </Carousel.Item>
                    )
                })}
                    </Carousel>
               
           </Container>
          );
    }
}
