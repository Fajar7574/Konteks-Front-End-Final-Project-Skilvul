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

function BuatBerita() {
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    
    return (
        <Row>
   
            <Profil/>
    
            <div class="col-10 ">
            <Container style={{marginTop:'25vh'}}>
            <Row >
            <Card>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3">
                https://example.com/users/
                </InputGroup.Text>
                <FormControl id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
            </Card>
            </Row>
            </Container>

            </div> 

        </Row>

               
        
    );
}

export default BuatBerita;
