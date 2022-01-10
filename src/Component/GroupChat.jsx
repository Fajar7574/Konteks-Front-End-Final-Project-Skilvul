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
import Profil from "./MyProfil.jsx";


import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

function GroupChat() {
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    
    return (
        <Row bg="dark" style={{width:'100%'}}>
       
            <Profil/>
            <div class="col-md-1 "></div>
            <div class="col-md-8 ">
            <Container>
            <Row style={{marginLeft:40}}>
                <Card>
                    <Card.Body>
                        <Card className="text-center">
                        <Card.Header><h2>Campaign</h2></Card.Header>
                        <Card.Body style={{padding:0}}>
                        <Carousel >
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
                        <Card.Footer className="text-muted">
                        <Nav fill variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/Campaign/Group-Chat/Chat"><h5 className="txt-primary-2 text-center">Diskusi</h5></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Campaign/Group-Chat/Berita"><h5 className="txt-primary-2 text-center">Berita Terkait</h5></Nav.Link>
                        </Nav.Item>
                        </Nav>
                        </Card.Footer>
                        </Card>
                        <Card>
                        <Card.Header>
                            <img src={Logo} className="brand-image img-circle" width="30" height="30"/>
                            <strong className="me-auto"> Bootstrap</strong>
                            <small> 11 mins ago</small>
                        </Card.Header>
                        <Card.Body>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                erat a ante.
                            </p>
                        </Card.Body>
                        </Card>
                        <InputGroup>
                            <FormControl as="textarea" aria-label="With textarea" />
                            <InputGroup.Text><a href="" type="submit">Kirim</a></InputGroup.Text>
                        </InputGroup>
                           
                    </Card.Body>
                    <Card.Body>
                    
                    </Card.Body>
                    
                </Card>
            </Row>
            </Container>

            </div> 
            <div class="col-md-1 "></div>
        </Row>

               
        
    );
}

export default GroupChat;
