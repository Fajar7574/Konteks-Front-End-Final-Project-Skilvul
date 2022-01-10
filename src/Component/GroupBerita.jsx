import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Component,Body, Navbar, Nav, NavDropdown,Form,FormControl,Button,Container,Card,Row,InputGroup} from 'react-bootstrap';
import 'react-pro-sidebar/dist/css/styles.css';
import User from "@mui/icons-material/AccountCircle";
import Back from '@mui/icons-material/ArrowBack';
import ForumIcon from '@mui/icons-material/Forum';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Carousel from 'react-bootstrap/Carousel';
import background from "./css/Background.png";
import Logo from "./assets/img/KonteksLogo.png";
import Profil from "./MyProfil.jsx"


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
        <Row>
            <Profil/>
            <div class="col-md-10 " style={{marginLeft:20}}>
            <Container>
            <Row >
                <Card>
                    <Card.Body>
                        <Card className="text-center">
                        <Card.Header><h2>Campaign</h2></Card.Header>
                        <Card.Body style={{padding:0}}>
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={background}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={background}
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={background}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                        </Card.Body>
                        <Card.Footer className="text-muted">
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
                        <dataBerita3/>
                    </Card.Body>
                    <Card.Body>
                    
                    </Card.Body>
                    
                </Card>
            </Row>
            </Container>

            </div> 

            

        </Row>

               
        
    );
}

export default GroupBerita;
