import React from "react";
import { Nav, Container,Card,Row} from 'react-bootstrap';
import 'react-pro-sidebar/dist/css/styles.css';
import Carousel from 'react-bootstrap/Carousel';
import background from "./css/Background.png";
import Logo from "./assets/img/KonteksLogo.png";
import Profil from "./MyProfil.jsx";
import { useState } from 'react';


import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

function GroupBerita() {
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    


    return (
        <Row style={{width:'100%'}}>
            <Profil/>
            <div class="col-md-1 "></div>
            <div class="col-md-8 ">
            <Container>
            <Row >
                <Card style={{marginLeft:40}}>
                    <Card.Body>
                    <Card className="text-center">
                        <Card.Header><h2>Campaign</h2></Card.Header>
                        <Card.Body style={{padding:0}}>
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <img
                            className="d-block"
                                style={{
                                width:'100%',
                                maxWidth: 1920,
                                maxHeight: 240,
                                }}
                            src={background}
                            alt="First slide"
                            />
                            
                            <Carousel.Caption
                            style={{textAlign:'left'}}
                            >
                                
                                <a href="" class="txt-primary text-decoration-none"><h2 class="mb-2">
                                    Judul
                                </h2></a>
                                <p class="mb-0">
                                    Berita
                                </p>
                                <span class="mr-2">admin </span>fafafa
                                
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                        </Card.Body>
                        <Card.Footer className="text-muted" style={{padding:0}}>
                        <Nav fill variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/Campaign/Group-Chat"><h5 className="txt-primary-2 text-center">Diskusi</h5></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Campaign/Group-Chat/Berita"><h5 className="txt-primary-2 text-center">Berita Terkait</h5></Nav.Link>
                        </Nav.Item>
                        </Nav>
                        </Card.Footer>
                        </Card>
                        
                    
                    </Card.Body>
                    
                </Card>
            </Row>
            </Container>

            </div> 
            <div class="col-md-1 "></div>
            

        </Row>

               
        
    );
}

export default GroupBerita;
